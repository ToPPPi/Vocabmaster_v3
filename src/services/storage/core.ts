
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
  lastTelegramBackup: 0,
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
const safeEncode = (str: string): string => {
    return window.btoa(unescape(encodeURIComponent(str)));
};

const safeDecode = (str: string): string => {
    return decodeURIComponent(escape(window.atob(str)));
};

// --- STATE ---
let memoryCache: UserProgress | null = null;

// --- UTILS ---
export const getSecureNow = () => Date.now();

// --- CORE FUNCTIONS (LOCAL ONLY MODE) ---

export const initUserProgress = async (): Promise<{ data: UserProgress, hasConflict: boolean, cloudDate?: number }> => {
    try {
        // 1. Load Local Data only
        let localData = await idbService.load();
        
        // 2. If no local data, start fresh
        if (!localData) {
            console.log("No local data found. Starting fresh.");
            memoryCache = { ...INITIAL_PROGRESS };
            return { data: memoryCache, hasConflict: false };
        }

        // 3. Use local data
        memoryCache = localData;
        
        // Check triggers
        checkAutoBackup(localData);

        return { 
            data: checkDailyReset(localData), 
            hasConflict: false 
        };
    } catch (e) {
        console.warn("Storage initialization failed (likely private mode or restricted), falling back to memory:", e);
        // Fallback to fresh start if DB is corrupted/inaccessible
        memoryCache = { ...INITIAL_PROGRESS };
        return { data: memoryCache, hasConflict: false };
    }
};

export const getUserProgress = async (): Promise<UserProgress> => {
    if (memoryCache) return memoryCache;
    const res = await initUserProgress();
    return res.data;
};

// Kept for compatibility but does nothing in Local Mode
export const downloadCloudData = async (): Promise<UserProgress | null> => {
    return null; 
};

export const saveUserProgress = async (progress: UserProgress, forceCloudUpload = false) => {
    progress.lastLocalUpdate = Date.now();
    memoryCache = progress;
    
    // INSTANT SAVE: Only write to local IndexedDB
    try {
        await idbService.save(progress);
    } catch (e) {
        console.warn("Failed to save to storage (non-critical):", e);
    }
    
    // Cloud sync logic removed for performance
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
        try {
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
        } catch (e) {
            console.warn("Error syncing Telegram user data:", e);
        }
    }
};

export const resetUserProgress = async (): Promise<UserProgress> => {
    try {
        await idbService.clear();
    } catch(e) {
        console.warn("Failed to clear DB:", e);
    }
    localStorage.removeItem(STORAGE_KEY);
    memoryCache = { ...INITIAL_PROGRESS };
    return memoryCache;
};

// NUCLEAR OPTION: Guaranteed cleanup
export const nukeEverything = async () => {
    console.warn("☢️ NUKING ALL DATA...");
    try { await idbService.clear(); } catch(e) {}
    try { localStorage.clear(); } catch(e) {}
    try { sessionStorage.clear(); } catch(e) {}
    
    // Attempt to clear specific keys if global clear fails
    localStorage.removeItem(STORAGE_KEY);
    
    memoryCache = { ...INITIAL_PROGRESS };
    return true;
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
    
    // INSTANT LOGOUT: No cloud wait.
    progress.hasSeenOnboarding = false;
    try {
        await idbService.save(progress);
    } catch(e) {
        console.warn("Failed to save logout state:", e);
    }
    
    console.log("✅ Local logout successful.");
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};

// --- MANUAL BACKUP (Copy/Paste) - SMART MERGE MODE ---

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

// --- AUTOMATIC TELEGRAM BACKUP ---
const BACKUP_INTERVAL = 3 * 24 * 60 * 60 * 1000; // 3 Days

const checkAutoBackup = async (progress: UserProgress) => {
    const now = Date.now();
    const lastBackup = progress.lastTelegramBackup || 0;
    const initData = window.Telegram?.WebApp?.initData;

    // Must be in Telegram, and interval must have passed
    if (initData && (now - lastBackup > BACKUP_INTERVAL)) {
        console.log("📦 Starting Automatic Backup to Telegram Chat...");
        try {
            const code = await exportUserData();
            const dateStr = new Date().toLocaleDateString('ru-RU');
            
            // Send to backend proxy
            const response = await fetch('/api/backup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    initData, 
                    backupData: code,
                    filename: `vocabmaster_backup_${dateStr}.txt`
                })
            });

            if (response.ok) {
                progress.lastTelegramBackup = now;
                await saveUserProgress(progress);
                console.log("✅ Backup sent successfully");
            } else {
                console.error("Backup failed", await response.json());
            }
        } catch (e) {
            console.error("Auto backup error:", e);
        }
    }
};

export const importUserData = async (inputCode: string): Promise<{success: boolean, message: string}> => {
    try {
        let cleanCode = inputCode.trim();
        if (cleanCode.startsWith("VM5:")) cleanCode = cleanCode.substring(4);
        
        const jsonStr = safeDecode(cleanCode);
        const importedData = JSON.parse(jsonStr) as UserProgress;
        
        if (!importedData.wordProgress) throw new Error("Неверный формат данных");

        // --- SMART MERGE LOGIC ---
        // We load the CURRENT data on this device first.
        // We want to keep the current user's Identity (Name, Photo)
        // But overwrite the Learning Data (Words, Score, Money) with the imported data.
        
        let currentData = await idbService.load();
        if (!currentData) currentData = { ...INITIAL_PROGRESS };

        const mergedData: UserProgress = {
            ...importedData, // Start with everything from the backup (Words, Money, Stats)
            
            // PRESERVE IDENTITY of the current device user
            userName: currentData.userName || importedData.userName, 
            photoUrl: currentData.photoUrl || importedData.photoUrl,
            
            // Update timestamps
            lastLocalUpdate: Date.now(),
            hasSeenOnboarding: true // Ensure they don't see onboarding again
        };
        
        memoryCache = mergedData;
        await saveUserProgress(mergedData, true);

        return { success: true, message: "Прогресс восстановлен! Ваш профиль сохранен." };
    } catch (e: any) {
        console.error(e);
        return { success: false, message: "Ошибка кода: убедитесь, что скопировали весь текст." };
    }
};

export const forceSave = async () => {
    if (memoryCache) await saveUserProgress(memoryCache, true);
}
