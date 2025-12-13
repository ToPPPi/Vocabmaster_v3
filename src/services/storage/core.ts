
import { UserProgress } from '../../types';
// We keep the import to satisfy TS, but it's now a dummy service
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
    console.log("🚀 MOBILE SAFE BOOT: Initializing...");
    
    // STRATEGY: LOCALSTORAGE ONLY (Synchronous & Safe)
    // We removed the race condition with IndexedDB because it freezes mobile WebViews.
    
    let localData: UserProgress | null = null;
    
    try {
        const rawLS = localStorage.getItem(STORAGE_KEY);
        if (rawLS) {
            localData = JSON.parse(rawLS);
            console.log("✅ Data loaded from LocalStorage");
        }
    } catch (e) {
        console.error("LocalStorage corrupted. Resetting.", e);
        // If data is corrupted, we must return clean state to prevent crash
        localStorage.removeItem(STORAGE_KEY);
    }

    if (localData) {
        memoryCache = localData;
        return { data: checkDailyReset(localData), hasConflict: false };
    }

    // New User or After Clear
    console.log("🌟 New User / Empty State");
    memoryCache = { ...INITIAL_PROGRESS };
    return { data: memoryCache, hasConflict: false };
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
    
    // Critical: Save to LocalStorage (Sync, Reliable)
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error("LS Save Error (Quota?)", e);
        // On mobile, if quota exceeded, we might want to alert, but for now we just log
    }
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
    console.log("💣 FACTORY RESET TRIGGERED");
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    try { localStorage.clear(); } catch(e) {} // Hard clear everything
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
