
import { UserProgress } from '../../types';
import { idbService } from './indexedDB';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';
const CHUNK_SIZE = 2800; 

// --- DEFAULTS ---
export const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 0,
  lastLoginDate: '', 
  lastLocalUpdate: Date.now(),
  lastCloudSync: 0,
  wordsLearnedToday: 0,
  aiGenerationsToday: 0,
  darkMode: false,
  premiumStatus: false,
  premiumExpiration: null,
  wordProgress: {},
  wordComments: {},
  usedPromoCodes: [],
  hasSeenOnboarding: false,
  userName: '',
  photoUrl: '',
  customWords: [],
  dailyProgressByLevel: {},
  wallet: { coins: 100 }, 
  inventory: { streakFreeze: 0, timeFreeze: 1, bomb: 1 },
  blitzHighScores: {}
};

// --- ENCODING UTILS (UTF-8 Safe) ---
// Standard btoa/atob fails with Russian characters. We use this wrapper.
const safeEncode = (str: string): string => {
    return window.btoa(unescape(encodeURIComponent(str)));
};

const safeDecode = (str: string): string => {
    return decodeURIComponent(escape(window.atob(str)));
};

// --- STATE ---
let memoryCache: UserProgress | null = null;
let cloudUploadTimer: any = null;
let isUploading = false;

// --- UTILS ---
export const getSecureNow = () => Date.now();

// --- TELEGRAM CLOUD ADAPTER ---
const tgCloud = {
    isSupported: () => {
        const tg = window.Telegram?.WebApp;
        return tg && 
               typeof tg.isVersionAtLeast === 'function' && 
               tg.isVersionAtLeast('6.9') && 
               !!tg.CloudStorage;
    },
    
    save: async (data: UserProgress): Promise<boolean> => {
        if (!tgCloud.isSupported()) return false;
        try {
            const jsonStr = JSON.stringify(data);
            // Use safe encoding instead of LZW to prevent crashes with Cyrillic
            const finalValue = "B64:" + safeEncode(jsonStr);
            
            const chunks: string[] = [];
            for (let i = 0; i < finalValue.length; i += CHUNK_SIZE) {
                chunks.push(finalValue.substring(i, i + CHUNK_SIZE));
            }

            const setItem = (k: string, v: string) => new Promise<boolean>(resolve => {
                window.Telegram!.WebApp.CloudStorage.setItem(k, v, (err, stored) => resolve(!err && stored));
            });

            // Save chunks
            const promises = chunks.map((chunk, i) => setItem(`${STORAGE_KEY}_chunk_${i}`, chunk));
            await Promise.all(promises);

            // Update Metadata
            const meta = { 
                count: chunks.length, 
                timestamp: data.lastLocalUpdate, 
                device: navigator.userAgent 
            };
            
            await setItem(`${STORAGE_KEY}_meta`, JSON.stringify(meta));
            return true;
        } catch (e) {
            console.error("Cloud backup failed", e);
            return false;
        }
    },

    getMetadata: async (): Promise<{ timestamp: number } | null> => {
        if (!tgCloud.isSupported()) return null;
        return new Promise(resolve => {
            window.Telegram!.WebApp.CloudStorage.getItem(`${STORAGE_KEY}_meta`, (err, val) => {
                if (!val) resolve(null);
                try {
                    resolve(JSON.parse(val));
                } catch {
                    resolve(null);
                }
            });
        });
    },

    load: async (): Promise<UserProgress | null> => {
        if (!tgCloud.isSupported()) return null;
        try {
            const getItem = (k: string) => new Promise<string>(resolve => {
                window.Telegram!.WebApp.CloudStorage.getItem(k, (err, val) => resolve(val || ""));
            });

            const metaStr = await getItem(`${STORAGE_KEY}_meta`);
            if (!metaStr) return null;
            
            const meta = JSON.parse(metaStr);
            const keys = Array.from({length: meta.count}, (_, i) => `${STORAGE_KEY}_chunk_${i}`);
            
            const getItems = (ks: string[]) => new Promise<Record<string,string>>(resolve => {
                window.Telegram!.WebApp.CloudStorage.getItems(ks, (err, vals) => resolve(vals || {}));
            });

            const values = await getItems(keys);
            let fullString = "";
            for(const k of keys) fullString += values[k] || "";

            let jsonStr = "";
            
            // Handle new format
            if (fullString.startsWith("B64:")) {
                const base64 = fullString.substring(4);
                jsonStr = safeDecode(base64);
            } 
            // Fallback for legacy (might fail with cyrillic, but we keep it just in case)
            else if (fullString.startsWith("LZ:")) {
                // Legacy LZW path - likely to fail for current user, but good for cleanup
                return null; 
            } else {
                return null;
            }

            return JSON.parse(jsonStr) as UserProgress;
        } catch (e) {
            console.error("Cloud load error", e);
            return null;
        }
    }
};

