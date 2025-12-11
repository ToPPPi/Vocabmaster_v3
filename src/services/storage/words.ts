
import { ProficiencyLevel, UserProgress, Word } from '../../types';
import { loadAllWords, loadWordsForLevel } from '../../data/words';
import { getUserProgress, saveUserProgress, getSecureNow } from './core';

export const getAllWords = async (): Promise<Word[]> => {
    const dbWords = await loadAllWords();
    const progress = await getUserProgress();
    return [...dbWords, ...progress.customWords];
};

export const getWordsByLevelAsync = async (level: ProficiencyLevel): Promise<Word[]> => {
    const dbWords = await loadWordsForLevel(level);
    const progress = await getUserProgress();
    const customInLevel = progress.customWords.filter(w => w.level === level);
    return [...dbWords, ...customInLevel];
}

export const addCustomWord = async (word: Word): Promise<UserProgress> => {
    const progress = await getUserProgress();
    progress.customWords.push(word);
    await saveUserProgress(progress);
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

  let wp = progress.wordProgress[wordId] || {
    easeFactor: 2.5,
    interval: 0,
    nextReviewDate: 0,
    status: 'new',
    difficulty: 0.3,
    stability: 0
  };

  const wasNew = !progress.wordProgress[wordId];

  if (wasNew) {
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
