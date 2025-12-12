import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Check, Loader2, ArrowRight, Brain } from 'lucide-react';
import { Header } from './Header';
import { Word, ProficiencyLevel, UserProgress, AIExplanation } from '../types';
import { getWordsDueForReview, rateWord, lockDailySession, getWordsByLevelAsync, getAllWords, checkAIUsageLimit, incrementAIUsage, isUserPremium } from '../services/storageService';
import { explainWordWithAI } from '../services/aiService';
import { triggerHaptic, speak } from '../utils/uiHelpers';

interface LearningSessionProps {
    mode: 'daily' | 'review';
    level?: ProficiencyLevel;
    progress: UserProgress;
    onComplete: () => void;
    onBuyPremium: () => void;
}

export const LearningSession: React.FC<LearningSessionProps> = ({ mode, level, progress, onComplete, onBuyPremium }) => {
    const [queue, setQueue] = useState<Word[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [aiData, setAiData] = useState<AIExplanation | null>(null);
    const [isAiLoading, setIsAiLoading] = useState(false);
    
    // Limits
    const isPremium = isUserPremium(progress);
    const dailyLimit = 10;
    
    useEffect(() => {
        const load = async () => {
            setIsLoading(true);
            let words: Word[] = [];
            
            if (mode === 'review') {
                const allWords = await getAllWords();
                const dueIds = await getWordsDueForReview(Object.keys(progress.wordProgress));
                words = allWords.filter(w => dueIds.includes(w.id));
                // Randomize review order and cap session
                words = words.sort(() => 0.5 - Math.random()).slice(0, 20); 
            } else {
                // Daily Learning
                if (!isPremium && progress.wordsLearnedToday >= dailyLimit) {
                    onComplete();
                    return;
                }
                
                const lvl = level || ProficiencyLevel.A1;
                const lvlWords = await getWordsByLevelAsync(lvl);
                const learnedIds = Object.keys(progress.wordProgress);
                
                const newWords = lvlWords.filter(w => !learnedIds.includes(w.id));
                
                const limit = isPremium ? 20 : Math.min(10, dailyLimit - progress.wordsLearnedToday);
                words = newWords.slice(0, limit);
            }
            
            setQueue(words);
            setIsLoading(false);
        };
        load();
    }, [mode, level, progress]);

    const currentWord = queue[currentIndex];

    const handleNext = async (rating: 'easy' | 'medium' | 'hard') => {
        if (!currentWord) return;
        
        // Save progress
        await rateWord(currentWord.id, rating, currentWord.level);
        
        triggerHaptic(rating === 'hard' ? 'error' : 'success');

        if (currentIndex < queue.length - 1) {
            setAiData(null);
            setIsFlipped(false);
            setCurrentIndex(prev => prev + 1);
        } else {
            // End of session
            if (mode === 'daily' && !isPremium) {
                // Force lock check if limit potentially reached
                await lockDailySession(); 
            }
            onComplete();
        }
    };

    const handleExplainAI = async () => {
        if (!currentWord) return;
        triggerHaptic('medium');
        
        const canUse = await checkAIUsageLimit();
        if (!canUse) {
            if (!isPremium) onBuyPremium();
            else alert("Достигнут дневной лимит AI запросов.");
            return;
        }

        setIsAiLoading(true);
        try {
            await incrementAIUsage();
            const explanation = await explainWordWithAI(currentWord.term, currentWord.level);
            setAiData(explanation);
        } catch (e) {
            console.error(e);
            alert("Ошибка AI сервиса");
        } finally {
            setIsAiLoading(false);
        }
    };

    if (isLoading) return <div className="h-full flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-violet-600"/></div>;

    if (queue.length === 0) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Все выполнено!</h2>
                <p className="text-slate-500 mb-8">
                    {mode === 'review' ? 'Слов для повторения пока нет.' : 'Вы выучили все слова этого уровня или достигли лимита.'}
                </p>
                <button onClick={onComplete} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">
                    Вернуться
                </button>
            </div>
        );
    }

    // Progress Bar
    const progressPercent = ((currentIndex) / queue.length) * 100;

    return (
        <div className="bg-slate-50 min-h-screen pb-10 flex flex-col">
            <Header 
                title={mode === 'review' ? 'Повторение' : 'Новые слова'} 
                subtitle={`${currentIndex + 1} из ${queue.length}`}
                onBack={onComplete}
                rightContent={
                    <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-600 transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                }
            />

            <div className="flex-1 px-5 pt-4 pb-24 overflow-y-auto no-scrollbar">
                <div className="relative perspective-1000 min-h-[400px]">
                     <div 
                        onClick={() => !isFlipped && setIsFlipped(true)}
                        className={`relative w-full bg-white rounded-[2rem] shadow-xl border border-slate-100 transition-all duration-500 transform-style-3d p-6 flex flex-col items-center justify-center text-center min-h-[400px] ${!isFlipped ? 'cursor-pointer active:scale-[0.98]' : ''}`}
                     >
                        {!isFlipped ? (
                            <div className="animate-in zoom-in duration-300">
                                <span className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 uppercase mb-6 tracking-wide">
                                    {currentWord.partOfSpeech}
                                </span>
                                <h2 className="text-5xl font-black text-slate-900 mb-4 break-words">{currentWord.term}</h2>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); speak(currentWord.term); }}
                                    className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mx-auto hover:bg-violet-100 transition-colors"
                                >
                                    <Volume2 className="w-7 h-7" />
                                </button>
                                <p className="mt-8 text-slate-400 text-sm font-medium">Нажмите, чтобы перевернуть</p>
                            </div>
                        ) : (
                            <div className="w-full text-left animate-in fade-in duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900">{currentWord.term}</h2>
                                        <p className="text-sm text-slate-400 font-mono">{currentWord.transcription}</p>
                                    </div>
                                    <button 
                                        onClick={() => speak(currentWord.term)}
                                        className="w-10 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center"
                                    >
                                        <Volume2 className="w-5 h-5" />
                                    </button>
                                </div>
                                
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-violet-600 mb-2">{currentWord.translation}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{currentWord.definition}</p>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {currentWord.examples.slice(0, 2).map((ex, i) => (
                                        <div key={i} className="pl-3 border-l-2 border-slate-200">
                                            <p className="text-slate-800 text-sm font-medium">"{ex.en}"</p>
                                            <p className="text-slate-500 text-xs">{ex.ru}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* AI Explanation Section */}
                                {aiData ? (
                                    <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 animate-in slide-in-from-bottom-2">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Brain className="w-4 h-4 text-indigo-600" />
                                            <span className="text-xs font-bold text-indigo-700 uppercase">AI Тьютор</span>
                                        </div>
                                        
                                        <p className="text-sm text-slate-800 mb-3 leading-relaxed">{aiData.detailedExplanation}</p>
                                        
                                        {aiData.mnemonic && (
                                            <div className="bg-white/60 p-3 rounded-xl mb-3">
                                                <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-1">Мнемотехника</span>
                                                <p className="text-xs text-indigo-900 font-medium italic">"{aiData.mnemonic}"</p>
                                            </div>
                                        )}

                                        {aiData.collocations && aiData.collocations.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {aiData.collocations.slice(0,3).map((col, idx) => (
                                                    <span key={idx} className="text-[10px] px-2 py-1 bg-white border border-indigo-100 rounded-md text-slate-600">
                                                        {col.en}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {aiData.extraExamples && aiData.extraExamples.length > 0 && (
                                            <div className="mt-4 pt-4 border-t border-indigo-100/50">
                                                <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-2">Еще примеры</span>
                                                <div className="space-y-2">
                                                    {aiData.extraExamples.map((ex, i) => (
                                                        <div key={i} className="pl-2 border-l-2 border-indigo-200">
                                                            <p className="text-slate-800 text-xs font-medium">"{ex.en}"</p>
                                                            <p className="text-slate-500 text-[10px]">{ex.ru}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button 
                                        onClick={handleExplainAI}
                                        disabled={isAiLoading}
                                        className="w-full py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-indigo-100 border-dashed"
                                    >
                                        {isAiLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Sparkles className="w-4 h-4" />}
                                        {isAiLoading ? 'Генерирую...' : 'Объяснить с помощью AI'}
                                    </button>
                                )}
                            </div>
                        )}
                     </div>
                </div>
            </div>

            {/* CONTROLS */}
            <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-xl border-t border-slate-200 z-40 max-w-md mx-auto">
                {!isFlipped ? (
                    <button 
                        onClick={() => { triggerHaptic('light'); setIsFlipped(true); }}
                        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.98] transition-transform"
                    >
                        Показать ответ
                    </button>
                ) : (
                    <div className="grid grid-cols-3 gap-3">
                         {/* REVIEW MODE BUTTONS (SRS) or LEARNING MODE BUTTONS */}
                         {mode === 'review' ? (
                             <>
                                <button onClick={() => handleNext('hard')} className="py-4 bg-rose-100 text-rose-600 rounded-2xl font-bold flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform">
                                    <span className="text-sm">Сложно</span>
                                    <span className="text-[10px] opacity-70">Сброс</span>
                                </button>
                                <button onClick={() => handleNext('medium')} className="py-4 bg-amber-100 text-amber-600 rounded-2xl font-bold flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform">
                                    <span className="text-sm">Нормально</span>
                                    <span className="text-[10px] opacity-70">1 день</span>
                                </button>
                                <button onClick={() => handleNext('easy')} className="py-4 bg-emerald-100 text-emerald-600 rounded-2xl font-bold flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform">
                                    <span className="text-sm">Легко</span>
                                    <span className="text-[10px] opacity-70">3 дня</span>
                                </button>
                             </>
                         ) : (
                             // DAILY LEARNING (Simple "Next")
                             <button onClick={() => handleNext('medium')} className="col-span-3 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                                 Запомнил <ArrowRight className="w-5 h-5" />
                             </button>
                         )}
                    </div>
                )}
            </div>
        </div>
    );
};