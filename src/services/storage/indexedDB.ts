
import { UserProgress } from '../../types';

// MOBILE FIX: 
// IndexedDB often hangs indefinitely on mobile Telegram WebViews (iOS/Android).
// We are disabling it completely to force the app to use LocalStorage, 
// which is synchronous and reliable on mobile devices.

export const idbService = {
    save: async (data: UserProgress): Promise<void> => {
        // No-op: Do nothing. Reliance is 100% on LocalStorage now.
        return Promise.resolve();
    },

    load: async (): Promise<UserProgress | null> => {
        // No-op: Return null to force LocalStorage usage.
        return Promise.resolve(null);
    },

    clear: async (): Promise<void> => {
        return Promise.resolve();
    },
    
    deleteDatabase: async (): Promise<void> => {
        return Promise.resolve();
    }
};
