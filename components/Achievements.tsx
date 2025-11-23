import React from 'react';
import { Achievement } from '../types';
import { Trophy } from 'lucide-react';

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const progressPercent = Math.round((unlockedCount / achievements.length) * 100);

  return (
    <div className="space-y-10 animate-fade-in">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold text-slate-900">Achievements</h2>
              <p className="text-slate-500 mt-1">Track your milestones and badges.</p>
          </div>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 min-w-[280px]">
             <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
                <Trophy className="w-6 h-6" />
             </div>
             <div className="flex-1">
                 <div className="flex justify-between text-sm font-bold mb-1">
                    <span className="text-slate-900">Collection</span>
                    <span className="text-slate-500">{unlockedCount}/{achievements.length}</span>
                 </div>
                 <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-yellow-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(250,204,21,0.5)]" 
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                 </div>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {achievements.map((achievement) => (
             <div 
               key={achievement.id}
               className={`relative flex flex-col items-center p-6 rounded-3xl text-center transition-all duration-300 group ${
                 achievement.unlocked 
                   ? 'bg-white border-2 border-transparent shadow-soft hover:shadow-xl hover:-translate-y-1' 
                   : 'bg-slate-50 border border-slate-200 opacity-70 hover:opacity-100'
               }`}
             >
                {/* Unlocked Glow Border */}
                {achievement.unlocked && <div className="absolute inset-0 rounded-3xl border-2 border-yellow-100 pointer-events-none"></div>}

                <div className={`text-5xl mb-4 transition-transform duration-300 ${achievement.unlocked ? 'grayscale-0 scale-110 group-hover:scale-125' : 'grayscale opacity-50'}`}>
                   {achievement.icon}
                </div>
                
                <h3 className={`font-bold text-sm mb-1 ${achievement.unlocked ? 'text-slate-900' : 'text-slate-500'}`}>{achievement.title}</h3>
                <p className="text-[11px] text-slate-400 mb-4 line-clamp-2 leading-relaxed">{achievement.description}</p>
                
                {!achievement.unlocked && (
                   <div className="w-full mt-auto bg-slate-100 rounded-lg p-2">
                      <div className="flex justify-between text-[10px] text-slate-500 font-bold mb-1">
                          <span>Progress</span>
                          <span>{Math.round((achievement.progress / achievement.maxProgress) * 100)}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-400 rounded-full" 
                          style={{ width: `${Math.min(100, (achievement.progress / achievement.maxProgress) * 100)}%`}}
                        ></div>
                      </div>
                   </div>
                )}
                
                {achievement.unlocked && (
                   <div className="mt-auto">
                       <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-600 text-[10px] font-bold uppercase tracking-wider rounded-full">
                           Unlocked
                       </span>
                   </div>
                )}
             </div>
          ))}
       </div>
    </div>
  );
};

export default Achievements;