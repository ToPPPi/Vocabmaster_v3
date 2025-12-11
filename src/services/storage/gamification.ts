
import React from 'react';
import { 
    Sprout, Footprints, Zap, BookOpen, Crown, Target, Flame, 
    Brain, Star, Shield, Gem, 
    Map, Search, Library,  
    History, Repeat, Dumbbell, Coffee, Sunrise, Moon, Sun, 
    Medal, PenTool,
    MousePointerClick as MousePointerClickIcon, Calendar as CalendarIcon, Gamepad as GamepadIcon, Coins as CoinsIcon, ShoppingBag as ShoppingBagIcon, CheckCircle as CheckCircleIcon, Mountain as MountainIcon, Send as SendIcon, Briefcase, Bot
  } from 'lucide-react';
import { Achievement, ProficiencyLevel, Word } from '../../types';
import { getUserProgress, saveUserProgress } from './core';
import { loadAllWords, loadWordsForLevel } from '../../data/words';

export const getLearnedCount = async (): Promise<number> => {
    const p = await getUserProgress();
    return Object.keys(p.wordProgress).length;
}

export const calculateCoverage = (wordCount: number): number => {
    if (wordCount === 0) return 0;
    if (wordCount < 1000) {
        return (wordCount / 1000) * 78;
    } else if (wordCount < 3000) {
        return 78 + ((wordCount - 1000) / 2000) * 17;
    } else if (wordCount < 5000) {
        return 95 + ((wordCount - 3000) / 2000) * 2;
    } else {
        return Math.min(98, 97 + ((wordCount - 5000) / 5000) * 1);
    }
};

export const getStatsByLevel = async (): Promise<{ lvl: string; current: number; total: number; percent: number }[]> => {
    const progress = await getUserProgress();
    const allWords = await loadAllWords();
    const learnedIds = Object.keys(progress.wordProgress);

    return Object.values(ProficiencyLevel).map(lvl => {
        const wordsInLevel = allWords.filter(w => w.level === lvl);
        const learnedInLevel = wordsInLevel.filter(w => learnedIds.includes(w.id)).length;
        const total = wordsInLevel.length;
        return {
            lvl,
            current: learnedInLevel,
            total: total,
            percent: total > 0 ? (learnedInLevel / total) * 100 : 0
        };
    });
};

export const saveBlitzScore = async (level: string, score: number) => {
    const progress = await getUserProgress();
    const currentHigh = progress.blitzHighScores[level] || 0;
    if (score > currentHigh) {
        progress.blitzHighScores[level] = score;
        await saveUserProgress(progress);
    }
};

export const getBlitzWords = async (level: ProficiencyLevel): Promise<{ target: Word, distractors: string[] }[]> => {
    const progress = await getUserProgress();
    const allLevelWords = await loadWordsForLevel(level);
    const learnedIds = Object.keys(progress.wordProgress).filter(id => {
        const wp = progress.wordProgress[id];
        return wp.status === 'mastered' || wp.status === 'review' || wp.status === 'learning';
    });
    const pool = allLevelWords.filter(w => learnedIds.includes(w.id));
    if (pool.length === 0) return [];
    const shuffled = pool.sort(() => 0.5 - Math.random());
    let gameRoundWords: Word[] = [];
    if (pool.length >= 20) {
        gameRoundWords = shuffled.slice(0, 20);
    } else {
        while (gameRoundWords.length < 20) {
             gameRoundWords = [...gameRoundWords, ...shuffled];
        }
        gameRoundWords = gameRoundWords.slice(0, 20);
    }
    return gameRoundWords.map(targetWord => {
        const otherWords = allLevelWords.filter(w => w.id !== targetWord.id);
        const distractors = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3).map(w => w.translation);
        return { target: targetWord, distractors: distractors };
    });
};

