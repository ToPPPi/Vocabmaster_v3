
export const triggerHaptic = (style: 'light' | 'medium' | 'heavy' | 'selection' | 'error' | 'success' | 'warning' = 'light') => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
        if (style === 'selection') {
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        } else if (style === 'error' || style === 'success' || style === 'warning') {
            window.Telegram.WebApp.HapticFeedback.notificationOccurred(style);
        } else {
            window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
        }
    }
};

export const speak = (text: string) => {
    if (!text) return;

    // Helper: Play from network (Fallback chain)
    const playNetworkAudio = () => {
        const encoded = encodeURIComponent(text);
        // Primary: Youdao (Very reliable for English words, fast CDN)
        const url1 = `https://dict.youdao.com/dictvoice?audio=${encoded}&type=1`;
        // Secondary: Google Translate (Fallback)
        const url2 = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=en&client=tw-ob`;

        const audio = new Audio(url1);
        audio.play().catch(() => {
            // If primary fails, try secondary
            const audioBackup = new Audio(url2);
            audioBackup.play().catch(e => console.warn("All TTS failed", e));
        });
    };

    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        
        // Android WebView Hack:
        // On Android WebViews (Telegram), getVoices() often returns empty array initially.
        // If it's empty on Android, native playback usually fails silently.
        // We force network playback in this case.
        const voices = synth.getVoices();
        const isAndroid = /Android/i.test(navigator.userAgent);

        if (isAndroid && voices.length === 0) {
            playNetworkAudio();
            return;
        }

        // Cancel previous utterances to avoid queue getting stuck
        synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Slightly slower for better clarity

        // Try to pick a high-quality local voice
        const preferredVoice = voices.find(v => v.lang === 'en-US' && v.localService) 
                            || voices.find(v => v.lang.startsWith('en'));
        
        if (preferredVoice) utterance.voice = preferredVoice;

        // If native throws an error (common in restricted iframes), fallback to network
        utterance.onerror = () => playNetworkAudio();

        try {
            synth.speak(utterance);
        } catch (e) {
            playNetworkAudio();
        }
    } else {
        // Browser doesn't support SpeechSynthesis at all
        playNetworkAudio();
    }
};

export const shareApp = () => {
    const text = "Я учу английский с VocabMaster! 10,000 слов, ИИ-тьютор и интервальные повторения. Попробуй тоже!";
    const url = "https://t.me/VocabMasterBot/app"; 

    if (navigator.share) {
        navigator.share({
            title: 'VocabMaster',
            text: text,
            url: url,
        }).catch((error) => console.log('Error sharing', error));
    } 
    else if (window.Telegram?.WebApp) {
        const tgShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.Telegram.WebApp.openTelegramLink(tgShareUrl);
    }
    else {
        navigator.clipboard.writeText(`${text} ${url}`);
        alert('Ссылка скопирована в буфер обмена!');
    }
};

export const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};
