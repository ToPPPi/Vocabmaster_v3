
import React, { useState } from 'react';
import { UserLevel } from '../types';
import { saveInitialLevel } from '../services/dataService';
import { ArrowRight, Check, X, Loader2 } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  mappedLevel: UserLevel;
}

const QUESTIONS: Question[] = [
  { id: 1, text: "Choose the correct translation: 'Apple'", options: ['Собака', 'Яблоко', 'Дом', 'Машина'], correctIndex: 1, mappedLevel: UserLevel.A1 },
  { id: 2, text: "Complete: 'She ___ to the store yesterday.'", options: ['go', 'gone', 'went', 'going'], correctIndex: 2, mappedLevel: UserLevel.A2 },
  { id: 3, text: "Select the synonym for 'Beautiful'", options: ['Ugly', 'Pretty', 'Hard', 'Fast'], correctIndex: 1, mappedLevel: UserLevel.A2 },
  { id: 4, text: "What does 'Environment' mean?", options: ['Окружение', 'Среда обитания', 'Окружающая среда', 'Все вышеперечисленное'], correctIndex: 2, mappedLevel: UserLevel.B1 },
  { id: 5, text: "Choose the correct form: 'If I ___ you, I would accept.'", options: ['was', 'am', 'were', 'be'], correctIndex: 2, mappedLevel: UserLevel.B2 },
  { id: 6, text: "Meaning of 'Inevitably'", options: ['Never', 'Sometimes', 'Unavoidably', 'Rarely'], correctIndex: 2, mappedLevel: UserLevel.B2 },
  { id: 7, text: "Which word fits? 'The evidence was ___.'", options: ['ambiguous', 'hungry', 'green', 'slow'], correctIndex: 0, mappedLevel: UserLevel.C1 },
  { id: 8, text: "Definition of 'Serendipity'", options: ['Bad luck', 'Happy accident', 'Strategic planning', 'Sorrow'], correctIndex: 1, mappedLevel: UserLevel.C2 },
];

interface PlacementTestProps {
  onComplete: () => void;
}

const PlacementTest: React.FC<PlacementTestProps> = ({ onComplete }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === QUESTIONS[currentQ].correctIndex) {
      setScore(score + 1);
    }
    
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateLevelAndSave();
    }
  };

  const calculateLevelAndSave = async () => {
    setIsFinished(true);
    setLoading(true);

    // Simple Logic: 
    // 0-2: A1
    // 3-4: A2
    // 5: B1
    // 6: B2
    // 7: C1
    // 8: C2
    let level = 'A1';
    if (score >= 3) level = 'A2';
    if (score >= 5) level = 'B1';
    if (score >= 6) level = 'B2';
    if (score >= 7) level = 'C1';
    if (score === 8) level = 'C2';

    try {
        await saveInitialLevel(level);
        setTimeout(() => {
            onComplete();
        }, 1500); // Small delay to show result
    } catch (e) {
        console.error(e);
        onComplete(); // Fallback
    }
  };

  if (isFinished) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in p-8">
              <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6">
                  {loading ? <Loader2 className="w-10 h-10 animate-spin" /> : <Check className="w-10 h-10" />}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Analyzing your skills...</h2>
              <p className="text-slate-500">We are personalizing your vocabulary journey.</p>
          </div>
      );
  }

  const question = QUESTIONS[currentQ];

  return (
    <div className="max-w-xl mx-auto p-6 md:p-12 animate-fade-in">
        <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                <span>Placement Test</span>
                <span>{currentQ + 1} / {QUESTIONS.length}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 transition-all duration-300" style={{ width: `${((currentQ) / QUESTIONS.length) * 100}%` }}></div>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-snug">{question.text}</h2>

        <div className="space-y-3">
            {question.options.map((opt, idx) => (
                <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="w-full p-4 rounded-xl border-2 border-slate-100 text-left hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700"
                >
                    {opt}
                </button>
            ))}
        </div>
    </div>
  );
};

export default PlacementTest;
