import React, { useState } from 'react';
import { UserState } from '../types';
import { updateUserProfile } from '../services/dataService';
import { logoutUser } from '../services/auth';
import { User, Mail, Save, Loader2, Crown, Bell, Volume2, Moon, LogOut, Trash2, ShieldCheck, AlertCircle } from 'lucide-react';

interface ProfilePageProps {
  user: UserState;
  onUpdate: () => void;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUpdate, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email || ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const [settings, setSettings] = useState({
    notifications: true,
    sound: true,
    darkMode: false
  });

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);
    try {
      await updateUserProfile(formData);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditing(false);
      onUpdate(); // Trigger re-fetch in App
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to update' });
    } finally {
      setLoading(false);
    }
  };

  const getLevelBadge = () => {
    if (user.wordsLearned >= 5000) return { name: 'Legend', color: 'bg-indigo-600' };
    if (user.wordsLearned >= 2500) return { name: 'Master', color: 'bg-fuchsia-600' };
    if (user.wordsLearned >= 1000) return { name: 'Gold', color: 'bg-yellow-500' };
    if (user.wordsLearned >= 500) return { name: 'Silver', color: 'bg-slate-400' };
    return { name: 'Bronze', color: 'bg-orange-400' };
  };

  const badge = getLevelBadge();

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-10">
      
      {/* Header Profile Card */}
      <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-bl-full -mr-16 -mt-16 opacity-50 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-slate-100 border-4 border-white shadow-lg overflow-hidden mb-4">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="Avatar" className="w-full h-full" />
            </div>
            <span className={`px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-sm ${badge.color}`}>
                {badge.name} League
            </span>
        </div>

        <div className="flex-1 w-full text-center md:text-left space-y-4">
           <div>
              <h2 className="text-3xl font-extrabold text-slate-900">{user.name}</h2>
              <p className="text-slate-500 text-sm">Member since {user.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : '2024'}</p>
           </div>
           
           <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
              <div className="text-center md:text-left">
                 <div className="text-2xl font-bold text-slate-900">{user.streak}</div>
                 <div className="text-xs text-slate-400 uppercase font-bold">Day Streak</div>
              </div>
              <div className="text-center md:text-left">
                 <div className="text-2xl font-bold text-slate-900">{user.wordsLearned}</div>
                 <div className="text-xs text-slate-400 uppercase font-bold">Words</div>
              </div>
              <div className="text-center md:text-left">
                 <div className="text-2xl font-bold text-slate-900">{user.xp}</div>
                 <div className="text-xs text-slate-400 uppercase font-bold">XP Earned</div>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Edit Details Section */}
         <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-slate-100">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-xl font-bold text-slate-900">Personal Info</h3>
               <button 
                 onClick={() => setIsEditing(!isEditing)}
                 className="text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline"
               >
                 {isEditing ? 'Cancel' : 'Edit'}
               </button>
            </div>

            {message && (
               <div className={`mb-4 p-3 rounded-xl text-sm font-bold flex items-center gap-2 ${message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                   {message.type === 'success' ? <ShieldCheck className="w-4 h-4"/> : <AlertCircle className="w-4 h-4"/>}
                   {message.text}
               </div>
            )}

            <div className="space-y-4">
               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
                  <div className="relative mt-1">
                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                     <input 
                       type="text" 
                       disabled={!isEditing}
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                       className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 disabled:opacity-70 disabled:bg-slate-50/50"
                     />
                  </div>
               </div>
               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                  <div className="relative mt-1">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                     <input 
                       type="email" 
                       disabled={!isEditing}
                       value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})}
                       className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 disabled:opacity-70 disabled:bg-slate-50/50"
                     />
                  </div>
               </div>
               
               {isEditing && (
                 <button 
                   onClick={handleSave}
                   disabled={loading}
                   className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 mt-2"
                 >
                   {loading ? <Loader2 className="w-4 h-4 animate-spin"/> : <><Save className="w-4 h-4"/> Save Changes</>}
                 </button>
               )}
            </div>
         </div>

         {/* Subscription & Settings Column */}
         <div className="space-y-8">
            {/* Subscription Card */}
            <div className={`rounded-3xl p-6 md:p-8 relative overflow-hidden ${user.isPremium ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white' : 'bg-white border border-slate-100 shadow-soft'}`}>
                <div className="flex items-start justify-between relative z-10">
                   <div>
                      <div className="flex items-center gap-2 mb-2">
                         <Crown className={`w-5 h-5 ${user.isPremium ? 'text-yellow-300 fill-yellow-300' : 'text-slate-400'}`} />
                         <span className={`text-sm font-bold uppercase tracking-wider ${user.isPremium ? 'text-white/80' : 'text-slate-500'}`}>Current Plan</span>
                      </div>
                      <h3 className={`text-2xl font-extrabold ${user.isPremium ? 'text-white' : 'text-slate-900'}`}>
                         {user.isPremium ? 'Premium Plan' : 'Free Account'}
                      </h3>
                   </div>
                </div>

                {user.isPremium ? (
                   <div className="mt-6 relative z-10">
                      <p className="text-white/80 text-sm mb-4">Your subscription is active. Enjoy unlimited access to all levels.</p>
                      <button className="w-full bg-white/20 backdrop-blur-md text-white font-bold py-3 rounded-xl hover:bg-white/30 transition-colors border border-white/40">
                         Manage Subscription
                      </button>
                   </div>
                ) : (
                   <div className="mt-6 relative z-10">
                      <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                         <span>Bonus Progress</span>
                         <span className="text-brand-600">{user.daysToBonus}/7 days</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
                          <div className="h-full bg-brand-500 rounded-full" style={{ width: `${(user.daysToBonus / 7) * 100}%`}}></div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:scale-[1.02] transition-all">
                         Upgrade to Premium
                      </button>
                   </div>
                )}
            </div>

            {/* Settings */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Settings</h3>
               <div className="space-y-5">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                           <Bell className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900">Notifications</div>
                           <div className="text-xs text-slate-400">Daily reminders</div>
                        </div>
                     </div>
                     <button 
                       onClick={() => setSettings({...settings, notifications: !settings.notifications})}
                       className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${settings.notifications ? 'bg-brand-500' : 'bg-slate-200'}`}
                     >
                        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${settings.notifications ? 'translate-x-6' : 'translate-x-0'}`}></div>
                     </button>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                           <Volume2 className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900">Sound Effects</div>
                           <div className="text-xs text-slate-400">Audio feedback</div>
                        </div>
                     </div>
                     <button 
                       onClick={() => setSettings({...settings, sound: !settings.sound})}
                       className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${settings.sound ? 'bg-brand-500' : 'bg-slate-200'}`}
                     >
                        <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${settings.sound ? 'translate-x-6' : 'translate-x-0'}`}></div>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Danger Zone */}
      <div className="border-t border-slate-200 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
         <button 
           onClick={onLogout}
           className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors px-4 py-2"
         >
           <LogOut className="w-5 h-5" /> Sign Out
         </button>

         <button className="flex items-center gap-2 text-red-500 font-bold hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-xl transition-colors text-sm">
           <Trash2 className="w-4 h-4" /> Delete Account
         </button>
      </div>

    </div>
  );
};

export default ProfilePage;