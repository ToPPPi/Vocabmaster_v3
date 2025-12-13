
import { UserProgress } from '../../types';

const DB_NAME = 'VocabMaster_LocalDB';
const DB_VERSION = 1;
const STORE_NAME = 'user_data';
const KEY_PROGRESS = 'main_progress';
// REDUCED TIMEOUT: Mobile WebViews are slow. If it takes >1.5s, assume it's broken and fallback.
const TIMEOUT_MS = 1500; 

// Helper: Timeout Promise
const withTimeout = <T>(promise: Promise<T>, ms: number, errorMsg: string): Promise<T> => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(errorMsg)), ms);
        promise
            .then(res => {
                clearTimeout(timer);
                resolve(res);
            })
            .catch(err => {
                clearTimeout(timer);
                reject(err);
            });
    });
};

// Helper to open DB
const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        // Check if IDB exists
        if (!('indexedDB' in window)) {
            reject("IndexedDB not supported");
            return;
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject("Error opening IndexedDB");

        request.onsuccess = (event) => {
            resolve((event.target as IDBOpenDBRequest).result);
        };

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
    });
};

export const idbService = {
    save: async (data: UserProgress): Promise<void> => {
        try {
            const db = await withTimeout(openDB(), TIMEOUT_MS, "DB Open Timeout");
            return withTimeout(new Promise((resolve, reject) => {
                const tx = db.transaction([STORE_NAME], 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                const request = store.put(data, KEY_PROGRESS);

                request.onsuccess = () => resolve();
                request.onerror = () => reject("Error saving to IndexedDB");
            }), TIMEOUT_MS, "DB Save Timeout");
        } catch (e) {
            console.warn("IDB Save Skipped (Mobile Fallback Active)");
            // Non-blocking error
        }
    },

    load: async (): Promise<UserProgress | null> => {
        try {
            const db = await withTimeout(openDB(), TIMEOUT_MS, "DB Open Timeout");
            return await withTimeout(new Promise((resolve, reject) => {
                const tx = db.transaction([STORE_NAME], 'readonly');
                const store = tx.objectStore(STORE_NAME);
                const request = store.get(KEY_PROGRESS);

                request.onsuccess = () => {
                    resolve(request.result || null);
                };
                request.onerror = () => reject("Error loading from IndexedDB");
            }), TIMEOUT_MS, "DB Load Timeout");
        } catch (e) {
            console.error("IDB Load Failed/Timeout:", e);
            return null; // Return null so Core can use LocalStorage
        }
    },

    clear: async (): Promise<void> => {
        try {
            const db = await withTimeout(openDB(), 1000, "DB Open Timeout");
            return new Promise((resolve, reject) => {
                const tx = db.transaction([STORE_NAME], 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                const request = store.clear();
                request.onsuccess = () => resolve();
                request.onerror = () => reject("Error clearing IndexedDB");
            });
        } catch (e) {
            console.error("IDB Clear Failed", e);
        }
    },
    
    deleteDatabase: async (): Promise<void> => {
        return new Promise((resolve, reject) => {
            const req = indexedDB.deleteDatabase(DB_NAME);
            req.onsuccess = () => resolve();
            req.onerror = () => resolve(); 
            req.onblocked = () => resolve(); 
        });
    }
};
