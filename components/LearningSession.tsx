
import React, { useState, useEffect, useCallback } from 'react';
import { UserState, Word, UserLevel, WordStatus } from '../types';
import { generateWordContext } from '../services/geminiService';
import { fetchSessionWords, syncProgress } from '../services/dataService';
import { speak } from '../services/ttsService';
import { Lock, Check, X, RotateCcw, Volume2, Sparkles, ArrowRight, Crown, Loader2, Clock } from 'lucide-react';

interface LearningSessionProps {
  user: UserState;
  words?: Word[]; 
  updateWordStatus: (wordId: string, status: WordStatus) => void;
  incrementProgress: () => void;
}

const LearningSession: React.FC<LearningSessionProps> = ({ user, updateWordStatus, incrementProgress }) => {
  const [mode, setMode] = useState<'SELECT_LEVEL' | 'SESSION' | 'FINISHED'>('SELECT_LEVEL');
  const [sessionQueue, setSessionQueue] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [aiContext, setAiContext] = useState<{ examples: string[], translation?: string } | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [isFetchingWords, setIsFetchingWords] = useState(false);
  
  // Anti-cheat & Earned Premium Feedback
  const [canProceed, setCanProceed] = useState(false);
  const [earnedPremiumNotif, setEarnedPremiumNotif] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      setCanProceed(false);
      const timer = setTimeout(() => {
        setCanProceed(true);
      }, 3000); // 3 seconds minimum
      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  // --- Level Selection Logic ---

  const handleStartLevel = async (level: UserLevel) => {
    setIsFetchingWords(true);
    try {
      const words = await fetchSessionWords(level);
      
      if (words.length === 0) {
        if (user.dailyProgress >= user.dailyGoal) {
           alert("You've reached your daily limit! Come back tomorrow.");
        } else {
           alert("No new words available in this level right now.");
        }
        return;
      }

      setSessionQueue(words);
      setCurrentIndex(0);
      setMode('SESSION');
      setIsFlipped(false);
      loadContext(words[0]);
    } catch (e) {
      console.error(e);
      alert("Failed to start session. Check connection.");
    } finally {
      setIsFetchingWords(false);
    }
  };

  const loadContext = useCallback(async (word: Word) => {
    setIsLoadingAi(true);
    setAiContext(null);
    try {
      const data = await generateWordContext(word.word, word.level);
      setAiContext(data);
      // Auto-pronounce when loading new word context? Optional. Let's do it on flip or explicit click.
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingAi(false);
    }
  }, []);

  const handleCardAction = async (status: WordStatus) => {
    if (!sessionQueue[currentIndex]) return;
    if (!canProceed) return; // Anti-cheat check

    const word = sessionQueue[currentIndex];

    // Optimistic UI update
    updateWordStatus(word.id, status);
    if (status === WordStatus.KNOWN || status === WordStatus.HARD) {
        incrementProgress();
        // Sync with backend
        const didEarn = await syncProgress(word.id, status);
        if (didEarn) setEarnedPremiumNotif(true);
    }

    if (currentIndex < sessionQueue.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setIsFlipped(false);
      loadContext(sessionQueue[nextIndex]);
    } else {
      setMode('FINISHED');
    }
  };

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (sessionQueue[currentIndex]) {
      speak(sessionQueue[currentIndex].word);
    }
  };

  // --- Render Views ---

  if (mode === 'SELECT_LEVEL') {
    const levels = Object.values(UserLevel);
    return (
      <div className="space-y-8 animate-fade-in relative">
        {isFetchingWords && (
           <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center rounded-3xl">
              <Loader2 className="w-10 h-10 text-brand-600 animate-spin" />
           </div>
        )}

        <div>
           <h2 className="text-3xl font-extrabold text-slate-900">Choose a Level</h2>
           <p className="text-slate-500 mt-2">Start your daily session by picking a difficulty.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {levels.map((level) => {
            const isLocked = !user.isPremium && (['B2', 'C1', 'C2'].includes(level));
            const progress = user.levelProgress[level] || 0;
            const total = 1000; // Mock total per level for now
            const percent = (progress / total) * 100;
            
            return (
              <button
                key={level}
                disabled={isLocked}
                onClick={() => handleStartLevel(level)}
                className={`relative group p-6 rounded-3xl border text-left transition-all duration-300 overflow-hidden ${
                  isLocked 
                    ? 'bg-slate-50 border-slate-200 opacity-80 cursor-not-allowed' 
                    : 'bg-white border-slate-200 hover:border-brand-400 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {!isLocked && <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-125"></div>}

                <div className="relative z-10 flex justify-between items-start mb-6">
                  <span className={`text-4xl font-extrabold tracking-tighter ${isLocked ? 'text-slate-400' : 'text-slate-800'}`}>{level}</span>
                  {isLocked && <Lock className="w-6 h-6 text-slate-400" />}
                </div>
                
                <div className="relative z-10">
                   <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                      <span>Progress</span>
                      <span>{Math.round(percent)}%</span>
                   </div>
                   <div className="w-full bg-slate-100 h-2 rounded-full mb-3 overflow-hidden">
                     <div className={`h-full rounded-full ${isLocked ? 'bg-slate-300' : 'bg-brand-500'}`} style={{ width: `${percent}%`}}></div>
                   </div>
                   <p className="text-xs text-slate-400 font-medium">{progress} / {total} words</p>
                </div>

                {isLocked && (
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                            <Crown className="w-3 h-3 text-yellow-400 fill-yellow-400" /> Premium
                        </span>
                    </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (mode === 'FINISHED') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-fade-in relative">
        {earnedPremiumNotif && (
            <div className="absolute top-0 bg-gradient-to-r from-violet-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-xl animate-float">
                <div className="flex items-center gap-2 font-bold">
                    <Crown className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span>You earned 3 Days of Premium!</span>
                </div>
            </div>
        )}

        <div className="relative">
             <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full animate-pulse-slow"></div>
             <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/30 rotate-3">
                <Check className="w-12 h-12" />
             </div>
        </div>
        
        <div className="space-y-2">
            <h2 className="text-4xl font-extrabold text-slate-900">Session Complete!</h2>
            <p className="text-slate-500 text-lg">You've mastered {sessionQueue.length} new words.</p>
        </div>

        <button 
          onClick={() => setMode('SELECT_LEVEL')}
          className="bg-brand-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-brand-700 transition-all hover:scale-105 shadow-xl shadow-brand-500/20 flex items-center gap-2"
        >
          Continue Learning <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const currentWord = sessionQueue[currentIndex];

  return (
    <div className="max-w-2xl mx-auto py-4 md:py-10">
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-lg">Level {currentWord.level}</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-sm font-medium text-slate-400">Word {currentIndex + 1} of {sessionQueue.length}</span>
           <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 transition-all duration-300" style={{ width: `${((currentIndex + 1) / sessionQueue.length) * 100}%` }}></div>
           </div>
        </div>
      </div>

      {/* Flashcard Container */}
      <div 
        className="relative w-full aspect-[4/5] sm:aspect-[1.6/1] perspective-1000 cursor-pointer group"
        onClick={() => !isFlipped && setIsFlipped(true)}
      >
        <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-[2rem] shadow-soft border border-slate-200 flex flex-col items-center justify-center p-8 text-center hover:shadow-glow transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-6xl sm:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">{currentWord.word}</h2>
                <p className="text-2xl text-slate-400 font-mono bg-slate-50 px-4 py-2 rounded-xl">{currentWord.transcription}</p>
            </div>
            <p className="text-sm text-brand-500 font-bold bg-brand-50 px-4 py-2 rounded-full uppercase tracking-widest animate-pulse">Tap to reveal</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[2rem] shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
             
             {/* Header Back */}
             <div className="bg-slate-50 p-6 flex justify-between items-center border-b border-slate-100">
                <div>
                   <h3 className="text-3xl font-bold text-slate-900">{currentWord.word}</h3>
                   <span className="text-sm text-slate-500 font-medium italic">{currentWord.partOfSpeech}</span>
                </div>
                <button 
                    onClick={playAudio}
                    className="p-3 text-brand-600 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
             </div>
             
             {/* Content Back */}
             <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
                <div className="mb-6">
                   <p className="text-2xl font-bold text-slate-800 leading-relaxed">
                     {aiContext?.translation || currentWord.translation}
                   </p>
                </div>

                {isLoadingAi ? (
                  <div className="space-y-3">
                     <div className="flex items-center gap-2 text-brand-600 animate-pulse mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">AI Generating Examples</span>
                     </div>
                     <div className="h-4 bg-slate-100 rounded w-3/4 animate-shimmer bg-[length:1000px_100%]"></div>
                     <div className="h-4 bg-slate-100 rounded w-1/2 animate-shimmer bg-[length:1000px_100%]"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {aiContext?.examples.map((ex, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-1 min-h-full bg-brand-300 rounded-full"></div>
                        <p className="text-slate-600 text-lg leading-relaxed">"{ex}"</p>
                      </div>
                    ))}
                  </div>
                )}
             </div>

             {/* Action Buttons */}
             <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-4">
                <button 
                  disabled={!canProceed}
                  onClick={(e) => { e.stopPropagation(); handleCardAction(WordStatus.HARD); }}
                  className="flex flex-col items-center justify-center gap-1 py-4 rounded-xl bg-white border-2 border-orange-100 text-orange-600 font-bold hover:bg-orange-50 hover:border-orange-200 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-wait"
                >
                  {!canProceed ? <Clock className="w-5 h-5 mb-1 animate-spin" /> : <RotateCcw className="w-5 h-5 mb-1" />}
                  <span className="text-sm uppercase tracking-wider">{!canProceed ? 'Wait...' : 'Hard'}</span>
                </button>
                <button 
                  disabled={!canProceed}
                  onClick={(e) => { e.stopPropagation(); handleCardAction(WordStatus.KNOWN); }}
                  className="flex flex-col items-center justify-center gap-1 py-4 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 disabled:opacity-50 disabled:cursor-wait"
                >
                   {!canProceed ? <Clock className="w-5 h-5 mb-1 animate-spin" /> : <Check className="w-5 h-5 mb-1" />}
                   <span className="text-sm uppercase tracking-wider">{!canProceed ? 'Wait...' : 'I Know It'}</span>
                </button>
             </div>
          </div>
        </div>
      </div>
      <p className="text-center text-xs font-semibold text-slate-300 mt-6 uppercase tracking-widest">Studying for success</p>
    </div>
  );
};

export default LearningSession;
