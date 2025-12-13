
import React, { useState } from 'react';
import { Crown, Sparkles, BarChart3, Zap, Clock, Star, Flame, Loader2 } from 'lucide-react';
import { UserProgress } from '../../types';
import { buyPremium, redeemPromoCode } from '../../services/storageService';
import { triggerHaptic } from '../../utils/uiHelpers';
import { RewardType } from '../RewardOverlay';
import { BenefitRow } from './BenefitRow';

interface PremiumSectionProps {
    progress: UserProgress;
    onUpdate: () => void;
    onShowReward?: (type: RewardType) => void;
}

export const PremiumSection: React.FC<PremiumSectionProps> = ({ progress, onUpdate, onShowReward }) => {
    const [isLoadingPayment, setIsLoadingPayment] = useState<string | null>(null);
    const [showPromoInput, setShowPromoInput] = useState(false);
    const [promoCode, setPromoCode] = useState("");
    const [actionStatus, setActionStatus] = useState<{success?: boolean, msg?: string} | null>(null);

    // If user is already premium, we don't show this section at all
    if (progress.premiumStatus || (progress.premiumExpiration && progress.premiumExpiration > Date.now())) {
        return null; 
    }

    const handleBuy = async (plan: 'month' | 'year') => {
        triggerHaptic('medium');
        setIsLoadingPayment(plan);
        try {
            const success = await buyPremium(plan);
            if (success) {
                await onUpdate();
                triggerHaptic('success');
                if (onShowReward) {
                    onShowReward(plan === 'year' ? 'premium_year' : 'premium_month');
                }
            } else {
                triggerHaptic('error');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingPayment(null);
        }
    };

    const handlePromoRedeem = async () => {
        if (!promoCode.trim()) return;
        triggerHaptic('medium');
        const result = await redeemPromoCode(promoCode);
        setActionStatus({ success: result.success, msg: result.message });
        
        if (result.success) {
            triggerHaptic('success');
            await onUpdate();
            if (onShowReward && result.message.includes('план')) {
                 const isYear = result.message.includes('YEAR') || result.message.includes('LIFETIME');
                 onShowReward(isYear ? 'premium_year' : 'premium_month');
            }
            setPromoCode("");
            setTimeout(() => {
                setShowPromoInput(false);
                setActionStatus(null);
            }, 2000);
        } else {
            triggerHaptic('error');
        }
    };

    return (
        <div id="premium-section" className="pt-6">
            <h3 className="text-center text-lg font-bold text-slate-900 dark:text-white mb-6">Преимущества Premium</h3>
            
            <div className="space-y-3 mb-6">
                <BenefitRow 
                    icon={Sparkles} 
                    title="Глубина словаря" 
                    free="3,000 слов (95%)" 
                    premium="10,000 слов (98%)" 
                    highlight={true}
                />
                <BenefitRow 
                    icon={BarChart3} 
                    title="Скорость обучения" 
                    free="10 слов/день" 
                    premium="Без ограничений" 
                    highlight={true}
                />
                <BenefitRow 
                    icon={Zap} 
                    title="ИИ Тьютор" 
                    free="5 разборов/день" 
                    premium="50 разборов/день" 
                    highlight={true}
                />
                <BenefitRow 
                    icon={Clock} 
                    title="Система повторений" 
                    free="Линейная (+3 дня)" 
                    premium="Умная (FSRS)" 
                    highlight={true}
                />
            </div>

            {/* Payment Options Block */}
            <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-6 shadow-xl shadow-violet-200/50 dark:shadow-none relative overflow-hidden text-white transition-all">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center mb-6 text-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-2 shadow-inner border border-white/20">
                        <Crown className="w-7 h-7 text-yellow-300 fill-yellow-300 drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">VocabMaster <span className="text-yellow-300">Pro</span></h3>
                    <p className="text-xs text-violet-100 font-medium max-w-[200px] leading-tight mt-1 opacity-90">
                        Снимите все лимиты и ускорьте обучение
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    {showPromoInput ? (
                        /* --- PROMO CODE INPUT MODE --- */
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                                <p className="text-violet-100 text-xs font-bold mb-3 text-center uppercase tracking-wide opacity-80">
                                    Ввод подарочного кода
                                </p>
                                
                                <input 
                                    id="promo-input"
                                    type="text"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    placeholder="ВВЕДИТЕ КОД"
                                    className="w-full bg-white text-slate-900 border-none rounded-xl px-4 py-3 text-sm font-bold text-center mb-3 placeholder:text-slate-300 focus:ring-2 focus:ring-yellow-300 outline-none uppercase tracking-widest"
                                    autoFocus
                                />
                                
                                {actionStatus && (
                                    <div className={`text-xs mb-3 font-bold text-center px-2 py-1 rounded-lg ${actionStatus.success ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'}`}>
                                        {actionStatus.msg}
                                    </div>
                                )}

                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => { setShowPromoInput(false); setActionStatus(null); setPromoCode(""); }}
                                        className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs transition-colors"
                                    >
                                        Отмена
                                    </button>
                                    <button 
                                        onClick={handlePromoRedeem}
                                        disabled={!promoCode}
                                        className="flex-1 py-3 bg-yellow-400 text-yellow-900 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
                                    >
                                        Активировать
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* --- STANDARD BUTTONS MODE --- */
                        <>
                            {/* Month Plan */}
                            <button 
                                onClick={() => handleBuy('month')}
                                disabled={isLoadingPayment !== null}
                                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 transition-all active:scale-95 flex items-center justify-between group backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors border border-white/10">
                                        <Star className="w-5 h-5 fill-current" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-white">1 Месяц</div>
                                        <div className="text-xs text-violet-200 font-medium">150 ⭐️ <span className="opacity-50">•</span> ≈ 299 ₽</div>
                                    </div>
                                </div>
                                <div className="text-white text-xs font-bold bg-white/20 border border-white/20 px-3 py-2 rounded-xl group-hover:bg-white/30 transition-colors">
                                    {isLoadingPayment === 'month' ? <Loader2 className="w-4 h-4 animate-spin"/> : 'Купить'}
                                </div>
                            </button>

                            {/* Year Plan */}
                            <button 
                                onClick={() => handleBuy('year')}
                                disabled={isLoadingPayment !== null}
                                className="w-full relative group"
                            >
                                <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md z-20 border-2 border-white flex items-center gap-1 transform group-hover:scale-110 transition-transform">
                                    <Flame className="w-3 h-3 fill-current" /> ВЫГОДНО
                                </div>

                                <div className="bg-white text-slate-900 rounded-2xl p-1 shadow-lg active:scale-95 transition-transform">
                                    <div className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                                <Crown className="w-5 h-5 fill-current" />
                                            </div>
                                            <div className="text-left">
                                                <div className="font-bold text-lg leading-tight text-slate-900">1 Год</div>
                                                <div className="text-xs text-slate-500 font-medium mt-0.5">1000 ⭐️ <span className="text-slate-300">•</span> ≈ 1,990 ₽</div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm group-hover:bg-slate-800 transition-colors">
                                            {isLoadingPayment === 'year' ? <Loader2 className="w-4 h-4 animate-spin"/> : 'Купить'}
                                        </div>
                                    </div>
                                </div>
                            </button>
                            
                            {/* Promo Link inside Card */}
                            <div className="text-center pt-2">
                                <button 
                                    onClick={() => { setShowPromoInput(true); setActionStatus(null); }}
                                    className="text-violet-200 text-xs font-medium hover:text-white underline decoration-violet-400/50 underline-offset-4 transition-colors"
                                >
                                    У меня есть промокод
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
