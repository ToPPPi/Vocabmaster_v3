
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export type RewardType = 'premium_month' | 'premium_year' | 'shop_buy' | 'level_up';

interface RewardConfig {
    gif: string;
    sound: string;
    title: string;
    subtitle: string;
}

// ASSETS CONFIGURATION
const REWARDS: Record<RewardType, RewardConfig> = {
    'premium_month': {
        gif: 'https://media.giphy.com/media/l0Ex6kAKAoFRsFh6M/giphy.gif', // Leonardo DiCaprio clapping or similar success
        sound: 'https://cdn.freesound.org/previews/345/345299_6352632-lq.mp3', // Tada sound
        title: 'Добро пожаловать в клуб!',
        subtitle: 'Premium активирован на месяц'
    },
    'premium_year': {
        gif: 'https://media.giphy.com/media/gTURHJs4e2Ies/giphy.gif', // Great Gatsby Toast
        sound: 'https://cdn.freesound.org/previews/337/337000_3385293-lq.mp3', // Cheering
        title: 'ЛЕГЕНДАРНЫЙ СТАТУС',
        subtitle: 'Целый год без ограничений!'
    },
    'shop_buy': {
        gif: 'https://media.giphy.com/media/UPmV92Wd9X2O4/giphy.gif', // Cat with money or simple cha-ching
        sound: 'https://cdn.freesound.org/previews/201/201159_2476332-lq.mp3', // Cash register
        title: 'Успешная покупка!',
        subtitle: 'Предмет добавлен в инвентарь'
    },
    'level_up': {
        gif: 'https://media.giphy.com/media/zhS4PEVVuFnbG718kV/giphy.gif', // Success kid or similar
        sound: 'https://cdn.freesound.org/previews/608/608643_6692269-lq.mp3', // Level up chimes
        title: 'Новый уровень!',
        subtitle: 'Вы становитесь умнее'
    }
};

interface RewardOverlayProps {
    type: RewardType | null;
    onClose: () => void;
}

export const RewardOverlay: React.FC<RewardOverlayProps> = ({ type, onClose }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (type && REWARDS[type]) {
            // Play Sound
            const audio = new Audio(REWARDS[type].sound);
            audio.volume = 0.6;
            audio.play().catch(e => console.warn("Autoplay blocked", e));
            audioRef.current = audio;

            // Auto close after 4 seconds
            const timer = setTimeout(() => {
                onClose();
            }, 4500);

            return () => clearTimeout(timer);
        }
    }, [type, onClose]);

    if (!type) return null;

    const config = REWARDS[type];

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in zoom-in duration-300 p-6"
            onClick={onClose}
        >
            <div className="relative bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden border-4 border-yellow-400">
                
                {/* Content */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-black">
                    <img 
                        src={config.gif} 
                        alt="Reward" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 text-center">
                        <h2 className="text-2xl font-black text-white mb-1 drop-shadow-md uppercase italic tracking-wide">
                            {config.title}
                        </h2>
                        <p className="text-sm font-bold text-yellow-300 drop-shadow-sm">
                            {config.subtitle}
                        </p>
                    </div>
                </div>

                {/* Close Button */}
                <button 
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            
            {/* Confetti Effect (CSS only simple particles) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-10 right-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};
