
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export type RewardType = 'premium_month' | 'premium_year' | 'shop_buy' | 'level_up' | 'happy_cat_test';

interface RewardConfig {
    gif: string;
    sound: string;
    title: string;
    subtitle: string;
    volume: number; // 0.0 to 1.0
}

// ASSETS CONFIGURATION
const REWARDS: Record<RewardType, RewardConfig> = {
    'premium_month': {
        gif: 'https://media1.tenor.com/m/pUaQYp4sN1MAAAAd/cat-happy.gif', // Happy Cat Jumping
        sound: 'https://www.myinstants.com/media/sounds/happy-happy-happy-cat.mp3', 
        title: 'Happy! Happy! Happy!',
        subtitle: 'Premium активирован на месяц',
        volume: 0.1 // 10% volume (Quiet)
    },
    'premium_year': {
        gif: 'https://media1.tenor.com/m/pUaQYp4sN1MAAAAd/cat-happy.gif',
        sound: 'https://www.myinstants.com/media/sounds/happy-happy-happy-cat.mp3',
        title: 'Happy! Happy! Happy!',
        subtitle: 'Целый год без ограничений!',
        volume: 0.1 // 10% volume
    },
    'happy_cat_test': {
        gif: 'https://media1.tenor.com/m/pUaQYp4sN1MAAAAd/cat-happy.gif',
        sound: 'https://www.myinstants.com/media/sounds/happy-happy-happy-cat.mp3',
        title: 'Happy! Happy! Happy!',
        subtitle: 'Тест анимации (Тихий звук)',
        volume: 0.1
    },
    'shop_buy': {
        gif: 'https://media.giphy.com/media/UPmV92Wd9X2O4/giphy.gif', 
        sound: 'https://cdn.freesound.org/previews/201/201159_2476332-lq.mp3', 
        title: 'Успешная покупка!',
        subtitle: 'Предмет добавлен в инвентарь',
        volume: 0.4
    },
    'level_up': {
        gif: 'https://media.giphy.com/media/zhS4PEVVuFnbG718kV/giphy.gif', 
        sound: 'https://cdn.freesound.org/previews/608/608643_6692269-lq.mp3', 
        title: 'Новый уровень!',
        subtitle: 'Вы становитесь умнее',
        volume: 0.4
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
            const config = REWARDS[type];
            // Play Sound
            const audio = new Audio(config.sound);
            audio.volume = config.volume; // Apply volume setting
            
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => console.warn("Autoplay blocked", e));
            }
            audioRef.current = audio;

            // Auto close after 4 seconds
            const timer = setTimeout(() => {
                onClose();
            }, 4500);

            return () => {
                clearTimeout(timer);
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current = null;
                }
            };
        }
    }, [type, onClose]);

    if (!type) return null;

    const config = REWARDS[type];

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in zoom-in duration-300 p-6"
            onClick={onClose}
        >
            <div className="relative bg-slate-900 p-1 rounded-[2.5rem] shadow-2xl max-w-sm w-full overflow-hidden border-[6px] border-yellow-400">
                
                {/* Content */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-black">
                    <img 
                        src={config.gif} 
                        alt="Reward" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-16 text-center">
                        <h2 className="text-3xl font-black text-white mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase italic tracking-wider leading-none">
                            {config.title}
                        </h2>
                        <p className="text-sm font-bold text-yellow-300 drop-shadow-md bg-black/40 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
                            {config.subtitle}
                        </p>
                    </div>
                </div>

                {/* Close Button */}
                <button 
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="absolute top-5 right-5 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-colors border border-white/20"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
            
            {/* Confetti Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-10 w-3 h-3 bg-red-500 rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-10 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-1/3 right-10 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
            </div>
        </div>
    );
};
