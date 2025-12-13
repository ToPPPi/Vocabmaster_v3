
import { UserProgress } from '../../types';
import { idbService } from './indexedDB';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';

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

// --- ENCODING UTILS ---
const safeEncode = (str: string): string => {
    return window.btoa(unescape(encodeURIComponent(str)));
};

const safeDecode = (str: string): string => {
    return decodeURIComponent(escape(window.atob(str)));
};

// --- STATE ---
let memoryCache: UserProgress | null = null;
let isIdbBroken = false; // Flag to skip IDB if it failed once

// --- UTILS ---
export const getSecureNow = () => Date.now();

// --- CORE FUNCTIONS (HYBRID STORAGE) ---

export const initUserProgress = async (): Promise<{ data: UserProgress, hasConflict: boolean, cloudDate?: number }> => {
    let localData: UserProgress | null = null;

    // 1. Try LocalStorage FIRST (Fastest, Sync) - This is our "Pocket"
    try {
        const rawLS = localStorage.getItem(STORAGE_KEY);
        if (rawLS) {
            localData = JSON.parse(rawLS);
            console.log("✅ Loaded from LocalStorage");
        }
    } catch (e) {
        console.warn("LocalStorage read failed", e);
    }

    // 2. Try IndexedDB (The "Warehouse") - async, might be fresher but slower
    if (!isIdbBroken) {
        try {
            // We race IDB against a timeout so we don't hang forever
            const idbData = await idbService.load(); 
            if (idbData) {
                // If IDB has newer data than LS (based on lastLocalUpdate), use it
                if (!localData || (idbData.lastLocalUpdate > (localData.lastLocalUpdate || 0))) {
                    console.log("✅ Loaded newer data from IndexedDB");
                    localData = idbData;
                    // Sync back to LS to keep it fresh
                    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(idbData)); } catch(e){}
                }
            }
        } catch (e) {
            console.error("⚠️ IndexedDB failed/timed out. Switching to LocalStorage mode.", e);
            isIdbBroken = true; // Stop trying to use IDB this session
        }
    }
    
    // 3. If no data anywhere, start fresh
    if (!localData) {
        console.log("🌟 New user (no data found).");
        memoryCache = { ...INITIAL_PROGRESS };
        return { data: memoryCache, hasConflict: false };
    }

    // 4. Success
    memoryCache = localData;
    return { 
        data: checkDailyReset(localData), 
        hasConflict: false 
    };
};

export const getUserProgress = async (): Promise<UserProgress> => {
    if (memoryCache) return memoryCache;
    const res = await initUserProgress();
    return res.data;
};

// Kept for interface compatibility
export const downloadCloudData = async (): Promise<UserProgress | null> => {
    return null; 
};

export const saveUserProgress = async (progress: UserProgress, forceCloudUpload = false) => {
    progress.lastLocalUpdate = Date.now();
    memoryCache = progress;
    
    // HYBRID SAVE STRATEGY:
    
    // 1. Save to LocalStorage (Guaranteed synchronous backup)
    try {
        const json = JSON.stringify(progress);
        localStorage.setItem(STORAGE_KEY, json);
    } catch (e) {
        console.error("LocalStorage Save Failed (Quota?)", e);
    }

    // 2. Save to IndexedDB (Best effort, async)
    if (!isIdbBroken) {
        idbService.save(progress).catch(e => {
            console.warn("IDB Write Failed", e);
            isIdbBroken = true; // Stop using broken IDB
        });
    }
};

export const checkDailyReset = (progress: UserProgress): UserProgress => {
  const now = getSecureNow();
  const todayDateStr = new Date(now).toISOString().split('T')[0];

  if (progress.lastLoginDate !== todayDateStr) {
       // ... (Logic same as before) ...
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
    // Nuclear option: Clear EVERYTHING
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) { console.error(e); }

    try {
        await idbService.deleteDatabase();
    } catch (e) { console.error(e); }
    
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
    progress.hasSeenOnboarding = false;
    await saveUserProgress(progress, true);
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};

export const exportUserData = async (): Promise<string> => {
    try {
        const progress = await getUserProgress();
        const jsonStr = JSON.stringify(progress);
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
        
        const jsonStr = safeDecode(cleanCode);
        const importedData = JSON.parse(jsonStr) as UserProgress;
        
        if (!importedData.wordProgress) throw new Error("Неверный формат данных");

        // Merge logic
        let currentData: UserProgress | null = null;
        try { currentData = await getUserProgress(); } catch(e) {}
        
        const mergedData: UserProgress = {
            ...importedData,
            userName: currentData?.userName || importedData.userName, 
            photoUrl: currentData?.photoUrl || importedData.photoUrl,
            lastLocalUpdate: Date.now(),
            hasSeenOnboarding: true 
        };
        
        memoryCache = mergedData;
        await saveUserProgress(mergedData, true);

        return { success: true, message: "Прогресс восстановлен!" };
    } catch (e: any) {
        console.error(e);
        return { success: false, message: "Ошибка кода." };
    }
};

export const forceSave = async () => {
    if (memoryCache) await saveUserProgress(memoryCache, true);
}
