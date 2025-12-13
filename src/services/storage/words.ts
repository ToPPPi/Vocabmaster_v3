
import { ProficiencyLevel, UserProgress, Word } from '../../types';
import { loadAllWords, loadWordsForLevel } from '../../data/words';
import { getUserProgress, saveUserProgress, getSecureNow } from './core';

export const getAllWords = async (): Promise<Word[]> => {
    const dbWords = await loadAllWords();
    const progress = await getUserProgress();
    const combined = [...dbWords, ...progress.customWords];
    
    // De-duplicate by ID using a Map. 
    // This fixes the bug where words appear twice if added to dictionary but also exist in level file.
    const uniqueMap = new Map();
    combined.forEach(word => {
        if (!uniqueMap.has(word.id)) {
            uniqueMap.set(word.id, word);
        }
    });
    
    return Array.from(uniqueMap.values());
};

export const getWordsByLevelAsync = async (level: ProficiencyLevel): Promise<Word[]> => {
    const dbWords = await loadWordsForLevel(level);
    const progress = await getUserProgress();
    const customInLevel = progress.customWords.filter(w => w.level === level);
    // Dedup here as well
    const combined = [...dbWords, ...customInLevel];
    const uniqueMap = new Map();
    combined.forEach(word => {
        if (!uniqueMap.has(word.id)) {
            uniqueMap.set(word.id, word);
        }
    });
    return Array.from(uniqueMap.values());
}

export const addCustomWord = async (word: Word): Promise<UserProgress> => {
    const progress = await getUserProgress();
    // Check if word already exists in custom words
    if (!progress.customWords.some(w => w.id === word.id)) {
        progress.customWords.push(word);
        await saveUserProgress(progress);
    }
    return progress;
};

export const toggleKnownStatus = async (wordId: string): Promise<UserProgress> => {
    const progress = await getUserProgress();
    const now = getSecureNow();
    if (progress.wordProgress[wordId]) {
        delete progress.wordProgress[wordId];
        if (progress.wordComments[wordId]) delete progress.wordComments[wordId];
    } else {
        progress.wordProgress[wordId] = {
            easeFactor: 2.5,
            interval: 30,
            nextReviewDate: now + (30 * 86400000),
            status: 'mastered'
        };
    }
    await saveUserProgress(progress);
    return progress;
};

export const deleteWordFromProgress = async (wordId: string): Promise<UserProgress> => {
    const progress = await getUserProgress();
    if (progress.wordProgress[wordId]) {
        delete progress.wordProgress[wordId];
        if (progress.wordComments[wordId]) delete progress.wordComments[wordId];
        await saveUserProgress(progress);
    }
    return progress;
};

export const saveWordComment = async (wordId: string, comment: string): Promise<UserProgress> => {
    const progress = await getUserProgress();
    if (!comment.trim()) {
        delete progress.wordComments[wordId];
    } else {
        progress.wordComments[wordId] = comment;
    }
    await saveUserProgress(progress);
    return progress;
};

export const getWordsDueForReview = async (allWordIds: string[]): Promise<string[]> => {
    const progress = await getUserProgress();
    const now = getSecureNow();
    return allWordIds.filter(id => {
        const wp = progress.wordProgress[id];
        return wp && wp.status !== 'new' && wp.nextReviewDate <= now;
    });
};

export const lockDailySession = async () => {
    const progress = await getUserProgress();
    const now = getSecureNow();
    progress.nextSessionUnlockTime = now + (24 * 60 * 60 * 1000);
    await saveUserProgress(progress);
};

export const rateWord = async (wordId: string, rating: 'easy' | 'medium' | 'hard', level: ProficiencyLevel): Promise<UserProgress> => {
  const progress = await getUserProgress();
  const now = getSecureNow();
  const today = new Date(now).toISOString().split('T')[0];
  const isPremium = progress.premiumStatus;
  
  if (progress.lastLoginDate !== today) {
      if (progress.lastLoginDate === new Date(now - 86400000).toISOString().split('T')[0]) {
          progress.streak += 1;
      } else {
          progress.streak = 1;
      }
      progress.lastLoginDate = today;
  } else if (progress.streak === 0) {
      progress.streak = 1;
      progress.lastLoginDate = today;
  }

  // Ensure wordProgress exists
  let wp = progress.wordProgress[wordId];
  
  if (!wp) {
      // New word logic
      wp = {
        easeFactor: 2.5,
        interval: 0,
        nextReviewDate: 0,
        status: 'new',
        difficulty: 0.3,
        stability: 0
      };
      
      progress.wordsLearnedToday += 1;
      progress.dailyProgressByLevel[level] = (progress.dailyProgressByLevel[level] || 0) + 1;
      progress.xp += 10;
      progress.wallet.coins += 5; 
  }

  if (rating === 'hard') {
    wp.interval = 0; 
    wp.nextReviewDate = now; 
    wp.status = 'learning';
    if (isPremium) {
        wp.easeFactor = Math.max(1.3, wp.easeFactor - 0.2);
        wp.difficulty = Math.min(1, (wp.difficulty || 0.3) + 0.2);
    } else {
        wp.easeFactor = 2.5; 
    }
  } else if (rating === 'medium') {
    wp.interval = 1;
    wp.nextReviewDate = now + 86400000;
    wp.status = 'learning';
    if (isPremium) {
       wp.easeFactor = Math.max(1.3, wp.easeFactor - 0.15);
    }
  } else if (rating === 'easy') {
    wp.status = 'mastered';
    if (wp.interval === 0) {
        wp.interval = 3; 
        if (isPremium) wp.difficulty = Math.max(0, (wp.difficulty || 0.3) - 0.1);
    } else {
        if (isPremium) {
            const ef = wp.easeFactor || 2.5;
            wp.interval = Math.round(wp.interval * ef);
            wp.easeFactor = ef + 0.15;
            wp.difficulty = Math.max(0, (wp.difficulty || 0.3) - 0.2);
        } else {
            wp.interval = wp.interval + 3; 
        }
    }
    wp.nextReviewDate = now + (wp.interval * 86400000);
  }

  progress.wordProgress[wordId] = wp;
  await saveUserProgress(progress);
  return progress;
};

