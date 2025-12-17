
import React, { useState } from 'react';
import { Wrench, TestTube, Clock, Search, Loader2, Activity, Music, Send } from 'lucide-react';
import { dev_UnlockRealWords, dev_PopulateReview, dev_RunHealthCheck, togglePremium } from '../../services/storageService';
import { triggerHaptic } from '../../utils/uiHelpers';
import { RewardOverlay, RewardType } from '../RewardOverlay';

interface DevZoneProps {
    onUpdate: () => void;
}

export const DevZone: React.FC<DevZoneProps> = ({ onUpdate }) => {
    const [isDevLoading, setIsDevLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("");
    const [report, setReport] = useState<string[] | null>(null);
    const [testReward, setTestReward] = useState<RewardType | null>(null);

    const handleDevPremium = async () => {
        triggerHaptic('success');
        await togglePremium(true);
        await onUpdate();
        alert("Developer Premium Granted!");
    };

    const handleTestNotification = async () => {
        const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
        if (!tgUser) {
            alert("Вы не в Telegram. Невозможно отправить сообщение.");
            return;
        }

        setIsDevLoading(true);
        setLoadingText("Отправка боту...");
        setLoadingProgress(50);

        try {
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: tgUser.id,
                    text: `👋 Привет, ${tgUser.first_name}! \n\nЭто тест напоминания. \n🔥 Не забудь выучить слова сегодня!`
                })
            });
            
            const result = await response.json();
            
            if (response.ok) {
                triggerHaptic('success');
                alert("Сообщение отправлено! Проверьте чат с ботом.");
            } else {
                throw new Error(result.error || "Ошибка отправки");
            }
        } catch (e: any) {
            console.error(e);
            alert(`Ошибка: ${e.message}. Убедитесь, что вы запустили бота (/start).`);
        } finally {
            setIsDevLoading(false);
        }
    };

    const handleDevUnlockWords = async () => {
        const confirm = window.confirm(`Добавить 500 реальных слов в словарь?`);
        if(!confirm) return;
        
        setIsDevLoading(true);
        setLoadingText("Поиск слов в базе...");
        setLoadingProgress(0);

        try {
            const count = await dev_UnlockRealWords(500, (percent) => {
                setLoadingProgress(percent);
                if (percent > 90) setLoadingText("Сохранение в облако...");
                else if (percent > 50) setLoadingText("Добавление слов...");
            });
            await onUpdate();
            triggerHaptic('success');
            alert(`Успешно добавлено слов: ${count}\n(Всего доступно в базе на данный момент: ${count})`);
        } catch (e) {
            console.error(e);
            alert("Ошибка при добавлении.");
        } finally {
            setIsDevLoading(false);
        }
    };

    const handleDevPopulateReview = async () => {
        const confirm = window.confirm(`Сгенерировать 15 слов для повторения?`);
        if(!confirm) return;

        setIsDevLoading(true);
        setLoadingText("Подготовка очереди...");
        setLoadingProgress(0);

        try {
            const count = await dev_PopulateReview(15, (percent) => {
                setLoadingProgress(percent);
                if (percent > 80) setLoadingText("Сохранение...");
            });
            await onUpdate();
            triggerHaptic('success');
            alert(`Успешно добавлено в очередь повторения: ${count} слов.`);
        } catch (e) {
            console.error(e);
            alert("Ошибка при заполнении очереди.");
        } finally {
            setIsDevLoading(false);
        }
    };

    const handleHealthCheck = async () => {
        setIsDevLoading(true);
        setLoadingText("Диагностика словаря...");
        setLoadingProgress(50);
        try {
            const result = await dev_RunHealthCheck();
            setReport(result);
            setLoadingProgress(100);
        } catch (e) {
            console.error(e);
            alert("Ошибка диагностики.");
        } finally {
            setIsDevLoading(false);
        }
    };

    return (
        <>
            <RewardOverlay type={testReward} onClose={() => setTestReward(null)} />

            {/* LOADING OVERLAY - Scoped to DevZone usage */}
            {isDevLoading && (
                <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 w-full max-w-sm shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                        <Loader2 className="w-12 h-12 text-violet-600 dark:text-violet-400 animate-spin mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{loadingText}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Пожалуйста, не закрывайте приложение.</p>
                        
                        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 ease-out"
                                style={{ width: `${loadingProgress}%` }}
                            ></div>
                        </div>
                        <span className="text-xs font-bold text-slate-400 mt-2">{loadingProgress}%</span>
                    </div>
                </div>
            )}

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-4 bg-slate-100 dark:bg-slate-900 rounded-2xl p-4 border-2 border-dashed border-slate-300 dark:border-slate-700">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Development Zone</span>
                </div>
                
                <div className="space-y-3">
                    <button 
                        onClick={handleDevPremium}
                        className="w-full py-2 bg-slate-800 dark:bg-slate-800 text-slate-200 text-xs font-mono rounded-xl opacity-80 hover:opacity-100 transition-opacity"
                    >
                        [DEV] Grant Premium
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={() => setTestReward('happy_cat_test')}
                            className="py-2 bg-pink-500 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95 flex items-center justify-center gap-1"
                        >
                            <Music className="w-3 h-3"/> Happy Cat
                        </button>
                        <button 
                            onClick={handleTestNotification}
                            className="py-2 bg-sky-500 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95 flex items-center justify-center gap-1"
                        >
                            <Send className="w-3 h-3"/> Test Notify
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button 
                            onClick={handleDevUnlockWords}
                            disabled={isDevLoading}
                            className="flex-1 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95 flex items-center justify-center gap-2"
                        >
                            {isDevLoading ? <Loader2 className="w-3 h-3 animate-spin"/> : <TestTube className="w-3 h-3"/>}
                            Add 500 Real Words
                        </button>
                    </div>

                    <button 
                        onClick={handleDevPopulateReview}
                        disabled={isDevLoading}
                        className="w-full py-2 bg-amber-500 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95 flex items-center justify-center gap-2"
                    >
                        {isDevLoading ? <Loader2 className="w-3 h-3 animate-spin"/> : <Clock className="w-3 h-3"/>}
                        [DEV] Populate Review Queue
                    </button>

                    <button 
                        onClick={handleHealthCheck}
                        disabled={isDevLoading}
                        className="w-full py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95 flex items-center justify-center gap-2 border border-blue-500"
                    >
                        {isDevLoading ? <Loader2 className="w-3 h-3 animate-spin"/> : <Activity className="w-3 h-3"/>}
                        [DEV] Диагностика Словаря (Health Check)
                    </button>

                    {report && report.length > 0 && (
                        <div className="mt-4 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-left max-h-64 overflow-y-auto no-scrollbar">
                            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 sticky top-0 bg-white dark:bg-slate-800 pb-2 border-b border-slate-100 dark:border-slate-700">Отчет диагностики:</h4>
                            <ul className="space-y-1.5">
                                {report.map((line, idx) => (
                                    <li key={idx} className={`text-[10px] font-mono border-b border-slate-100 dark:border-slate-700/50 pb-1 last:border-0 leading-tight ${line.startsWith('✅') ? 'text-emerald-600 dark:text-emerald-400' : line.startsWith('⚠️') ? 'text-amber-600 dark:text-amber-400' : line.startsWith('❌') ? 'text-rose-600 dark:text-rose-400' : 'text-slate-600 dark:text-slate-300'}`}>
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
