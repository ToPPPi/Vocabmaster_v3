import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserState } from '../types';
import { Flame, BookOpen, BarChart3, Book, Layers, Crown, ArrowRight, Zap } from 'lucide-react';

interface DashboardProps {
  user: UserState;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Welcome back, {user.name}! <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>
            <p className="text-slate-500 text-lg mt-1">Keep your streak alive and master English.</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Streak Badge */}
            <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-5 py-2.5 rounded-2xl font-bold border border-orange-100 shadow-sm">
              <Flame className={`w-5 h-5 ${user.streak > 0 ? 'fill-orange-500 text-orange-600' : 'text-slate-400'} animate-pulse-slow`} />
              <span>{user.streak} days</span>
            </div>
            
            {/* XP Badge */}
            <div className="hidden sm:flex items-center gap-2 bg-indigo-50 text-indigo-600 px-5 py-2.5 rounded-2xl font-bold border border-indigo-100 shadow-sm">
              <Zap className="w-5 h-5 fill-indigo-500 text-indigo-600" />
              <span>{user.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Bonus Premium Progress */}
        {!user.isPremium && (
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft flex flex-col sm:flex-row items-center gap-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shrink-0 shadow-glow">
              <Crown className="w-6 h-6 fill-white" />
            </div>
            <div className="flex-1 w-full">
               <div className="flex justify-between items-center mb-2">
                 <h3 className="font-bold text-slate-800">Earn 3 days of Premium</h3>
                 <span className="text-sm font-bold text-brand-600">{user.daysToBonus}/7 days active</span>
               </div>
               <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full transition-all duration-1000 ease-out"
                   style={{ width: `${(user.daysToBonus / 7) * 100}%` }}
                 ></div>
               </div>
               <p className="text-xs text-slate-400 mt-2">Maintain your activity streak to unlock full access.</p>
            </div>
          </div>
        )}
      </div>

      {/* Grid Menu: 2x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: Start Learning */}
        <button
          onClick={() => navigate('/learn')}
          className="group relative flex flex-col items-start p-6 md:p-8 bg-white rounded-3xl shadow-soft border border-slate-100 hover:border-brand-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          
          <div className="relative z-10 p-3 bg-brand-100 text-brand-600 rounded-2xl mb-4 group-hover:rotate-6 transition-transform">
            <BookOpen className="w-8 h-8" />
          </div>
          
          <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-1">Start Learning</h3>
          <p className="relative z-10 text-slate-500 text-sm mb-6">Daily goal: {user.dailyProgress}/{user.dailyGoal} words</p>
          
          <div className="relative z-10 mt-auto flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-brand-500/20 shadow-lg group-hover:bg-brand-700 transition-colors">
            Start Session <ArrowRight className="w-4 h-4" />
          </div>
        </button>

        {/* Card 2: Progress */}
        <button
          onClick={() => navigate('/progress')}
          className="group relative flex flex-col items-start p-6 md:p-8 bg-white rounded-3xl shadow-soft border border-slate-100 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

          <div className="relative z-10 p-3 bg-green-100 text-green-600 rounded-2xl mb-4 group-hover:rotate-6 transition-transform">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-1">My Progress</h3>
          <p className="relative z-10 text-slate-500 text-sm mb-6">Track your journey to 10k words.</p>
          
          <div className="relative z-10 mt-auto w-full">
            <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
              <span>{user.wordsLearned} learned</span>
              <span>1.5%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${(user.wordsLearned / 10000) * 100}%` }}
              ></div>
            </div>
          </div>
        </button>

        {/* Card 3: Dictionary */}
        <button
          onClick={() => navigate('/dictionary')}
          className="group relative flex flex-col items-start p-6 md:p-8 bg-white rounded-3xl shadow-soft border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

          <div className="relative z-10 p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4 group-hover:rotate-6 transition-transform">
            <Book className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-1">My Dictionary</h3>
          <p className="relative z-10 text-slate-500 text-sm mb-4">Review words you've mastered.</p>
          <div className="relative z-10 mt-auto text-sm font-bold text-blue-600 group-hover:underline decoration-2 underline-offset-4">
             Open Library &rarr;
          </div>
        </button>

        {/* Card 4: Word Blocks */}
        <button
          onClick={() => navigate('/learn')}
          className="group relative flex flex-col items-start p-6 md:p-8 bg-white rounded-3xl shadow-soft border border-slate-100 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

          <div className="relative z-10 p-3 bg-indigo-100 text-indigo-600 rounded-2xl mb-4 group-hover:rotate-6 transition-transform">
            <Layers className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-1">Word Levels</h3>
          <p className="relative z-10 text-slate-500 text-sm mb-4">Browse A1–C2 collections.</p>
          <div className="relative z-10 mt-auto flex flex-wrap gap-1.5">
             {['A1','A2','B1','B2','C1','C2'].map((lvl) => (
               <span key={lvl} className={`text-[10px] font-bold px-2 py-1 rounded-lg border ${['A1','A2','B1'].includes(lvl) || user.isPremium ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-50 border-transparent text-slate-300'}`}>
                 {lvl}
               </span>
             ))}
          </div>
        </button>
      </div>

      {/* Premium Banner (Full Width) */}
      {!user.isPremium && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 p-8 md:p-10 text-white shadow-premium hover:scale-[1.01] transition-transform cursor-pointer group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                 <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg">
                   <Crown className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                 </div>
                 <span className="font-bold text-yellow-200 tracking-wider text-xs uppercase">Premium Access</span>
              </div>
              <h2 className="text-3xl font-extrabold mb-3 leading-tight">Accelerate your learning speed! ⚡</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-white/90 text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Learn 20 words/day instead of 5</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Access Advanced C1-C2 levels</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Audio pronunciation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Unlimited Reviews</li>
              </ul>
            </div>
            <button className="bg-white text-fuchsia-600 font-bold py-4 px-8 rounded-2xl shadow-xl hover:bg-fuchsia-50 transition-colors whitespace-nowrap w-full md:w-auto text-center transform group-hover:translate-x-1 transition-transform">
              Try Premium - $2.99
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;