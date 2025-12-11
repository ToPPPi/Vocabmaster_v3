
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
    if (!('speechSynthesis' in window)) return;

    // 1. Force cancel previous utterance (Crucial for mobile webview stability)
    window.speechSynthesis.cancel();

    // 2. Simple creation logic
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Defaulting to US English
    utterance.rate = 0.9;     // Slightly slower for learning
    utterance.pitch = 1;
    utterance.volume = 1;

    // 3. Attempt to find a better voice, but don't block execution if not found immediately
    // Mobile browsers often load voices asynchronously or not at all if muted.
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        // Try to find premium/local voices first
        const preferredVoice = voices.find(v => v.lang === 'en-US' && !v.localService) // Google/Apple voices
                            || voices.find(v => v.lang === 'en-US') 
                            || null;
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }
    }

    // 4. Speak
    // Some browsers require resume() if previously paused by system
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
    }
    
    // Slight delay to ensure cancel() finished
    setTimeout(() => {
        window.speechSynthesis.speak(utterance);
    }, 10);
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
