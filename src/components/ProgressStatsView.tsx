
import React, { useState, useEffect } from 'react';
import { Loader2, Trophy, Clock, Brain, Quote, Book, BarChart3, Flame, Sprout } from 'lucide-react';
import { Header } from './Header';
import { UserProgress, Achievement } from '../types';
import { getAllWords, getStatsByLevel, getAchievements, getUserRank } from '../services/storageService';

interface ProgressStatsViewProps {
    progress: UserProgress;
    onBack: () => void;
}

export const ProgressStatsView: React.FC<ProgressStatsViewProps> = ({ progress, onBack }) => {
    const [stats, setStats] = useState<{ learned: number, total: number, overallPercent: number, levelStats: any[], achievements: Achievement[] } | null>(null);

    useEffect(() => {
        const load = async () => {
             const allWords = await getAllWords();
             const total = allWords.length;
             const learned = Object.keys(progress.wordProgress).length;
             const levelStats = await getStatsByLevel();
             const ach = await getAchievements();
             setStats({
                 learned,
                 total,
                 overallPercent: total > 0 ? (learned / total) * 100 : 0,
                 levelStats,
                 achievements: ach
             });
        };
        load();
    }, [progress]);

    if (!stats) return <div className="min-h-screen flex items-center justify-center dark:bg-slate-950"><Loader2 className="w-8 h-8 animate-spin text-violet-600 dark:text-violet-400"/></div>;

    const unlockedAchievements = stats.achievements.filter(a => a.current >= a.max);
    const rank = getUserRank(stats.learned);

    const levelColors: Record<string, string> = {
        'A1': 'bg-emerald-500',
        'A2': 'bg-teal-500',
        'B1': 'bg-sky-500',
        'B2': 'bg-blue-600',
        'C1': 'bg-violet-600',
        'C2': 'bg-fuchsia-600',
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32 transition-colors duration-300">
            <Header title="Ваш Прогресс" onBack={onBack}/>

            <div className="p-5 space-y-8">
                
                {/* 1. Top Summary Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-violet-50 dark:bg-violet-900/30 text-violet-500 dark:text-violet-300 rounded-full flex items-center justify-center mb-2">
                            <Book className="w-5 h-5" />
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white leading-none mb-1">
                            {stats.learned} <span className="text-slate-300 dark:text-slate-600 text-sm font-normal">/ {stats.total}</span>
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Словарь</div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-500 dark:text-fuchsia-300 rounded-full flex items-center justify-center mb-2">
                            <BarChart3 className="w-5 h-5" />
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white leading-none mb-1">
                            {stats.overallPercent.toFixed(1)}%
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Общий прогресс</div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-300 rounded-full flex items-center justify-center mb-2">
                            <Flame className="w-5 h-5" />
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white leading-none mb-1">
                            {progress.streak} <span className="text-slate-300 dark:text-slate-600 text-sm font-normal">дней</span>
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Текущая серия</div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-2">
                            <Sprout className="w-5 h-5" />
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white leading-none mb-1 truncate max-w-full px-1">
                            {rank.title}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Текущий ранг</div>
                    </div>
                </div>

                {/* 2. Level Stats */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 ml-1">Статистика по уровням</h3>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
                        {stats.levelStats.map((stat) => (
                            <div key={stat.lvl}>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs ${levelColors[stat.lvl] || 'bg-slate-400'}`}>
                                            {stat.lvl}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-white leading-none">{stat.current} слов</div>
                                            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">из {stat.total} доступных</div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">{stat.percent.toFixed(0)}%</span>
                                </div>
                                <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ${levelColors[stat.lvl] || 'bg-slate-400'}`} 
                                        style={{ width: `${stat.percent}%` }} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Learning Tips (Styled as requested) */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 ml-1">Советы по обучению</h3>
                    <div className="space-y-3">
                         <div className="bg-blue-50/50 dark:bg-blue-900/20 p-5 rounded-3xl border border-blue-100 dark:border-blue-900/50 flex gap-4 items-start">
                             <div className="mt-1">
                                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                             </div>
                             <div>
                                 <h4 className="font-bold text-blue-900 dark:text-blue-200 text-sm mb-1">Регулярность</h4>
                                 <p className="text-xs text-blue-800/70 dark:text-blue-300 font-medium leading-relaxed">Лучше 10 минут каждый день, чем 2 часа раз в неделю. Мозг запоминает порциями.</p>
                             </div>
                        </div>

                        <div className="bg-amber-50/50 dark:bg-amber-900/20 p-5 rounded-3xl border border-amber-100 dark:border-amber-900/50 flex gap-4 items-start">
                             <div className="mt-1">
                                <Brain className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                             </div>
                             <div>
                                 <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1">Ассоциации</h4>
                                 <p className="text-xs text-amber-800/70 dark:text-amber-300 font-medium leading-relaxed">Используйте мнемотехнику. Придумывайте смешные или нелепые образы к сложным словам.</p>
                             </div>
                        </div>

                        <div className="bg-emerald-50/50 dark:bg-emerald-900/20 p-5 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 flex gap-4 items-start">
                             <div className="mt-1">
                                <Quote className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                             </div>
                             <div>
                                 <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm mb-1">Контекст</h4>
                                 <p className="text-xs text-emerald-800/70 dark:text-emerald-300 font-medium leading-relaxed">Учите не просто слова, а целые фразы. Так вы запомните, как слово реально используется.</p>
                             </div>
                        </div>
                    </div>
                </div>

                 {/* 4. Achievements */}
                 <div>
                    <div className="flex items-center justify-between mb-3 ml-1 mr-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ваши награды</h3>
                        <span className="text-xs font-bold text-violet-600 dark:text-violet-300 bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded-md">{unlockedAchievements.length} получено</span>
                    </div>
                    
                    {unlockedAchievements.length > 0 ? (
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-4 gap-4">
                            {unlockedAchievements.map(ach => (
                                <div key={ach.id} className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-fuchsia-50 dark:from-violet-900/50 dark:to-fuchsia-900/50 rounded-2xl flex items-center justify-center text-2xl border border-violet-100 dark:border-violet-900/50 mb-2 shadow-sm">
                                        {ach.icon}
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400 leading-tight line-clamp-2">{ach.title}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm text-center">
                            <Trophy className="w-12 h-12 text-slate-200 dark:text-slate-700 mx-auto mb-3" />
                            <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">У вас пока нет достижений.</p>
                            <p className="text-slate-300 dark:text-slate-600 text-xs mt-1">Продолжайте учиться!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
