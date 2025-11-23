
import React, { useState } from 'react';
import PlacementTest from './PlacementTest';
import { ArrowRight, CheckCircle2, Zap, Trophy } from 'lucide-react';

interface OnboardingProps {
  onFinish: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  const [step, setStep] = useState<'SLIDES' | 'TEST'>('SLIDES');
  const [slide, setSlide] = useState(0);

  const SLIDES = [
    {
      title: "Master 10,000 Words",
      desc: "From beginner to native-like fluency. Just 5 words a day builds a massive vocabulary over time.",
      icon: <CheckCircle2 className="w-16 h-16 text-brand-500" />
    },
    {
      title: "Earn Premium Access",
      desc: "Consistency pays off. Maintain a 7-day streak to unlock Premium features for free.",
      icon: <Zap className="w-16 h-16 text-yellow-500" />
    },
    {
      title: "Track Your Growth",
      desc: "Watch your progress bars fill up as you conquer levels A1 through C2.",
      icon: <Trophy className="w-16 h-16 text-orange-500" />
    }
  ];

  const handleNext = () => {
    if (slide < SLIDES.length - 1) {
      setSlide(slide + 1);
    } else {
      setStep('TEST');
    }
  };

  if (step === 'TEST') {
      return (
          <div className="min-h-screen bg-slate-50 flex items-center justify-center">
              <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px]">
                 <PlacementTest onComplete={onFinish} />
              </div>
          </div>
      );
  }

  const currentSlide = SLIDES[slide];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-bl-full opacity-50 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-50 rounded-tr-full opacity-50 -ml-16 -mb-16"></div>

      <div className="relative z-10 max-w-md w-full text-center space-y-8 animate-fade-in">
         <div className="w-32 h-32 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-soft">
            {currentSlide.icon}
         </div>

         <div>
             <h1 className="text-3xl font-extrabold text-slate-900 mb-3">{currentSlide.title}</h1>
             <p className="text-slate-500 text-lg leading-relaxed">{currentSlide.desc}</p>
         </div>

         <div className="flex gap-2 justify-center py-4">
            {SLIDES.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === slide ? 'bg-brand-600 w-8' : 'bg-slate-200'}`}
                />
            ))}
         </div>

         <button 
           onClick={handleNext}
           className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xl"
         >
           {slide === SLIDES.length - 1 ? "Let's Start" : "Next"} <ArrowRight className="w-5 h-5" />
         </button>
      </div>
    </div>
  );
};

export default Onboarding;
