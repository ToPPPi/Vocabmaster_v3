
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

    // 1. Immediately cancel any ongoing speech
    window.speechSynthesis.cancel();

    // 2. Create Utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // 3. Settings for Android/iOS Webview compatibility
    utterance.lang = 'en-US'; 
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // 4. Try to get a better voice, but use default if not available instantly
    // We don't want to wait for onvoiceschanged here as it delays the click action too much
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        // Try to find a high-quality Google or Apple voice
        const preferredVoice = voices.find(v => v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Samantha') || v.localService)) 
                            || voices.find(v => v.lang === 'en-US');
        
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }
    }

    // 5. Fire speech immediately
    // Small timeout ensures the cancellation has processed
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
