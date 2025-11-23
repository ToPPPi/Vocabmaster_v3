export enum UserLevel {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2'
}

export enum WordStatus {
  NEW = 'NEW',
  LEARNING = 'LEARNING',
  KNOWN = 'KNOWN',
  HARD = 'HARD'
}

export interface Word {
  id: string;
  word: string;
  translation: string;
  transcription: string;
  partOfSpeech: string;
  level: UserLevel;
  status: WordStatus;
  examples?: string[]; // Populated by AI
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
  category: 'learning' | 'streak' | 'dictionary' | 'ai';
}

export interface UserState {
  name: string;
  email?: string; // Optional during auth flow transition
  joinedAt?: string;
  streak: number;
  longestStreak: number;
  isPremium: boolean;
  premiumExpiry?: string; // ISO Date string for earned premium
  wordsLearned: number;
  lastSessionDate: string | null;
  dailyGoal: number; // 5 for free, 20 for premium
  dailyProgress: number;
  daysToBonus: number; // 0-7 tracking for the free premium reward
  levelProgress: Record<UserLevel, number>; // Count of learned words per level
  xp: number;
}