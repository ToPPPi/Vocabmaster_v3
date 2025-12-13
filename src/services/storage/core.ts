
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

// --- UTILS ---
export const getSecureNow = () => Date.now();

// --- ENCODING ---
const safeEncode = (str: string): string => window.btoa(unescape(encodeURIComponent(str)));
const safeDecode = (str: string): string => decodeURIComponent(escape(window.atob(str)));

// --- STATE ---
let memoryCache: UserProgress | null = null;

// --- CORE FUNCTIONS ---

export const initUserProgress = async (): Promise<{ data: UserProgress, hasConflict: boolean, cloudDate?: number }> => {
    // STRATEGY: INSTANT BOOT
    // 1. Try LocalStorage FIRST. It is synchronous and fast. 
    // If we find data here, we return IMMEDIATELY to render the UI. 
    // We do NOT wait for IndexedDB to open, as it hangs on some Android WebViews.
    
    let localData: UserProgress | null = null;
    try {
        const rawLS = localStorage.getItem(STORAGE_KEY);
        if (rawLS) {
            localData = JSON.parse(rawLS);
            console.log("🚀 Fast Boot: Loaded from LocalStorage");
        }
    } catch (e) {
        console.warn("LocalStorage error:", e);
    }

    if (localData) {
        memoryCache = localData;
        
        // Fire and forget: Try to sync with IDB in background, but don't block the UI
        syncIdbInBackground(localData);
        
        return { data: checkDailyReset(localData), hasConflict: false };
    }

    // 2. Slow Path: Only if LS is empty (New user or cleared cache)
    // We try IDB with a strict timeout race.
    try {
        const idbPromise = idbService.load();
        const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 1000));
        
        // Race: if IDB takes > 1s, we give up and start fresh
        const idbData = await Promise.race([idbPromise, timeoutPromise]);
        
        if (idbData) {
            console.log("📂 Loaded from IndexedDB (Fallback)");
            // Save to LS for next time to be fast
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(idbData)); } catch(e){}
            memoryCache = idbData;
            return { data: checkDailyReset(idbData), hasConflict: false };
        }
    } catch (e) {
        console.warn("IDB Failed completely:", e);
    }

    // 3. New User
    console.log("🌟 New User (Fresh Start)");
    memoryCache = { ...INITIAL_PROGRESS };
    return { data: memoryCache, hasConflict: false };
};

// Helper to attempt IDB sync without blocking
const syncIdbInBackground = async (currentData: UserProgress) => {
    try {
        // Try to load from IDB to see if it has newer data (orphaned)
        // If IDB is broken, this will fail silently in the background
        const idbData = await idbService.load();
        if (idbData && idbData.lastLocalUpdate > currentData.lastLocalUpdate) {
            console.log("⚠️ Found newer data in IDB background. Merging next save.");
            // In a real app we might trigger a reload, but here we just accept LS as truth 
            // to prevent loops, unless the difference is huge. 
            // For now, we assume LS is the source of truth for this session.
        }
    } catch (e) {
        // Ignore background errors
    }
};

export const getUserProgress = async (): Promise<UserProgress> => {
    if (memoryCache) return memoryCache;
    const res = await initUserProgress();
    return res.data;
};

export const downloadCloudData = async (): Promise<UserProgress | null> => { return null; };

export const saveUserProgress = async (progress: UserProgress, forceCloudUpload = false) => {
    progress.lastLocalUpdate = Date.now();
    memoryCache = progress;
    
    // 1. Critical: Save to LocalStorage (Sync, Reliable)
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error("LS Save Error (Quota?)", e);
    }

    // 2. Best Effort: Save to IndexedDB (Async)
    // We don't await this so UI doesn't freeze
    idbService.save(progress).catch(err => {
        console.warn("Background IDB Save Failed", err);
    });
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
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    try { await idbService.deleteDatabase(); } catch (e) {}
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
        return "VM5:" + safeEncode(JSON.stringify(progress));
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
