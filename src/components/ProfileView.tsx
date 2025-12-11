
import React, { useState } from 'react';
import { Check, Crown, BarChart3, Sparkles, Zap, Clock, Star, Infinity, Loader2, Database, Download, Upload, Users, Share2, MessageCircle, LogOut } from 'lucide-react';
import { Header } from './Header';
import { UserProgress } from '../types';
import { buyPremium, exportUserData, importUserData } from '../services/storageService';
import { triggerHaptic, shareApp } from '../utils/uiHelpers';

interface ProfileViewProps {
    progress: UserProgress;
    onUpdate: () => void;
    onLogout: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ progress, onUpdate, onLogout }) => {
    const [isLoadingPayment, setIsLoadingPayment] = useState(false);
    const [showImportInput, setShowImportInput] = useState(false);
    const [importCode, setImportCode] = useState("");
    const [importStatus, setImportStatus] = useState<{success?: boolean, msg?: string} | null>(null);

    const handleBuyPremium = async () => {
        if (progress.premiumStatus) return;
        triggerHaptic('medium');
        setIsLoadingPayment(true);
        try {
            const success = await buyPremium();
            if (success) {
                await onUpdate();
                triggerHaptic('success');
            } else {
                triggerHaptic('error');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingPayment(false);
        }
    };

    const handleExport = async () => {
        triggerHaptic('medium');
        const code = await exportUserData();
        if (code) {
            navigator.clipboard.writeText(code);
            alert("Код резервной копии скопирован в буфер обмена!\n\nСохраните его в надежном месте (например, в 'Избранном' Telegram).");
        } else {
            alert("Ошибка при создании резервной копии.");
        }
    };

    const handleImport = async () => {
        if (!importCode.trim()) return;
        triggerHaptic('medium');
        const result = await importUserData(importCode);
        setImportStatus({ success: result.success, msg: result.message });
        
        if (result.success) {
            triggerHaptic('success');
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            triggerHaptic('error');
        }
    };

    const openChannel = () => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.openTelegramLink('https://t.me/vocabmaster_news'); // Replace with your channel
        } else {
            window.open('https://t.me/vocabmaster_news', '_blank');
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            <Header title="Профиль" />
            
            <div className="p-5 space-y-6">
                {/* User Info Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="relative shrink-0">
                        {progress.photoUrl ? (
                            <img 
                                src={progress.photoUrl} 
                                alt="Profile" 
                                className="w-16 h-16 rounded-full border border-slate-100 shadow-sm object-cover"
                            />
                        ) : (
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-fuchsia-50 rounded-full flex items-center justify-center text-2xl font-bold text-violet-600 border border-violet-100">
                                {progress.userName ? progress.userName[0].toUpperCase() : 'U'}
                            </div>
                        )}
                        {progress.premiumStatus && (
                            <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
                                    <Crown className="w-3.5 h-3.5 text-white fill-white" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">{progress.userName || 'User'}</h2>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-slate-400 text-xs font-medium">Участник с {progress.lastLoginDate || '2023'}</span>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100">
                            <span className={`w-2 h-2 rounded-full ${progress.premiumStatus ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
                            <span className="text-xs font-bold text-slate-600">{progress.premiumStatus ? 'Premium Аккаунт' : 'Бесплатный аккаунт'}</span>
                        </div>
                    </div>
                </div>

                {/* Community & Share Section */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-4 text-slate-900">
                        <Users className="w-5 h-5 text-violet-500" />
                        <h3 className="text-lg font-bold">Сообщество</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => { triggerHaptic('medium'); shareApp(); }}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 active:bg-indigo-100 active:scale-95 transition-all"
                        >
                            <Share2 className="w-6 h-6 text-indigo-600" />
                            <span className="text-xs font-bold text-indigo-800">Пригласить друга</span>
                        </button>

                        <button 
                            onClick={() => { triggerHaptic('medium'); openChannel(); }}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-sky-50 rounded-2xl border border-sky-100 active:bg-sky-100 active:scale-95 transition-all"
                        >
                            <MessageCircle className="w-6 h-6 text-sky-600" />
                            <span className="text-xs font-bold text-sky-800">Наш канал</span>
                        </button>
                    </div>
                </div>

                {/* Data Management Section */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-4 text-slate-900">
                        <Database className="w-5 h-5 text-slate-400" />
                        <h3 className="text-lg font-bold">Управление данными</h3>
                    </div>
                    
                    <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                        Ваш прогресс хранится на этом устройстве. Рекомендуем периодически сохранять резервную копию.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={handleExport}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 active:bg-slate-100 active:scale-95 transition-all"
                        >
                            <Download className="w-6 h-6 text-violet-600" />
                            <span className="text-xs font-bold text-slate-600">Скачать копию</span>
                        </button>

                        <button 
                            onClick={() => setShowImportInput(!showImportInput)}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 active:bg-slate-100 active:scale-95 transition-all"
                        >
                            <Upload className="w-6 h-6 text-emerald-600" />
                            <span className="text-xs font-bold text-slate-600">Восстановить</span>
                        </button>
                    </div>

                    {showImportInput && (
                        <div className="mt-4 animate-in slide-in-from-top-2">
                             <textarea 
                                value={importCode}
                                onChange={(e) => setImportCode(e.target.value)}
                                placeholder="Вставьте код восстановления сюда..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono h-24 mb-3 focus:ring-2 focus:ring-violet-200 outline-none"
                             />
                             {importStatus && (
                                 <div className={`text-xs font-bold mb-3 px-3 py-2 rounded-lg ${importStatus.success ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                     {importStatus.msg}
                                 </div>
                             )}
                             <button 
                                onClick={handleImport}
                                className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm active:scale-95 transition-transform"
                             >
                                 Загрузить прогресс
                             </button>
                        </div>
                    )}
                </div>

                {/* Premium Section */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <h3 className="text-center text-lg font-bold text-slate-900 mb-6">Преимущества Premium</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-violet-600 shrink-0" />
                                <span className="font-bold text-sm text-slate-900">Глубина словаря</span>
                            </div>
                            <div className="flex justify-between items-start text-xs mt-2 gap-2">
                                <span className="text-slate-500 font-medium">БЕСПЛАТНО<br/><span className="text-slate-900 font-bold block mt-0.5">3,000 слов (95%)</span><span className="text-[10px] text-slate-400 block">Понимание с трудом</span></span>
                                <span className="text-right text-emerald-600 font-medium">ПРЕМИУМ<br/><span className="text-emerald-700 font-bold block mt-0.5">10,000 слов (98%)</span><span className="text-[10px] text-emerald-600/70 block">Свободное чтение</span></span>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                                <BarChart3 className="w-5 h-5 text-violet-600 shrink-0" />
                                <span className="font-bold text-sm text-slate-900">Скорость обучения</span>
                            </div>
                            <div className="flex justify-between items-start text-xs mt-2 gap-2">
                                <span className="text-slate-500 font-medium">БЕСПЛАТНО<br/><span className="text-slate-900 font-bold block mt-0.5">10 слов/день</span></span>
                                <span className="text-right text-emerald-600 font-medium">ПРЕМИУМ<br/><span className="text-emerald-700 font-bold block mt-0.5">Без ограничений</span></span>
                            </div>
                        </div>

                         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-5 h-5 text-violet-600 shrink-0" />
                                <span className="font-bold text-sm text-slate-900">ИИ Тьютор</span>
                            </div>
                            <div className="flex justify-between items-start text-xs mt-2 gap-2">
                                <span className="text-slate-500 font-medium">БЕСПЛАТНО<br/><span className="text-slate-900 font-bold block mt-0.5">5 разборов/день</span></span>
                                <span className="text-right text-emerald-600 font-medium">ПРЕМИУМ<br/><span className="text-emerald-700 font-bold block mt-0.5">50 разборов/день</span></span>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-5 h-5 text-violet-600 shrink-0" />
                                <span className="font-bold text-sm text-slate-900">Система повторений</span>
                            </div>
                            <div className="flex justify-between items-start text-xs mt-2 gap-2">
                                <span className="text-slate-500 font-medium">БЕСПЛАТНО<br/><span className="text-slate-900 font-bold block mt-0.5">Линейная (+3 дня)</span></span>
                                <span className="text-right text-emerald-600 font-medium">ПРЕМИУМ<br/><span className="text-emerald-700 font-bold block mt-0.5">Умная (FSRS/Anki)</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Subscription Button */}
                    <button 
                         onClick={handleBuyPremium}
                         disabled={progress.premiumStatus || isLoadingPayment}
                         className={`w-full mt-6 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] ${progress.premiumStatus ? 'bg-slate-100 text-slate-500 cursor-default' : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-violet-200'}`}
                    >
                        {isLoadingPayment ? <Loader2 className="w-5 h-5 animate-spin" /> : progress.premiumStatus ? <Check className="w-5 h-5"/> : <Crown className="w-5 h-5"/>}
                        {progress.premiumStatus ? 'Premium Активен' : 'Купить Premium за Stars'}
                    </button>

                    {/* Lifetime Deal Section */}
                    {!progress.premiumStatus && (
                        <div className="mt-4 relative group cursor-pointer" onClick={handleBuyPremium}>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-300 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 p-4 rounded-2xl flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Infinity className="w-5 h-5 text-amber-600" />
                                        <h4 className="font-bold text-amber-900">Навсегда</h4>
                                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Выгодно</span>
                                    </div>
                                    <p className="text-xs text-amber-800/80 font-medium">Разовая оплата. Никаких подписок.</p>
                                </div>
                                <div className="flex items-center gap-1 bg-amber-400 text-amber-950 px-3 py-2 rounded-xl font-bold shadow-sm">
                                    <Star className="w-4 h-4 fill-current" />
                                    500
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <button 
                    onClick={() => { triggerHaptic('medium'); onLogout(); }}
                    className="w-full bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 font-bold py-4 rounded-2xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                    <LogOut className="w-5 h-5" />
                    Выйти
                </button>
                
                <p className="text-center text-xs text-slate-400 font-medium pt-2">
                    VocabMaster v1.2.0 • support@vocabmaster.app
                </p>
            </div>
        </div>
    );
};