export const getUserRank = (learnedCount: number) => {
    const RANKS = [
        { threshold: 0, title: 'Наблюдатель', icon: '👀' },
        { threshold: 100, title: 'Турист', icon: '🧳' },
        { threshold: 300, title: 'Выживший', icon: '🏝️' },
        { threshold: 600, title: 'Студент', icon: '📚' },
        { threshold: 1000, title: 'Путешественник', icon: '✈️' },
        { threshold: 2000, title: 'Собеседник', icon: '💬' },
        { threshold: 3000, title: 'Знаток', icon: '🧐' },
        { threshold: 5000, title: 'Журналист', icon: '🎙️' },
        { threshold: 7000, title: 'Дипломат', icon: '🤝' },
        { threshold: 9000, title: 'Философ', icon: '🧠' },
        { threshold: 10000, title: 'Легенда', icon: '👑' },
    ];
    let currentRank = RANKS[0];
    let nextRank = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
        if (learnedCount >= RANKS[i].threshold) {
            currentRank = RANKS[i];
            nextRank = RANKS[i + 1] || null;
        } else {
            break;
        }
    }

    return {
        title: currentRank.title,
        icon: currentRank.icon,
        currentThreshold: currentRank.threshold,
        nextThreshold: nextRank ? nextRank.threshold : 10000,
        nextTitle: nextRank ? nextRank.title : 'Максимум',
        isMax: !nextRank
    };
};

