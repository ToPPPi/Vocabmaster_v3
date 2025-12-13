
import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import { Header } from './Header';
import { UserProgress, Achievement } from '../types';
import { getAchievements } from '../services/storageService';

interface AchievementsViewProps {
    progress: UserProgress;
    onBack: () => void;
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({ progress, onBack }) => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    useEffect(() => {
        const load = async () => {
            const a = await getAchievements();
            setAchievements(a);
        };
        load();
    }, [progress]);

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32 transition-colors duration-300">
            <Header title="Достижения" onBack={onBack} />
            <div className="p-5 space-y-4">
                {achievements.map(ach => {
                    const isUnlocked = ach.current >= ach.max;
                    const percent = Math.min(100, Math.max(0, (ach.current / ach.max) * 100));
                    
                    return (
                        <div key={ach.id} className={`bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-all ${isUnlocked ? 'opacity-100' : 'opacity-60 grayscale'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm shrink-0 ${isUnlocked ? 'bg-gradient-to-br from-violet-100 to-fuchsia-50 dark:from-violet-900/50 dark:to-fuchsia-900/50 border border-violet-100 dark:border-violet-900/50' : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600'}`}>
                                {ach.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white truncate pr-2">{ach.title}</h3>
                                    {isUnlocked && <Trophy className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">{ach.description}</p>
                                
                                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${isUnlocked ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'bg-slate-300 dark:bg-slate-700'}`} 
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-1 text-right">
                                    {Math.min(ach.current, ach.max)} / {ach.max}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
