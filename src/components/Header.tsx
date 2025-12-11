import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { triggerHaptic } from '../utils/uiHelpers';

interface HeaderProps {
    title: string;
    subtitle?: string;
    onBack?: () => void;
    rightContent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, onBack, rightContent }) => (
    <div className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-md px-5 py-3 flex items-center justify-between border-b border-slate-100/50 transition-all">
        <div className="flex items-center gap-3">
            {onBack && (
                <button 
                    onClick={() => { triggerHaptic('light'); onBack(); }} 
                    className="w-9 h-9 -ml-2 rounded-full hover:bg-slate-200/50 flex items-center justify-center text-slate-600 transition-colors active:scale-95"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}
            <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">{title}</h1>
                {subtitle && <p className="text-xs text-slate-500 font-medium mt-0.5">{subtitle}</p>}
            </div>
        </div>
        {rightContent}
    </div>
);