import React, { useEffect, useState } from 'react';
import { UserState, UserLevel } from '../types';
import { fetchUserActivity } from '../services/dataService';
import { BarChart3, TrendingUp, Flame, Calendar, Trophy, Zap, Clock } from 'lucide-react';

interface ProgressPageProps {
  user: UserState;
}

interface ActivityDay {
  date: string;
  count: number;
}

const ProgressPage: React.FC<ProgressPageProps> = ({ user }) => {
  const [activityData, setActivityData] = useState<ActivityDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivity = async () => {
      try {
        const data = await fetchUserActivity();
        setActivityData(data);
      } catch (e) {
        console.error("Failed to load activity", e);
      } finally {
        setLoading(false);
      }
    };
    loadActivity();
  }, []);

  // --- Heatmap Generation Logic ---
  // Generate last 91 days (13 weeks) grid
  const today = new Date();
  const days = [];
  const heatmapSize = 91; 

  for (let i = heatmapSize - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    // Find activity for this date
    const activity = activityData.find(a => a.date === dateStr);
    const count = activity ? activity.count : 0;
    
    // Determine color intensity
    let colorClass = "bg-slate-100";
    if (count > 0) colorClass = "bg-green-200";
    if (count >= 5) colorClass = "bg-green-300";
    if (count >= 10) colorClass = "bg-green-400";
    if (count >= 20) colorClass = "bg-green-500";

    days.push({ date: dateStr, count, colorClass, dayName: d.toLocaleDateString('en-US', { weekday: 'short' }) });
  }

  // Calculate percentages
  const totalWords = 10000;
  const totalProgress = (user.wordsLearned / totalWords) * 100;

  const levelColors: Record<string, string> = {
    'A1': 'bg-teal-400',
    'A2': 'bg-green-500',
    'B1': 'bg-yellow-400',
    'B2': 'bg-orange-400',
    'C1': 'bg-red-400',
    'C2': 'bg-rose-600',
  };

  return (
    <div className="space-y-10 animate-fade-in pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Your Journey</h2>
          <p className="text-slate-500 mt-1">Track every step towards fluency.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
           <Trophy className="w-5 h-5 text-yellow-500" />
           <span className="font-bold text-slate-700">Level: <span className="text-brand-600">Bronze</span></span>
        </div>
      </div>

      {/* Top Section: Main Circular Progress & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Circle */}
        <div className="lg:col-span-1 bg-white rounded-3xl p-8 shadow-soft border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingUp className="w-32 h-32 text-brand-500" />
           </div>
           
           <div className="relative w-48 h-48 mb-6">
              {/* Circular Progress SVG */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96" cy="96" r="88"
                  className="text-slate-100"
                  strokeWidth="12"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="96" cy="96" r="88"
                  className="text-brand-500 transition-all duration-1000 ease-out"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 88}
                  strokeDashoffset={2 * Math.PI * 88 * (1 - totalProgress / 100)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-4xl font-extrabold text-slate-900">{totalProgress.toFixed(1)}%</span>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Mastered</span>
              </div>
           </div>
           
           <div className="text-center">
              <p className="text-slate-500 font-medium">
                <span className="text-slate-900 font-bold">{user.wordsLearned}</span> / {totalWords} words
              </p>
           </div>
        </div>

        {/* Level Breakdown */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-soft border border-slate-100 flex flex-col justify-center">
           <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
             <BarChart3 className="w-5 h-5 text-slate-400" /> Proficiency Levels
           </h3>
           
           <div className="space-y-5">
             {Object.entries(user.levelProgress).map(([lvl, count]) => {
                const total = 1000; // Mock total per level
                const percent = (count / total) * 100;
                const isLocked = !user.isPremium && ['B2','C1','C2'].includes(lvl);

                return (
                  <div key={lvl}>
                    <div className="flex justify-between text-sm mb-1.5">
                       <span className={`font-bold ${isLocked ? 'text-slate-400' : 'text-slate-700'}`}>
                         Level {lvl} {isLocked && '🔒'}
                       </span>
                       <span className="text-slate-500 font-medium">{count} / {total}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                       <div 
                         className={`h-full rounded-full transition-all duration-700 ${isLocked ? 'bg-slate-300' : levelColors[lvl] || 'bg-brand-500'}`}
                         style={{ width: `${percent}%` }}
                       ></div>
                    </div>
                  </div>
                );
             })}
           </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-2 text-orange-500">
               <Flame className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-slate-900">{user.streak}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Current Streak</span>
         </div>
         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-2 text-indigo-500">
               <Zap className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-slate-900">{user.xp}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Total XP</span>
         </div>
         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-blue-500">
               <Clock className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-slate-900">{user.longestStreak}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Longest Streak</span>
         </div>
         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-2 text-emerald-500">
               <Calendar className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-slate-900">{user.dailyProgress}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Learned Today</span>
         </div>
      </div>

      {/* Activity Heatmap */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-slate-100">
         <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-slate-400" />
            <h3 className="font-bold text-slate-900">Learning Activity</h3>
         </div>
         
         {loading ? (
             <div className="h-32 flex items-center justify-center text-slate-400">Loading activity...</div>
         ) : (
            <div className="overflow-x-auto pb-2">
                <div className="min-w-[700px]">
                    <div className="flex flex-wrap gap-1.5 justify-start content-start" style={{ maxHeight: '140px', flexDirection: 'column' }}>
                       {days.map((day, idx) => (
                          <div 
                             key={day.date} 
                             className={`w-3.5 h-3.5 rounded-sm ${day.colorClass} border border-white/50 hover:border-slate-300 transition-colors`}
                             title={`${day.date}: ${day.count} words`}
                          ></div>
                       ))}
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-slate-400 justify-end">
                   <span>Less</span>
                   <div className="w-3 h-3 rounded-sm bg-slate-100"></div>
                   <div className="w-3 h-3 rounded-sm bg-green-200"></div>
                   <div className="w-3 h-3 rounded-sm bg-green-300"></div>
                   <div className="w-3 h-3 rounded-sm bg-green-400"></div>
                   <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                   <span>More</span>
                </div>
            </div>
         )}
      </div>
    </div>
  );
};

export default ProgressPage;