// --- DEV TOOLS ---

export const dev_UnlockLevel = async (level: ProficiencyLevel, count: number = 100, onProgress?: (percent: number) => void) => {
    const words = await loadWordsForLevel(level);
    const progress = await getUserProgress();
    const now = getSecureNow();
    
    // 1. Add Real Words
    const realWordsCount = Math.min(count, words.length);
    for(let i = 0; i < realWordsCount; i++) {
        const w = words[i];
        progress.wordProgress[w.id] = {
            easeFactor: 2.5,
            interval: 30,
            nextReviewDate: now + (30 * 86400000),
            status: 'mastered',
            difficulty: 0.5,
            stability: 20
        };
        // Update progress for real words phase (0-30%)
        if (onProgress) onProgress(Math.floor((i / count) * 30));
    }

    // 2. STRESS TEST: Generate synthetic "Ghost Words"
    const needed = count - realWordsCount;
    if (needed > 0) {
        console.log(`[DEV] Generating ${needed} synthetic ghost words...`);
        for(let i = 0; i < needed; i++) {
            const dummyId = `stress_test_${level}_${Date.now()}_${i}`;
            progress.wordProgress[dummyId] = {
                easeFactor: 2.5,
                interval: Math.floor(Math.random() * 100),
                nextReviewDate: now + (Math.random() * 30 * 86400000),
                status: 'mastered'
            };
            
            // Critical: Yield to UI thread every 50 items so progress bar updates
            if (i % 50 === 0) {
                await new Promise(r => setTimeout(r, 0));
                if (onProgress) {
                    const percent = 30 + Math.floor((i / needed) * 60); // 30% to 90%
                    onProgress(percent);
                }
            }
        }
    }
    
    if (onProgress) onProgress(90);

    // Update stats
    if (!progress.dailyProgressByLevel[level]) progress.dailyProgressByLevel[level] = 0;
    
    await saveUserProgress(progress, true);
    if (onProgress) onProgress(100);
    return count;
};

export const dev_PopulateReview = async (count: number = 100, onProgress?: (percent: number) => void) => {
    if (onProgress) onProgress(10);
    const allWords = await loadAllWords();
    if (onProgress) onProgress(30);
    
    const progress = await getUserProgress();
    const now = getSecureNow();
    const DAY = 86400000;

    const shuffled = allWords.sort(() => 0.5 - Math.random()).slice(0, count);
    
    for(let index = 0; index < shuffled.length; index++) {
        const w = shuffled[index];
        let offset = 0;
        let interval = 1;
        let status: any = 'learning';

        if (index < count * 0.4) {
            offset = -1 * DAY; 
            interval = 1;
            status = 'review';
        } else if (index < count * 0.7) {
            offset = 2 * DAY;
            interval = 2;
            status = 'learning';
        } else if (index < count * 0.9) {
            offset = 30 * DAY;
            interval = 30;
            status = 'mastered';
        } else {
            offset = 180 * DAY;
            interval = 180;
            status = 'mastered';
        }

        progress.wordProgress[w.id] = {
            easeFactor: 2.5,
            interval: interval,
            nextReviewDate: now + offset,
            status: status,
            difficulty: 0.5,
            stability: interval
        };

        if (index % 20 === 0) {
            await new Promise(r => setTimeout(r, 0));
            if (onProgress) {
                const percent = 30 + Math.floor((index / count) * 60);
                onProgress(percent);
            }
        }
    }

    if (onProgress) onProgress(95);
    await saveUserProgress(progress, true);
    if (onProgress) onProgress(100);
    return shuffled.length;
};
