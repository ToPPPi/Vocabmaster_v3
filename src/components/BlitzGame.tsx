
import React, { useState, useEffect, useRef } from 'react';
import { Loader2, Zap, Trophy, Clock, X, Flame, Pause, Play, Snowflake, Bomb } from 'lucide-react';
import { Word, ProficiencyLevel, UserProgress } from '../types';
import { getBlitzWords, addCoins, saveBlitzScore, consumeItem } from '../services/storageService';
import { triggerHaptic } from '../utils/uiHelpers';

interface BlitzGameProps {
    level: ProficiencyLevel;
    progress: UserProgress;
    onClose: () => void;
}

const GAME_DURATION = 60; // Seconds

export const BlitzGame: React.FC<BlitzGameProps> = ({ level, progress, onClose }) => {
    const [gameState, setGameState] = useState<'loading' | 'playing' | 'gameover'>('loading');
    const [gameData, setGameData] = useState<{ target: Word; distractors: string[] }[]>([]);
    
    // Game State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentOptions, setCurrentOptions] = useState<{id: string, text: string, isCorrect: boolean}[]>([]);
    
    // Metrics
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(1);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [earnedCoins, setEarnedCoins] = useState(0);
    
    // Feedback State
    const [answerStatus, setAnswerStatus] = useState<'none' | 'correct' | 'wrong'>('none');
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    // Powerups
    const [isFrozen, setIsFrozen] = useState(false);
    const [inventory, setInventory] = useState(progress.inventory);

    // Use Refs for values needed inside intervals/timeouts to avoid stale closures
    const scoreRef = useRef(0);
    const gameStateRef = useRef(gameState);

    useEffect(() => {
        scoreRef.current = score;
    }, [score]);

    useEffect(() => {
        gameStateRef.current = gameState;
    }, [gameState]);

    // Load Data
    useEffect(() => {
        const load = async () => {
            const data = await getBlitzWords(level);
            setGameData(data);
            prepareRound(0, data);
            setGameState('playing');
        };
        load();
    }, [level]);

    // Timer Logic
    useEffect(() => {
        let interval: any;
        if (gameState === 'playing' && !isFrozen) {
            interval = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        handleGameOver();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameState, isFrozen]);

    const prepareRound = (index: number, data: { target: Word; distractors: string[] }[]) => {
        const roundData = data[index % data.length];
        
        // Generate UNIQUE IDs for this specific round index to prevent React key collision/recycling issues
        const options = [
            { id: `correct-${index}`, text: roundData.target.translation, isCorrect: true },
            ...roundData.distractors.map((d, i) => ({ id: `wrong-${index}-${i}`, text: d, isCorrect: false }))
        ];
        
        setCurrentOptions(options.sort(() => 0.5 - Math.random()));
        setAnswerStatus('none');
        setSelectedOptionId(null);
    };

    const handleGameOver = async () => {
        if (gameStateRef.current === 'gameover') return;
        setGameState('gameover');
        triggerHaptic('heavy');
        
        const finalScore = scoreRef.current;
        const coins = Math.floor(finalScore / 10); 
        
        try {
            await addCoins(coins);
            await saveBlitzScore(level, finalScore);
        } catch (e) {
            console.error("Error saving game results", e);
        }
        
        setEarnedCoins(coins);
    };

    const handleAnswer = (option: {id: string, isCorrect: boolean}) => {
        if (answerStatus !== 'none') return; // Prevent double taps

        setSelectedOptionId(option.id);

        if (option.isCorrect) {
            setAnswerStatus('correct');
            triggerHaptic('medium');
            
            const basePoints = 10;
            const comboBonus = combo > 1 ? (combo * 5) : 0;
            setScore(s => s + basePoints + comboBonus);
            
            setStreak(s => s + 1);
            if (streak + 1 >= 3) setCombo(Math.min(5, Math.floor((streak + 1) / 3) + 1));

            // DELAY INCREASED: 150ms -> 800ms to allow user to see the green feedback
            setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
                prepareRound(currentIndex + 1, gameData);
            }, 800);

        } else {
            setAnswerStatus('wrong');
            triggerHaptic('error');
            
            setTimeLeft(t => Math.max(0, t - 5));
            setCombo(1);
            setStreak(0);

            // DELAY INCREASED: 500ms -> 1200ms to allow user to see correct answer
            setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
                prepareRound(currentIndex + 1, gameData);
            }, 1200);
        }
    };

    const usePowerup = async (type: 'timeFreeze' | 'bomb') => {
        if (inventory[type] <= 0) return;
        triggerHaptic('medium');
        
        await consumeItem(type);
        setInventory(prev => ({ ...prev, [type]: prev[type] - 1 }));

        if (type === 'timeFreeze') {
            setIsFrozen(true);
            setTimeout(() => setIsFrozen(false), 5000); 
        } else if (type === 'bomb') {
            setCurrentOptions(prev => {
                const correct = prev.find(o => o.isCorrect);
                const wrongs = prev.filter(o => !o.isCorrect);
                const oneWrong = wrongs[Math.floor(Math.random() * wrongs.length)];
                return [correct!, oneWrong].sort(() => 0.5 - Math.random());
            });
        }
    };

    if (gameState === 'loading') return <div className="h-screen flex items-center justify-center bg-slate-900 text-white"><Loader2 className="w-8 h-8 animate-spin" /></div>;

    if (gameState === 'gameover') {
        return (
            <div className="h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white relative overflow-hidden z-50">
                <div className="absolute inset-0 bg-violet-600/20 blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full">
                    <Trophy className="w-24 h-24 text-yellow-400 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-bounce" />
                    <h2 className="text-4xl font-extrabold mb-2">Время вышло!</h2>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 mb-8">
                        {score}
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-sm mb-8 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300">Заработано монет</span>
                            <span className="font-bold text-yellow-400 flex items-center gap-1">+{earnedCoins} <div className="w-4 h-4 bg-yellow-400 rounded-full"></div></span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="text-slate-300">Уровень</span>
                            <span className="font-bold text-white">{level}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => { triggerHaptic('medium'); onClose(); }}
                        className="w-full max-w-sm py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform cursor-pointer relative z-20"
                    >
                        В меню
                    </button>
                </div>
            </div>
        );
    }

    const currentWord = gameData[currentIndex % gameData.length]?.target;

    return (
        <div className="h-screen bg-slate-900 text-white flex flex-col font-sans relative overflow-hidden">
             {/* Background Pulse based on streak */}
             <div className={`absolute inset-0 transition-all duration-500 pointer-events-none ${streak > 5 ? 'bg-orange-500/10' : 'bg-transparent'}`}></div>
             {isFrozen && <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none z-0"></div>}

            {/* Header */}
            <div className="px-5 pt-4 pb-2 flex justify-between items-center z-20 relative">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md transition-colors ${isFrozen ? 'bg-cyan-500/20 border border-cyan-500/50' : 'bg-white/10'}`}>
                    {isFrozen ? <Snowflake className="w-4 h-4 text-cyan-300" /> : <Clock className={`w-4 h-4 ${timeLeft < 10 ? 'text-red-400 animate-pulse' : 'text-slate-300'}`} />}
                    <span className="font-bold font-mono text-lg">{timeLeft}</span>
                </div>

                <div className={`flex flex-col items-center transition-transform ${streak > 0 ? 'scale-110' : 'scale-100'}`}>
                    <div className="flex items-center gap-1">
                        {streak > 4 && <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />}
                        <span className={`text-2xl font-black ${streak > 4 ? 'text-orange-400' : 'text-white'}`}>{score}</span>
                    </div>
                    {combo > 1 && <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Combo x{combo}</span>}
                </div>

                <button onClick={onClose} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Main Game Area */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
                <div className="w-full text-center mb-10 animate-in zoom-in duration-300">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 block opacity-70">Как переводится?</span>
                    <h1 className="text-5xl font-black text-white drop-shadow-2xl tracking-tight leading-tight break-words">
                        {currentWord?.term}
                    </h1>
                    <span className="inline-block mt-3 px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-slate-400 border border-white/5 uppercase">
                        {currentWord?.partOfSpeech}
                    </span>
                </div>

                <div className="w-full grid grid-cols-2 gap-3">
                    {currentOptions.map((opt) => {
                        let btnClass = "bg-white/10 border-white/10 text-white hover:bg-white/20";
                        if (answerStatus !== 'none') {
                            if (opt.id === selectedOptionId) {
                                if (opt.isCorrect) btnClass = "bg-emerald-500 border-emerald-400 text-white scale-105 shadow-[0_0_20px_rgba(16,185,129,0.5)]";
                                else btnClass = "bg-rose-500 border-rose-400 text-white shake";
                            } else if (opt.isCorrect && answerStatus === 'wrong') {
                                btnClass = "bg-emerald-500/50 border-emerald-500/50 text-white/70";
                            } else {
                                btnClass = "opacity-30";
                            }
                        }

                        return (
                            <button
                                key={opt.id}
                                onClick={() => handleAnswer(opt)}
                                disabled={answerStatus !== 'none'}
                                className={`h-20 rounded-2xl border-2 font-bold text-lg shadow-lg transition-all active:scale-95 flex items-center justify-center leading-none p-2 ${btnClass}`}
                            >
                                {opt.text}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Powerups Bar */}
             <div className="px-6 pb-8 pt-4 z-20 relative">
                <div className="flex justify-center gap-6">
                    <button 
                        onClick={() => usePowerup('timeFreeze')} 
                        disabled={inventory.timeFreeze <= 0 || isFrozen}
                        className={`flex flex-col items-center gap-1 transition-all ${inventory.timeFreeze > 0 ? 'opacity-100 active:scale-90' : 'opacity-40 grayscale'}`}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            <Snowflake className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-cyan-100/70">Freeze ({inventory.timeFreeze})</span>
                    </button>

                    <button 
                        onClick={() => usePowerup('bomb')} 
                        disabled={inventory.bomb <= 0 || currentOptions.length < 3}
                        className={`flex flex-col items-center gap-1 transition-all ${inventory.bomb > 0 ? 'opacity-100 active:scale-90' : 'opacity-40 grayscale'}`}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-600/20 border border-rose-500/50 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                            <Bomb className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-rose-100/70">Bomb ({inventory.bomb})</span>
                    </button>
                </div>
            </div>

            <style>{`
                .shake {
                    animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
                }
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
            `}</style>
        </div>
    );
};
