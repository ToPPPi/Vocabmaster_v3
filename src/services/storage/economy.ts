
import { UserProgress } from '../../types';
import { getUserProgress, saveUserProgress } from './core';

// --- PAYMENT CONFIGURATION ---
// Set to TRUE to simulate payments without spending real Stars (for testing/development)
// IMPORTANT: Set to FALSE before deploying to Vercel for real payments!
const IS_DEV_SIMULATION = import.meta.env.DEV; // Auto-true locally, false in production build

export const buyPremium = async (): Promise<boolean> => {
    const tg = window.Telegram?.WebApp;
    
    // 1. If we are running in a browser (not Telegram) force simulation
    if (!tg?.initData) {
        console.warn("Not in Telegram. Simulating payment.");
        await togglePremium(true);
        return true;
    }

    // 2. Dev Simulation Mode (Localhost)
    if (IS_DEV_SIMULATION) {
        console.log("💳 Payment Simulation: Premium activated successfully.");
        // Simulate a small delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const confirm = window.confirm("[DEV MODE] Симуляция оплаты: Активировать Premium?");
        if (confirm) {
            await togglePremium(true);
            return true;
        }
        return false;
    }

    // 3. Real Payment Flow (Telegram Stars)
    try {
        // Calls the Vercel Serverless Function /api/create-invoice
        const response = await fetch('/api/create-invoice'); 
        
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        if (data.invoiceLink) {
            return new Promise((resolve) => {
                tg.openInvoice(data.invoiceLink, async (status) => {
                    if (status === 'paid') {
                        // Payment successful!
                        await togglePremium(true);
                        resolve(true);
                    } else {
                        // Cancelled or failed
                        console.log("Payment status:", status);
                        resolve(false);
                    }
                });
            });
        } else {
            console.error("Failed to get invoice link", data);
            alert("Ошибка создания счета. Проверьте консоль.");
            return false;
        }
    } catch (e) {
        console.error("Payment API Error", e);
        // Fallback message for user
        alert("Ошибка соединения с сервером платежей. Убедитесь, что бот настроен в Vercel.");
        return false;
    }
};

export const togglePremium = async (forceState?: boolean): Promise<UserProgress> => {
    const progress = await getUserProgress();
    if (forceState !== undefined) {
        progress.premiumStatus = forceState;
    } else {
        progress.premiumStatus = !progress.premiumStatus;
    }
    if (progress.premiumStatus) {
        progress.nextSessionUnlockTime = undefined;
    }
    await saveUserProgress(progress);
    return progress;
};

export const addCoins = async (amount: number) => {
    const progress = await getUserProgress();
    progress.wallet.coins += amount;
    await saveUserProgress(progress);
    return progress;
};

export const spendCoins = async (amount: number): Promise<boolean> => {
    const progress = await getUserProgress();
    if (progress.wallet.coins >= amount) {
        progress.wallet.coins -= amount;
        await saveUserProgress(progress);
        return true;
    }
    return false;
};

export const buyItem = async (itemKey: keyof UserProgress['inventory'], price: number): Promise<boolean> => {
    const success = await spendCoins(price);
    if (success) {
        const progress = await getUserProgress();
        progress.inventory[itemKey] += 1;
        await saveUserProgress(progress);
        return true;
    }
    return false;
};

export const consumeItem = async (itemKey: keyof UserProgress['inventory']): Promise<boolean> => {
    const progress = await getUserProgress();
    if (progress.inventory[itemKey] > 0) {
        progress.inventory[itemKey] -= 1;
        await saveUserProgress(progress);
        return true;
    }
    return false;
};

// Just CHECKS if user has limit remaining (read-only)
export const checkAIUsageLimit = async (): Promise<boolean> => {
    const progress = await getUserProgress();
    const limit = progress.premiumStatus ? 50 : 5;
    return progress.aiGenerationsToday < limit;
};

// Actually increments the counter
export const incrementAIUsage = async (): Promise<boolean> => {
    const progress = await getUserProgress();
    const limit = progress.premiumStatus ? 50 : 5;
    if (progress.aiGenerationsToday >= limit) {
        return false;
    }
    progress.aiGenerationsToday += 1;
    await saveUserProgress(progress);
    return true;
};