// --- CORE FUNCTIONS ---

export const initUserProgress = async (): Promise<{ data: UserProgress, hasConflict: boolean, cloudDate?: number }> => {
    let localData = await idbService.load();
    const cloudMeta = await tgCloud.getMetadata();
    
    if (!localData && cloudMeta) {
        console.log("No local data, downloading cloud backup...");
        const cloudData = await tgCloud.load();
        if (cloudData) {
            await idbService.save(cloudData);
            memoryCache = cloudData;
            return { data: checkDailyReset(cloudData), hasConflict: false };
        }
    }

    if (!localData) {
        memoryCache = { ...INITIAL_PROGRESS };
        return { data: memoryCache, hasConflict: false };
    }

    let hasConflict = false;
    if (cloudMeta && localData.lastLocalUpdate) {
        if (cloudMeta.timestamp > localData.lastLocalUpdate + 60000) {
            console.warn("Cloud data is newer than local!");
            hasConflict = true;
        }
    }

    memoryCache = localData;
    return { 
        data: checkDailyReset(localData), 
        hasConflict, 
        cloudDate: cloudMeta?.timestamp 
    };
};

export const getUserProgress = async (): Promise<UserProgress> => {
    if (memoryCache) return memoryCache;
    const res = await initUserProgress();
    return res.data;
};

export const downloadCloudData = async (): Promise<UserProgress | null> => {
    const data = await tgCloud.load();
    if (data) {
        memoryCache = data;
        await idbService.save(data);
        return data;
    }
    return null;
};

export const saveUserProgress = async (progress: UserProgress, forceCloudUpload = false) => {
    progress.lastLocalUpdate = Date.now();
    memoryCache = progress;
    await idbService.save(progress);

    const timeSinceLastSync = Date.now() - (progress.lastCloudSync || 0);
    const MIN_SYNC_INTERVAL = 5 * 60 * 1000; 

    if (forceCloudUpload || timeSinceLastSync > MIN_SYNC_INTERVAL) {
        scheduleCloudUpload(progress);
    }
};

const scheduleCloudUpload = (progress: UserProgress) => {
    if (cloudUploadTimer) clearTimeout(cloudUploadTimer);
    
    cloudUploadTimer = setTimeout(async () => {
        if (isUploading || !navigator.onLine) return;
        isUploading = true;
        
        console.log("☁️ Syncing to cloud (Throttled)...");
        const success = await tgCloud.save(progress);
        
        if (success) {
            progress.lastCloudSync = Date.now();
            await idbService.save(progress);
            console.log("✅ Cloud Sync OK");
        }
        
        isUploading = false;
    }, 3000);
};

