import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart3, Trophy, User, Book, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const NavItem = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium ${
        isActive
          ? 'bg-brand-50 text-brand-600 shadow-sm'
          : 'text-slate-500 hover:text-slate-900 hover:bg-white/60'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-brand-600 fill-brand-100' : 'stroke-[2px]'}`} />
        <span className="text-sm">{label}</span>
        {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-500"></div>}
      </>
    )}
  </NavLink>
);

const MobileNavItem = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center w-full py-1 transition-colors ${
        isActive
          ? 'text-brand-600'
          : 'text-slate-400'
      }`
    }
  >
    <Icon className="w-6 h-6 mb-1 stroke-[2px]" />
    <span className="text-[10px] font-medium">{label}</span>
  </NavLink>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 h-screen sticky top-0 z-20 shadow-soft">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30">
              V
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">VocabMaster</span>
          </div>
          
          <nav className="flex flex-col gap-2">
            <NavItem to="/" icon={LayoutDashboard} label="Dashboard" />
            <NavItem to="/learn" icon={BookOpen} label="Learning" />
            <NavItem to="/dictionary" icon={Book} label="Dictionary" />
            <NavItem to="/achievements" icon={Trophy} label="Achievements" />
            <NavItem to="/progress" icon={BarChart3} label="Progress" />
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-100">
           <NavLink to="/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200 overflow-hidden">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User" />
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-sm font-bold text-slate-900 truncate">Alex Doe</p>
               <p className="text-xs text-slate-500 truncate">Free Plan</p>
             </div>
             <Settings className="w-4 h-4 text-slate-400" />
           </NavLink>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
           <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              V
            </div>
            <span className="text-lg font-bold text-slate-900">VocabMaster</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto scroll-smooth">
          <div className="max-w-6xl mx-auto p-4 pb-28 md:p-8 lg:p-10">
            {children}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200/60 pb-safe z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center px-2 py-3">
          <MobileNavItem to="/" icon={LayoutDashboard} label="Home" />
          <MobileNavItem to="/learn" icon={BookOpen} label="Learn" />
          <MobileNavItem to="/dictionary" icon={Book} label="Dictionary" />
          <MobileNavItem to="/achievements" icon={Trophy} label="Awards" />
          <MobileNavItem to="/profile" icon={User} label="Profile" />
        </div>
      </nav>
    </div>
  );
};

export default Layout;