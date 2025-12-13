
import React from 'react';

interface BenefitRowProps {
    icon: any;
    title: string;
    free: string;
    premium: string;
    highlight?: boolean;
}

export const BenefitRow: React.FC<BenefitRowProps> = ({ icon: Icon, title, free, premium, highlight }) => (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <span className="font-bold text-slate-900 dark:text-white text-sm">{title}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
                <div className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5" style={{fontSize: '10px'}}>БЕСПЛАТНО</div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">{free}</div>
            </div>
            <div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5" style={{fontSize: '10px'}}>ПРЕМИУМ</div>
                <div className={`font-bold ${highlight ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-900 dark:text-white'}`}>{premium}</div>
            </div>
        </div>
    </div>
);
