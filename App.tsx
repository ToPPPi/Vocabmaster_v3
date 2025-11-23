
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import LearningSession from './components/LearningSession';
import Dictionary from './components/Dictionary';
import Achievements from './components/Achievements';
import ProgressPage from './components/ProgressPage';
import AuthPage from './components/AuthPage';
import ProfilePage from './components/ProfilePage';
import Onboarding from './components/Onboarding';
import { 
  fetchUserProfile,
  getStoredAchievements, 
  saveAchievements 
} from './services/dataService';
import { logoutUser } from './services/auth';
import { UserState, Achievement, WordStatus } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<UserState | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>(getStoredAchievements());
  const [loading, setLoading] = useState(true);

  // --- Initialization ---
  const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userProfile = await fetchUserProfile();
          setUser(userProfile);
        } catch (error) {
          console.error("Failed to fetch profile", error);
          localStorage.removeItem('token'); // Invalid token
        }
      }
      setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  // --- Effects for persistence ---
  useEffect(() => { saveAchievements(achievements); }, [achievements]);

  // --- Core Logic ---

  const handleUpdateWordStatus = (wordId: string, status: WordStatus) => {
    // Check achievements logic locally for instant feedback
    if (status === WordStatus.KNOWN) {
       checkAchievements('learning', 1);
       checkAchievements('dictionary', 1); 
    }
  };

  const incrementDailyProgress = () => {
    if (!user) return;
    setUser(prev => {
        if (!prev) return null;
        return { 
            ...prev, 
            dailyProgress: prev.dailyProgress + 1,
            wordsLearned: prev.wordsLearned + 1
        };
    });
  };

  const checkAchievements = (category: string, amount: number) => {
     setAchievements(prev => prev.map(a => {
        if (a.category === category && !a.unlocked) {
            const newProgress = a.progress + amount;
            if (newProgress >= a.maxProgress) {
                return { ...a, progress: newProgress, unlocked: true, unlockedAt: new Date().toISOString() };
            }
            return { ...a, progress: newProgress };
        }
        return a;
     }));
  };

  const handleLogout = () => {
      logoutUser();
      setUser(null);
  };

  const handleOnboardingFinish = () => {
      loadUser(); // Reload to update state (e.g. initial words)
  };

  if (loading) return null;

  // Determine if user needs onboarding
  // Logic: If user exists, but has 0 words learned, we assume they are new.
  const needsOnboarding = user && user.wordsLearned === 0;

  return (
    <Router>
      <Routes>
        <Route 
          path="/auth" 
          element={
             !user ? <AuthPage onLogin={(u) => setUser(u)} /> : <Navigate to="/" replace />
          } 
        />

        {/* Onboarding Route */}
         <Route 
          path="/onboarding" 
          element={
             user && needsOnboarding ? <Onboarding onFinish={handleOnboardingFinish} /> : <Navigate to="/" replace />
          } 
        />
        
        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            user ? (
               needsOnboarding ? <Navigate to="/onboarding" replace /> : (
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard user={user} />} />
                  <Route 
                    path="/learn" 
                    element={
                      <LearningSession 
                        user={user} 
                        updateWordStatus={handleUpdateWordStatus}
                        incrementProgress={incrementDailyProgress}
                      />
                    } 
                  />
                  <Route path="/dictionary" element={<Dictionary />} />
                  <Route path="/achievements" element={<Achievements achievements={achievements} />} />
                  <Route path="/progress" element={<ProgressPage user={user} />} />
                  <Route path="/profile" element={
                     <ProfilePage 
                        user={user} 
                        onUpdate={loadUser} 
                        onLogout={handleLogout} 
                     />
                  } />
                </Routes>
              </Layout>
            )) : (
              <Navigate to="/auth" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