export const checkDailyReset = (progress: UserProgress): UserProgress => {
  const now = getSecureNow();
  const todayDateStr = new Date(now).toISOString().split('T')[0];

  if (progress.lastLoginDate !== todayDateStr) {
       if (progress.lastLoginDate) {
           const lastDate = new Date(progress.lastLoginDate);
           const current = new Date(todayDateStr);
           const diffTime = Math.abs(current.getTime() - lastDate.getTime());
           const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
           
           if (diffDays > 1) {
               if (progress.inventory.streakFreeze > 0) {
                   progress.inventory.streakFreeze -= 1;
               } else {
                   progress.streak = 0;
               }
           }
       } else {
           progress.streak = 0;
       }

       progress.wordsLearnedToday = 0;
       progress.aiGenerationsToday = 0; 
       progress.dailyProgressByLevel = {}; 
       progress.nextSessionUnlockTime = undefined;
       progress.lastLoginDate = todayDateStr;
       saveUserProgress(progress, true);
  } else if (progress.nextSessionUnlockTime && now >= progress.nextSessionUnlockTime) {
      progress.wordsLearnedToday = 0;
      progress.dailyProgressByLevel = {}; 
      progress.nextSessionUnlockTime = undefined;
      saveUserProgress(progress, true);
  }
  
  return progress;
};

export const syncTelegramUserData = async () => {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (tgUser) {
        const progress = await getUserProgress();
        let changed = false;
        if (tgUser.first_name && (!progress.userName || progress.userName === 'User')) {
            progress.userName = tgUser.first_name;
            changed = true;
        }
        if (tgUser.photo_url && progress.photoUrl !== tgUser.photo_url) {
            progress.photoUrl = tgUser.photo_url;
            changed = true;
        }
        if (changed) await saveUserProgress(progress);
    }
};

export const resetUserProgress = async (): Promise<UserProgress> => {
    if (tgCloud.isSupported()) {
        const metaStr = await new Promise<string>(r => window.Telegram!.WebApp.CloudStorage.getItem(`${STORAGE_KEY}_meta`, (e,v) => r(v||"")));
        if (metaStr) {
            try {
                const meta = JSON.parse(metaStr);
                const keys = [`${STORAGE_KEY}_meta`, ...Array.from({length: meta.count}, (_, i) => `${STORAGE_KEY}_chunk_${i}`)];
                await new Promise(r => window.Telegram!.WebApp.CloudStorage.removeItems(keys, () => r(true)));
            } catch (e) { console.error(e); }
        }
    }
    await idbService.clear();
    localStorage.removeItem(STORAGE_KEY);
    memoryCache = { ...INITIAL_PROGRESS };
    return memoryCache;
};

export const completeOnboarding = async (name?: string): Promise<UserProgress> => {
  const progress = await getUserProgress();
  progress.hasSeenOnboarding = true;
  if (name) progress.userName = name;
  progress.lastLoginDate = new Date().toISOString().split('T')[0];
  await saveUserProgress(progress, true);
  return progress;
};

export const logoutUser = async (): Promise<void> => {
    const progress = await getUserProgress();
    await tgCloud.save(progress); 
    progress.hasSeenOnboarding = false;
    await idbService.save(progress);
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};

// --- MANUAL BACKUP (Copy/Paste) ---

export const exportUserData = async (): Promise<string> => {
    try {
        const progress = await getUserProgress();
        const jsonStr = JSON.stringify(progress);
        // Use safeEncode to handle Cyrillic characters correctly
        const encoded = safeEncode(jsonStr);
        return "VM5:" + encoded;
    } catch (e) {
        console.error("Export failed", e);
        return "";
    }
};

export const importUserData = async (inputCode: string): Promise<{success: boolean, message: string}> => {
    try {
        let cleanCode = inputCode.trim();
        if (cleanCode.startsWith("VM5:")) cleanCode = cleanCode.substring(4);
        
        // Use safeDecode to handle Cyrillic characters correctly
        const jsonStr = safeDecode(cleanCode);
        const data = JSON.parse(jsonStr);
        
        if (!data.wordProgress) throw new Error("Неверный формат данных");

        // Restore date to avoid issues
        data.lastLocalUpdate = Date.now();
        
        memoryCache = data;
        await saveUserProgress(data, true);

        return { success: true, message: "Данные успешно восстановлены!" };
    } catch (e: any) {
        console.error(e);
        return { success: false, message: "Ошибка кода: убедитесь, что скопировали весь текст." };
    }
};

export const forceSave = async () => {
    if (memoryCache) await saveUserProgress(memoryCache, true);
}
