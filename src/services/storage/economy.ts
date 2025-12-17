
import { UserProgress } from '../../types';
import { getUserProgress, saveUserProgress, getSecureNow } from './core';

// --- PAYMENT CONFIGURATION ---
// Safe access to import.meta.env
const IS_DEV_ENV = (import.meta as any).env?.DEV || false; 

// Helper to check if premium is active
export const isUserPremium = (progress: UserProgress): boolean => {
    if (progress.premiumStatus) return true; // Lifetime or Legacy
    if (progress.premiumExpiration && progress.premiumExpiration > getSecureNow()) return true; // Active Subscription
    return false;
};

export const buyPremium = async (plan: 'month' | 'year' | 'lifetime'): Promise<boolean> => {
    const tg = window.Telegram?.WebApp;
    
    // 1. Production Web Browser Check
    if (!tg?.initData && !IS_DEV_ENV) {
        alert("Оплата доступна только в Telegram.");
        return false;
    }

    // 2. Dev Simulation
    if (!tg?.initData && IS_DEV_ENV) {
        console.warn(`[DEV] Payment Sim: ${plan}`);
        await new Promise(resolve => setTimeout(resolve, 500));
        await activatePremium(plan);
        return true;
    }

    // 3. Real Payment Flow (Telegram Stars / Invoice)
    try {
        const response = await fetch('/api/create-invoice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plan })
        }); 
        
        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const data = await response.json();

        if (data.invoiceLink) {
            return new Promise((resolve) => {
                tg.openInvoice(data.invoiceLink, async (status) => {
                    if (status === 'paid') {
                        await activatePremium(plan);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            });
        } else {
            alert("Ошибка создания счета. Попробуйте позже.");
            return false;
        }
    } catch (e) {
        console.error("Payment API Error", e);
        // Fallback for demo purposes if backend fails:
        // alert("Ошибка сервера. (В демо-режиме оплата не пройдет без бэкенда)");
        return false;
    }
};

const activatePremium = async (plan: 'month' | 'year' | 'lifetime') => {
    const progress = await getUserProgress();
    const now = getSecureNow();

    if (plan === 'lifetime') {
        progress.premiumStatus = true;
        progress.premiumExpiration = null;
    } else {
        const duration = plan === 'year' 
            ? 365 * 24 * 60 * 60 * 1000 
            : 30 * 24 * 60 * 60 * 1000;
        
        let currentExpiration = progress.premiumExpiration || 0;
        if (currentExpiration < now) currentExpiration = now;

        progress.premiumExpiration = currentExpiration + duration;
        progress.premiumStatus = false; 
    }
    
    progress.nextSessionUnlockTime = undefined;
    await saveUserProgress(progress);
};

export const togglePremium = async (forceState?: boolean): Promise<UserProgress> => {
    const progress = await getUserProgress();
    if (forceState !== undefined) {
        progress.premiumStatus = forceState;
        progress.premiumExpiration = forceState ? null : null;
    } else {
        const isActive = isUserPremium(progress);
        if (isActive) {
            progress.premiumStatus = false;
            progress.premiumExpiration = null;
        } else {
            progress.premiumExpiration = getSecureNow() + (30 * 24 * 60 * 60 * 1000);
            progress.premiumStatus = false;
        }
    }
    await saveUserProgress(progress);
    return progress;
};

// --- PROMO CODES ---
const VALID_PROMO_CODES: Record<string, 'month' | 'year' | 'lifetime'> = {
    'VOCAB-START': 'month',      
    'ADMIN-GRANT-30': 'month',   
    'ADMIN-GRANT-365': 'year',   
    'VOCAB-MASTER-KEY': 'lifetime'
};

export const redeemPromoCode = async (code: string): Promise<{success: boolean, message: string}> => {
    const cleanCode = code.trim().toUpperCase();
    const plan = VALID_PROMO_CODES[cleanCode];

    if (!plan) return { success: false, message: "Неверный промокод" };

    const progress = await getUserProgress();
    if (!progress.usedPromoCodes) progress.usedPromoCodes = [];

    if (progress.usedPromoCodes.includes(cleanCode)) {
        return { success: false, message: "Код уже использован" };
    }

    await activatePremium(plan);
    progress.usedPromoCodes.push(cleanCode);
    await saveUserProgress(progress);

    return { success: true, message: `Код принят! План: ${plan.toUpperCase()}` };
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

export const checkAIUsageLimit = async (): Promise<boolean> => {
    const progress = await getUserProgress();
    const isPremium = isUserPremium(progress);
    const limit = isPremium ? 50 : 5;
    return progress.aiGenerationsToday < limit;
};

export const incrementAIUsage = async (): Promise<boolean> => {
    const progress = await getUserProgress();
    const isPremium = isUserPremium(progress);
    const limit = isPremium ? 50 : 5;
    if (progress.aiGenerationsToday >= limit) {
        return false;
    }
    progress.aiGenerationsToday += 1;
    await saveUserProgress(progress);
    return true;
};