export const getAchievements = async (): Promise<Achievement[]> => {
    const progress = await getUserProgress();
    const count = Object.keys(progress.wordProgress).length;
    const streak = progress.streak;
    const coins = progress.wallet.coins;
    const aiUses = progress.aiGenerationsToday; 
    const blitzScores = progress.blitzHighScores;
    const maxBlitzScore = Math.max(...Object.values(blitzScores), 0);

    const definitions: Omit<Achievement, 'current'>[] = [
        { id: 'l_1', title: 'Первый шаг', description: 'Даже путь в 10,000 слов начинается с одного.', icon: React.createElement(Sprout, { className: "w-6 h-6 text-emerald-500" }), max: 1, category: 'learning' },
        { id: 'l_10', title: 'Разминка', description: '10 слов. Ваш мозг начинает просыпаться.', icon: React.createElement(Footprints, { className: "w-6 h-6 text-emerald-600" }), max: 10, category: 'learning' },
        { id: 'l_50', title: 'Словарный запас', description: '50 слов. Вы уже знаете больше, чем Джон Сноу.', icon: React.createElement(BookOpen, { className: "w-6 h-6 text-blue-500" }), max: 50, category: 'learning' },
        { id: 'l_100', title: 'Сотник', description: '100 слов. Фундамент заложен.', icon: React.createElement(Shield, { className: "w-6 h-6 text-slate-600" }), max: 100, category: 'learning' },
        { id: 'l_300', title: 'Турист', description: '300 слов. Вас поймут в аэропорту и отеле.', icon: React.createElement(Map, { className: "w-6 h-6 text-amber-500" }), max: 300, category: 'learning' },
        { id: 'l_500', title: 'Половина тысячи', description: '500 слов. Серьезная заявка на победу.', icon: React.createElement(Flame, { className: "w-6 h-6 text-orange-500" }), max: 500, category: 'learning' },
        { id: 'l_1000', title: 'Тысячник', description: '1,000 слов. Вы понимаете 78% повседневной речи.', icon: React.createElement(Star, { className: "w-6 h-6 text-yellow-400" }), max: 1000, category: 'learning' },
        { id: 'l_2000', title: 'Эрудит', description: '2,000 слов. Вы читаете адаптированные книги.', icon: React.createElement(Search, { className: "w-6 h-6 text-indigo-500" }), max: 2000, category: 'learning' },
        { id: 'l_3000', title: 'Свобода', description: '3,000 слов. Плато среднего уровня пройдено.', icon: React.createElement(Library, { className: "w-6 h-6 text-sky-500" }), max: 3000, category: 'learning' },
        { id: 'l_5000', title: 'Журналист', description: '5,000 слов. Вы читаете The New York Times.', icon: React.createElement(PenTool, { className: "w-6 h-6 text-pink-500" }), max: 5000, category: 'learning' },
        { id: 'l_10000', title: 'Легенда', description: '10,000 слов. Вы знаете английский лучше носителей.', icon: React.createElement(Crown, { className: "w-6 h-6 text-yellow-500" }), max: 10000, category: 'learning' },
        { id: 's_3', title: 'Искра', description: '3 дня подряд. Привычка формируется.', icon: React.createElement(Flame, { className: "w-6 h-6 text-orange-400" }), max: 3, category: 'streak' },
        { id: 's_7', title: 'Неделя', description: '7 дней. Первая серьезная победа над ленью.', icon: React.createElement(Zap, { className: "w-6 h-6 text-yellow-500" }), max: 7, category: 'streak' },
        { id: 's_14', title: 'Две недели', description: '14 дней. Вы уже не представляете утро без нас.', icon: React.createElement(Repeat, { className: "w-6 h-6 text-blue-500" }), max: 14, category: 'streak' },
        { id: 's_30', title: 'Месяц', description: '30 дней. Дисциплина - это свобода.', icon: React.createElement(CalendarIcon, { className: "w-6 h-6 text-emerald-500" }), max: 30, category: 'streak' },
        { id: 's_60', title: 'Два месяца', description: '60 дней. Это уже образ жизни.', icon: React.createElement(Dumbbell, { className: "w-6 h-6 text-slate-700" }), max: 60, category: 'streak' },
        { id: 's_100', title: 'Центурион', description: '100 дней подряд. Ваша воля стальная.', icon: React.createElement(Medal, { className: "w-6 h-6 text-amber-600" }), max: 100, category: 'streak' },
        { id: 's_365', title: 'Год', description: '365 дней. Вы невероятны.', icon: React.createElement(Sun, { className: "w-6 h-6 text-yellow-500" }), max: 365, category: 'streak' },
        { id: 'b_score_100', title: 'Новичок Блица', description: 'Набрать 100 очков в одной игре.', icon: React.createElement(Target, { className: "w-6 h-6 text-red-500" }), max: 100, category: 'blitz' },
        { id: 'b_score_500', title: 'Спринтер', description: 'Набрать 500 очков. Ваши пальцы быстрее мысли.', icon: React.createElement(Zap, { className: "w-6 h-6 text-yellow-400" }), max: 500, category: 'blitz' },
        { id: 'b_score_1000', title: 'Машина', description: '1000 очков. Вы вообще моргаете?', icon: React.createElement(GamepadIcon, { className: "w-6 h-6 text-cyan-500" }), max: 1000, category: 'blitz' },
        { id: 'b_total_5', title: 'Геймер', description: 'Сыграть 5 раундов в Блиц.', icon: React.createElement(GamepadIcon, { className: "w-6 h-6 text-purple-500" }), max: 5, category: 'blitz' },
        { id: 'eco_500', title: 'Копилка', description: 'Накопить 500 монет.', icon: React.createElement(CoinsIcon, { className: "w-6 h-6 text-amber-400" }), max: 500, category: 'misc' },
        { id: 'eco_2000', title: 'Капиталист', description: 'Накопить 2,000 монет.', icon: React.createElement(Gem, { className: "w-6 h-6 text-cyan-400" }), max: 2000, category: 'misc' },
        { id: 'eco_shop', title: 'Шопоголик', description: 'Купить первый предмет в магазине.', icon: React.createElement(ShoppingBagIcon, { className: "w-6 h-6 text-pink-500" }), max: 1, category: 'misc' },
        { id: 'lvl_a1', title: 'A1 Пройден', description: 'Вы освоили базу. Дальше - интереснее.', icon: React.createElement(CheckCircleIcon, { className: "w-6 h-6 text-emerald-500" }), max: 1, category: 'mastery' },
        { id: 'lvl_b2', title: 'Высота B2', description: 'Открыт уровень B2. Это серьезный бизнес.', icon: React.createElement(Briefcase, { className: "w-6 h-6 text-slate-600" }), max: 1, category: 'mastery' },
        { id: 'lvl_c2', title: 'Вершина C2', description: 'Достигнут уровень C2. Вы избранный.', icon: React.createElement(MountainIcon, { className: "w-6 h-6 text-violet-500" }), max: 1, category: 'mastery' },
        { id: 'ai_1', title: 'Привет, AI', description: 'Первый разбор слова с ИИ.', icon: React.createElement(Bot, { className: "w-6 h-6 text-blue-500" }), max: 1, category: 'misc' },
        { id: 'ai_50', title: 'Любознательный', description: '50 разборов с ИИ. Вы любите докапываться до сути.', icon: React.createElement(Search, { className: "w-6 h-6 text-indigo-500" }), max: 50, category: 'misc' },
        { id: 'social_tg', title: 'В Телеграме', description: 'Запустить приложение через Telegram.', icon: React.createElement(SendIcon, { className: "w-6 h-6 text-sky-500" }), max: 1, category: 'social' },
        { id: 'early_bird', title: 'Ранняя пташка', description: 'Заниматься до 8 утра.', icon: React.createElement(Sunrise, { className: "w-6 h-6 text-orange-400" }), max: 1, category: 'time' },
        { id: 'night_owl', title: 'Сова', description: 'Заниматься после 23:00.', icon: React.createElement(Moon, { className: "w-6 h-6 text-indigo-400" }), max: 1, category: 'time' },
        { id: 'weekend_warrior', title: 'Воин выходного дня', description: 'Зайти в субботу и воскресенье.', icon: React.createElement(Coffee, { className: "w-6 h-6 text-amber-700" }), max: 1, category: 'time' },
        { id: 'rev_10', title: 'Повторение - мать учения', description: 'Повторить 10 забытых слов.', icon: React.createElement(History, { className: "w-6 h-6 text-slate-500" }), max: 10, category: 'mastery' },
        { id: 'rev_100', title: 'Железная память', description: 'Повторить 100 слов.', icon: React.createElement(Brain, { className: "w-6 h-6 text-pink-500" }), max: 100, category: 'mastery' },
        { id: 'custom_1', title: 'Творец', description: 'Добавить свое собственное слово.', icon: React.createElement(PenTool, { className: "w-6 h-6 text-violet-500" }), max: 1, category: 'dictionary' },
        { id: 'clicker', title: 'Кликер', description: 'Нажать на слово 100 раз (в сумме).', icon: React.createElement(MousePointerClickIcon, { className: "w-6 h-6 text-slate-400" }), max: 100, category: 'misc' },
        { id: 'dict_scroll', title: 'Библиотекарь', description: 'Пролистать 5 страниц словаря.', icon: React.createElement(Library, { className: "w-6 h-6 text-amber-600" }), max: 5, category: 'dictionary' },
        { id: 'premium_user', title: 'Меценат', description: 'Поддержать разработчиков (Premium).', icon: React.createElement(Crown, { className: "w-6 h-6 text-yellow-500" }), max: 1, category: 'misc' },
    ];

    const checkAchievement = (def: any): Achievement => {
        let current = 0;
        if (def.category === 'learning') current = count;
        else if (def.category === 'streak') current = streak;
        else if (def.id.startsWith('b_score')) current = maxBlitzScore;
        else if (def.id.startsWith('eco_')) {
             if (def.id === 'eco_shop') current = Object.values(progress.inventory).reduce((a, b) => (a as number) + (b as number), 0) > 2 ? 1 : 0;
             else current = coins;
        }
        else if (def.id === 'ai_1' || def.id === 'ai_50') current = aiUses; 
        else if (def.id === 'lvl_a1') current = progress.dailyProgressByLevel['A1'] > 0 ? 1 : 0;
        else if (def.id === 'premium_user') current = progress.premiumStatus ? 1 : 0;
        else if (def.id === 'social_tg') current = window.Telegram?.WebApp?.initData ? 1 : 0;
        
        return { ...def, current, max: def.max };
    };

    return definitions.map(checkAchievement);
};
