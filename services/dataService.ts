
import { UserLevel, WordStatus, Word, Achievement, UserState } from '../types';
import { getAuthToken } from './auth';

const API_URL = 'http://localhost:5000/api';

// --- API Helpers ---

const authHeader = () => {
  const token = getAuthToken();
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// --- User Profile ---

export const fetchUserProfile = async (): Promise<UserState> => {
  const response = await fetch(`${API_URL}/user/me`, {
    headers: { ...authHeader() }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }

  const data = await response.json();
  
  // Map backend fields to frontend UserState interface
  return {
    name: data.name,
    email: data.email,
    streak: data.current_streak,
    longestStreak: data.longest_streak,
    isPremium: data.is_premium,
    premiumExpiry: data.premium_expiry,
    wordsLearned: data.total_words_learned,
    lastSessionDate: data.last_activity_date,
    dailyGoal: data.dailyGoal,
    dailyProgress: data.dailyProgress,
    daysToBonus: data.daysToBonus,
    levelProgress: data.levelProgress,
    xp: data.xp,
    joinedAt: data.created_at
  };
};

export const updateUserProfile = async (data: { name: string; email: string }): Promise<void> => {
  const response = await fetch(`${API_URL}/user/me`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      ...authHeader() 
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Failed to update profile');
  }
};

export const fetchUserActivity = async (): Promise<{date: string, count: number}[]> => {
  const response = await fetch(`${API_URL}/user/activity`, {
     headers: { ...authHeader() }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch activity');
  }

  const data = await response.json();
  return data.map((row: any) => ({
      date: new Date(row.date).toISOString().split('T')[0],
      count: row.words_count
  }));
};

// --- Learning ---

export const fetchSessionWords = async (level: UserLevel): Promise<Word[]> => {
  const response = await fetch(`${API_URL}/learn/session?level=${level}`, {
    headers: { ...authHeader() }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch words');
  }

  const data = await response.json();
  
  if (data.message === 'Daily limit reached') {
     return [];
  }

  // Map DB rows to Frontend Word interface
  return data.words.map((w: any) => ({
    id: w.id,
    word: w.word,
    translation: w.translation,
    transcription: w.transcription,
    partOfSpeech: w.part_of_speech,
    level: w.level,
    status: WordStatus.NEW
  }));
};

export const syncProgress = async (wordId: string, status: WordStatus): Promise<boolean> => {
  const response = await fetch(`${API_URL}/learn/progress`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      ...authHeader()
    },
    body: JSON.stringify({ wordId, status })
  });

  if (!response.ok) {
    console.error('Failed to sync progress');
    return false;
  }

  const data = await response.json();
  return data.earnedPremium || false;
};

// --- Placement Test ---

export const saveInitialLevel = async (level: string): Promise<void> => {
    const response = await fetch(`${API_URL}/user/setup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        },
        body: JSON.stringify({ level })
    });

    if (!response.ok) {
        throw new Error('Failed to save initial level');
    }
};

// --- Dictionary ---

export const fetchDictionary = async (): Promise<Word[]> => {
  const response = await fetch(`${API_URL}/dictionary`, {
     headers: { ...authHeader() }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch dictionary');
  }

  const data = await response.json();
  return data.words.map((w: any) => ({
    id: w.id,
    word: w.word,
    translation: w.translation,
    transcription: w.transcription,
    partOfSpeech: w.part_of_speech,
    level: w.level,
    status: w.status
  }));
};

// --- Library (Word Blocks) ---

export const fetchLibraryWords = async (level: UserLevel): Promise<Word[]> => {
    const response = await fetch(`${API_URL}/library/${level}`, {
        headers: { ...authHeader() }
    });

    if (response.status === 403) {
        throw new Error('PREMIUM_REQUIRED');
    }

    if (!response.ok) {
        throw new Error('Failed to fetch library words');
    }

    const data = await response.json();
    return data.words.map((w: any) => ({
        id: w.id,
        word: w.word,
        translation: w.translation,
        transcription: w.transcription,
        partOfSpeech: w.part_of_speech,
        level: w.level,
        status: w.status || null // Status might be null if never learned
    }));
};

// --- Achievements (Local for now, or move to DB later) ---
// Keeping the local logic for achievements temporarily as the DB logic is complex
// and we want to focus on learning flow first.

const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'First Step', description: 'Learn your first word', icon: '👣', unlocked: false, progress: 0, maxProgress: 1, category: 'learning' },
  { id: '2', title: 'Week of Power', description: 'Reach a 7-day streak', icon: '🔥', unlocked: false, progress: 0, maxProgress: 7, category: 'streak' },
  { id: '6', title: 'Legend', description: 'Learn 10,000 words', icon: '🏆', unlocked: false, progress: 0, maxProgress: 10000, category: 'learning' },
];

export const getStoredAchievements = (): Achievement[] => {
  const stored = localStorage.getItem('vocab_achievements');
  return stored ? JSON.parse(stored) : INITIAL_ACHIEVEMENTS;
};

export const saveAchievements = (achievements: Achievement[]) => {
  localStorage.setItem('vocab_achievements', JSON.stringify(achievements));
};
