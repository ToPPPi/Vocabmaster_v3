import React, { useState, useEffect } from 'react';
import { UserState, UserLevel, Word, WordStatus } from '../types';
import { fetchLibraryWords, syncProgress } from '../services/dataService';
import { Layers, Search, Lock, Check, Book, Crown, Loader2 } from 'lucide-react';

interface WordListProps {
  user: UserState;
  onUpdateProgress?: () => void;
}

const WordList: React.FC<WordListProps> = ({ user, onUpdateProgress }) => {
  const [activeLevel, setActiveLevel] = useState<UserLevel>(UserLevel.A1);
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  // Levels configuration
  const levels = Object.values(UserLevel);
  const isLevelLocked = (level: UserLevel) => {
    // Lock B2, C1, C2 for free users
    if (user.isPremium) return false;
    return ['B2', 'C1', 'C2'].includes(level);
  };

  useEffect(() => {
    loadWords(activeLevel);
  }, [activeLevel]);

  const loadWords = async (level: UserLevel) => {
    if (isLevelLocked(level)) return; // Don't fetch if locked

    setLoading(true);
    setError('');
    try {
      const data = await fetchLibraryWords(level);
      setWords(data);
    } catch (err: any) {
      if (err.message === 'PREMIUM_REQUIRED') {
         // Should be handled by isLevelLocked check, but double safety
         setError('Premium required for this level.');
      } else {
         setError('Failed to load words.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleMarkKnown = async (wordId: string) => {
     // Optimistic update
     setWords(prev => prev.map(w => 
        w.id === wordId ? { ...w, status: WordStatus.KNOWN } : w
     ));
     
     try {
       await syncProgress(wordId, WordStatus.KNOWN);
       if (onUpdateProgress) onUpdateProgress();
     } catch (e) {
       console.error("Sync failed", e);
       // Revert on error could be implemented here
     }
  };

  const filteredWords = words.filter(w => 
    w.word.toLowerCase().includes(search.toLowerCase()) || 
    w.translation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Word Library</h2>
          <p className="text-slate-500 mt-1">Browse all words by level. Mark words you already know.</p>
        </div>
      </div>

      {/* Level Tabs */}
      <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
        {levels.map((lvl) => {
          const locked = isLevelLocked(lvl);
          const isActive = activeLevel === lvl;
          
          return (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={`
                relative flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all whitespace-nowrap
                ${isActive 
                  ? 'bg-brand-