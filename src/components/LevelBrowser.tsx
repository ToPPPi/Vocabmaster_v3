
import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Heart, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Header } from './Header';
import { ProficiencyLevel, UserProgress, Word } from '../types';
import { getWordsByLevelAsync, toggleKnownStatus } from '../services/storageService';
import { forceSave } from '../services/storage/core'; 
import { triggerHaptic } from '../utils/uiHelpers';

const PAGE_SIZE = 20;

interface LevelBrowserProps {
    level: ProficiencyLevel;
    progress: UserProgress;
    onBack: () => void;
    onUpdate: () => void;
}

export const LevelBrowser: React.FC<LevelBrowserProps> = ({ level, progress, onBack, onUpdate }) => {
    const [page, setPage] = useState(0);
    const [allWords, setAllWords] = useState<Word[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    
    // Initial known state from props
    const [knownWords, setKnownWords] = useState<Set<string>>(new Set());

    // CRITICAL FIX: Sort words by ID.
    // This ensures the list order is DETERMINISTIC.
    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll
        const load = async () => {
            const words = await getWordsByLevelAsync(level);
            // Sort by ID to guarantee same order every time
            const sortedWords = [...words].sort((a, b) => a.id.localeCompare(b.id));
            
            setAllWords(sortedWords);
            // Initialize known state only once on mount
            setKnownWords(new Set(Object.keys(progress.wordProgress)));
            setIsLoading(false);
        };
        load();
    }, [level]); 

    // Reset page on search
    useEffect(() => {
        setPage(0);
    }, [search]);

    const handleToggleKnown = async (wordId: string) => {
        triggerHaptic('selection');
        
        // 1. Instant Visual Update (Optimistic)
        setKnownWords(prev => {
            const newSet = new Set(prev);
            if (newSet.has(wordId)) {
                newSet.delete(wordId);
            } else {
                newSet.add(wordId);
            }
            return newSet;
        });

        // 2. Background Save (Debounced by storage service)
        try {
            await toggleKnownStatus(wordId);
        } catch (e) {
            console.error("Failed to toggle word", e);
        }
    };

    const handleBack = async () => {
        // CRITICAL: Force save pending debounced writes when leaving screen
        await forceSave();
        onUpdate(); 
        onBack();
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center dark:bg-slate-900"><Loader2 className="w-8 h-8 animate-spin text-violet-600"/></div>;

    const filteredWords = allWords.filter(w => w.term.toLowerCase().includes(search.toLowerCase()) || w.translation.toLowerCase().includes(search.toLowerCase()));
    const totalPages = Math.ceil(filteredWords.length / PAGE_SIZE);
    const displayWords = filteredWords.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32 transition-colors duration-300">
            <Header 
                title={`Уровень ${level}`} 
                subtitle={`Стр ${page + 1} из ${totalPages || 1}`}
                onBack={handleBack} 
                rightContent={<div className="text-xs font-bold text-violet-600 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1.5 rounded-full">{filteredWords.length} слов</div>}
            />

            {/* Search Bar */}
            <div className="px-4 py-2 sticky top-20 z-30 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-sm pb-4">
                 <div className="relative">
                    <Search className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Поиск..." 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-900 text-slate-900 dark:text-white font-medium shadow-sm transition-colors" 
                    />
                 </div>
            </div>

            <div className="p-4 space-y-3">
                {displayWords.length === 0 ? (
                    <div className="text-center py-20 text-slate-400 dark:text-slate-600">
                        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-30" />
                        <p className="text-lg font-medium">Ничего не найдено.</p>
                    </div>
                ) : (
                    displayWords.map((word) => {
                        const isKnown = knownWords.has(word.id);
                        return (
                            <div key={word.id} className="bg-white dark:bg-slate-900 px-5 py-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 transition-colors h-auto min-h-[90px]">
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col mb-1.5">
                                        <span className="font-bold text-slate-900 dark:text-white text-lg">{word.term}</span>
                                        {/* FIX: Changed inline-block to block and w-full to ensure expansion for long text */}
                                        <span className="text-sm font-bold text-violet-600 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-300 px-2 py-1 rounded-md mt-1 whitespace-normal break-words leading-snug block w-full">
                                            {word.translation}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug font-medium line-clamp-2">
                                        {word.definition}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => handleToggleKnown(word.id)}
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm shrink-0 ${isKnown ? 'bg-violet-500 text-white shadow-violet-200 dark:shadow-none scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                                >
                                    <Heart className={`w-6 h-6 ${isKnown ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                        );
                    })
                )}
            </div>

            <div className="fixed bottom-24 left-0 right-0 px-6 flex justify-center pointer-events-none z-30">
                 <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-6 pointer-events-auto">
                    <button 
                        onClick={() => { triggerHaptic('light'); setPage(p => Math.max(0, p - 1)); }}
                        disabled={page === 0}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 text-slate-600 dark:text-slate-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 min-w-[3rem] text-center">
                        {page + 1} / {Math.max(1, totalPages)}
                    </span>
                    <button 
                        onClick={() => { triggerHaptic('light'); setPage(p => Math.min(totalPages - 1, p + 1)); }}
                        disabled={page >= totalPages - 1}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 text-slate-600 dark:text-slate-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                 </div>
            </div>
        </div>
    );
};
