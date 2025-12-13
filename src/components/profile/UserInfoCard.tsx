
import React from 'react';
import { Crown } from 'lucide-react';
import { UserProgress } from '../../types';

interface UserInfoCardProps {
    progress: UserProgress;
    isPremium: boolean;
    expDate: string | null;
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({ progress, isPremium, expDate }) => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <div className="relative shrink-0">
                {progress.photoUrl ? (
                    <img 
                        src={progress.photoUrl} 
                        alt="Profile" 
                        className="w-16 h-16 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm object-cover"
                    />
                ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-fuchsia-50 dark:from-violet-900 dark:to-fuchsia-900 rounded-full flex items-center justify-center text-2xl font-bold text-violet-600 dark:text-violet-200 border border-violet-100 dark:border-violet-800">
                        {progress.userName ? progress.userName[0].toUpperCase() : 'U'}
                    </div>
                )}
                {isPremium && (
                    <div className="absolute -top-1 -right-1 bg-white dark:bg-slate-900 rounded-full p-0.5 shadow-sm">
                        <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
                            <Crown className="w-3.5 h-3.5 text-white fill-white" />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{progress.userName || 'User'}</h2>
                <div className="flex flex-col mt-1">
                    <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                        <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                            {isPremium ? 'Premium Активен' : 'Бесплатный аккаунт'}
                        </span>
                    </div>
                    {isPremium && expDate && (
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1 ml-1">
                            Действует до: {expDate}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
