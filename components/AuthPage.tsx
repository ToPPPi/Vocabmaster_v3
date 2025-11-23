import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/auth';
import { User, Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { UserState, UserLevel } from '../types';

interface AuthPageProps {
  onLogin: (user: UserState) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await loginUser(formData.email, formData.password);
      } else {
        response = await registerUser(formData.email, formData.password, formData.name);
      }

      // Store Token
      localStorage.setItem('token', response.token);

      // Construct Initial User State for Frontend
      // In a full app, we would fetch this profile data including stats from the backend
      // For now, we mix the auth data with default stats
      const userState: UserState = {
        name: response.user.name,
        streak: 0,
        longestStreak: 0,
        isPremium: false,
        wordsLearned: 0,
        lastSessionDate: null,
        dailyGoal: 5,
        dailyProgress: 0,
        daysToBonus: 0,
        levelProgress: {
          [UserLevel.A1]: 0,
          [UserLevel.A2]: 0,
          [UserLevel.B1]: 0,
          [UserLevel.B2]: 0,
          [UserLevel.C1]: 0,
          [UserLevel.C2]: 0,
        },
        xp: 0
      };

      onLogin(userState);
      navigate('/');
      
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-brand-600 to-brand-800 rounded-b-[3rem] z-0 shadow-lg"></div>

      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="p-8 pb-6 text-center">
           <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 shadow-lg shadow-brand-500/30">
              V
           </div>
           <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
             {isLogin ? 'Welcome Back!' : 'Create Account'}
           </h1>
           <p className="text-slate-500 text-sm">
             {isLogin ? 'Enter your details to continue learning.' : 'Start your journey to 10,000 words today.'}
           </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 text-xs font-bold rounded-xl animate-shake">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                  placeholder="Alex Doe"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                placeholder="alex@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                placeholder="••••••••"
                minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-all hover:scale-[1.02] shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
              <>
                {isLogin ? 'Sign In' : 'Get Started'} <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <div className="p-6 text-center">
          <p className="text-slate-500 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({ name: '', email: '', password: '' });
              }}
              className="text-brand-600 font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-6 text-slate-400 text-xs font-medium">
        &copy; 2024 VocabMaster Inc.
      </div>
    </div>
  );
};

export default AuthPage;