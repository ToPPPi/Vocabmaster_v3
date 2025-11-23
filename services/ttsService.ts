
export const speak = (text: string, lang: string = 'en-US') => {
  if (!window.speechSynthesis) return;

  // Cancel any currently playing speech to avoid overlap
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9; // Slightly slower for learning
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
};
