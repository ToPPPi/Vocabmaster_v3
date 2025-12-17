
import React from 'react';
import { Users, Share2, MessageCircle, Database, ChevronRight, Shield, LifeBuoy } from 'lucide-react';
import { shareApp, triggerHaptic } from '../../utils/uiHelpers';
import { ViewState } from '../../types';

interface DataManagementSectionProps {
    onUpdate: () => void;
    onNavigate?: (view: ViewState) => void;
}

export const DataManagementSection: React.FC<DataManagementSectionProps> = ({ onNavigate }) => {
    
    const handleOpenManagement = () => {
        triggerHaptic('medium');
        if (onNavigate) onNavigate('data_management');
    };

    const openLink = (url: string) => {
        triggerHaptic('light');
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.openLink(url);
        } else {
            window.open(url, '_blank');
        }
    };

    // ВАЖНО: Замените 'your_support_chat' на реальный юзернейм вашей группы или лички
    const SUPPORT_LINK = 'https://t.me/vocab_support_ru'; 
    const NEWS_LINK = 'https://t.me/vocab_news';

    // Ссылка на политику генерируется относительно текущего домена
    const PRIVACY_LINK = window.location.origin + '/privacy.html';

    return (
        <div className="space-y-4">
            {/* Community Block */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white">
                    <Users className="w-5 h-5 text-slate-400" />
                    <h3 className="text-lg font-bold">Сообщество</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={shareApp} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:bg-slate-100 dark:hover:bg-slate-700">
                        <Share2 className="w-5 h-5 text-violet-500" />
                        Пригласить друга
                    </button>
                    <button onClick={() => window.Telegram?.WebApp.openTelegramLink(NEWS_LINK)} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:bg-slate-100 dark:hover:bg-slate-700">
                        <MessageCircle className="w-5 h-5 text-sky-500" />
                        Наш канал
                    </button>
                </div>
            </div>

            {/* Legal & Support Block */}
            <div className="grid grid-cols-2 gap-3">
                <button 
                    onClick={() => openLink(PRIVACY_LINK)}
                    className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                    <Shield className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Правила</span>
                </button>
                <button 
                    onClick={() => window.Telegram?.WebApp.openTelegramLink(SUPPORT_LINK)}
                    className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                    <LifeBuoy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Поддержка</span>
                </button>
            </div>

            {/* Data Block Button */}
            <button 
                onClick={handleOpenManagement}
                className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 flex items-center justify-between group active:scale-[0.99] transition-all"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400">
                        <Database className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Данные и Хранилище</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Синхронизация, Бэкап, Экспорт</p>
                    </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-slate-500" />
            </button>
        </div>
    );
};
