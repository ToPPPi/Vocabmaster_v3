
import React, { useState } from 'react';
import { ShoppingBag, Zap, Snowflake, Bomb, ShieldCheck, Coins } from 'lucide-react';
import { Header } from './Header';
import { UserProgress } from '../types';
import { buyItem } from '../services/storageService';
import { triggerHaptic } from '../utils/uiHelpers';

interface ShopViewProps {
    progress: UserProgress;
    onBack: () => void;
    onUpdate: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({ progress, onBack, onUpdate }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleBuy = async (item: keyof UserProgress['inventory'], price: number) => {
        if (progress.wallet.coins < price) {
            triggerHaptic('error');
            return;
        }
        triggerHaptic('medium');
        setIsLoading(true);
        await buyItem(item, price);
        await onUpdate();
        setIsLoading(false);
    };

    const items = [
        { id: 'timeFreeze', name: 'Заморозка', desc: 'Останови время на 5 сек в Блице', icon: Snowflake, price: 100, color: 'text-cyan-500', bg: 'bg-cyan-100' },
        { id: 'bomb', name: 'Бомба', desc: 'Убирает неверные ответы', icon: Bomb, price: 150, color: 'text-rose-500', bg: 'bg-rose-100' },
        { id: 'streakFreeze', name: 'Защита серии', desc: 'Сохраняет серию при пропуске дня', icon: ShieldCheck, price: 500, color: 'text-emerald-500', bg: 'bg-emerald-100' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            <Header title="Магазин" onBack={onBack} rightContent={
                <div className="flex items-center gap-1.5 bg-yellow-100 px-3 py-1.5 rounded-full border border-yellow-200">
                    <Coins className="w-4 h-4 text-yellow-600" />
                    <span className="font-bold text-yellow-700 text-sm">{progress.wallet.coins}</span>
                </div>
            } />
            
            <div className="p-5 grid grid-cols-1 gap-4">
                {items.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{item.name}</h3>
                                <p className="text-xs text-slate-500 max-w-[150px] leading-tight mt-0.5">{item.desc}</p>
                                <p className="text-xs font-bold text-slate-400 mt-2 uppercase">В наличии: {(progress.inventory as any)[item.id]}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleBuy(item.id as any, item.price)}
                            disabled={isLoading || progress.wallet.coins < item.price}
                            className={`px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-1 transition-all ${progress.wallet.coins >= item.price ? 'bg-slate-900 text-white active:scale-95' : 'bg-slate-100 text-slate-400'}`}
                        >
                            <Coins className="w-3 h-3" />
                            {item.price}
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="px-5 mt-4">
                 <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl p-6 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-bold text-lg mb-1">Нужно больше монет?</h3>
                        <p className="text-sm opacity-90 mb-4">Играй в Blitz Mode, чтобы заработать валюту для покупок.</p>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                            <Zap className="w-6 h-6" />
                        </div>
                    </div>
                    <ShoppingBag className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 rotate-12" />
                 </div>
            </div>
        </div>
    );
};
