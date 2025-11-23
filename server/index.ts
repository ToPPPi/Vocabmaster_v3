
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { query } from './db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_please_change_in_production';

app.use(cors());
app.use(express.json() as any);

// --- Middleware ---

const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// --- Types ---
interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  role: string;
}

// --- Routes ---

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Register Endpoint
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  try {
    const userCheck = await query('SELECT * FROM users WHERE email = $1', [email]);
    if ((userCheck.rows as any[]).length > 0) {
      res.status(409).json({ error: 'User already exists' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await query(
      `INSERT INTO users (email, password_hash, name) 
       VALUES ($1, $2, $3) 
       RETURNING id, email, name, role, created_at`,
      [email, passwordHash, name]
    );

    const user = (newUser.rows as any[])[0];

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// Login Endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  try {
    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = (result.rows as UserRow[])[0];

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// --- User Profile & Stats ---
app.get('/api/user/me', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;

    // Check Premium Expiry Logic
    // If premium expired, revoke it
    await query(
      `UPDATE users 
       SET is_premium = false, premium_expiry = NULL 
       WHERE is_premium = true AND premium_expiry < NOW()`,
      []
    );

    // Fetch basic user data
    const userResult = await query(
      'SELECT id, name, email, current_streak, longest_streak, total_words_learned, last_activity_date, xp, is_premium, premium_expiry, created_at FROM users WHERE id = $1',
      [userId]
    );
    
    if (userResult.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    const user = userResult.rows[0];

    // Fetch words learned per level
    const levelProgressResult = await query(
      `SELECT w.level, COUNT(uw.word_id) as count 
       FROM user_words uw
       JOIN words w ON uw.word_id = w.id
       WHERE uw.user_id = $1 AND uw.status IN ('KNOWN', 'HARD')
       GROUP BY w.level`,
      [userId]
    );

    const levelProgress: Record<string, number> = {
      'A1': 0, 'A2': 0, 'B1': 0, 'B2': 0, 'C1': 0, 'C2': 0
    };
    
    levelProgressResult.rows.forEach((row: any) => {
      levelProgress[row.level] = parseInt(row.count);
    });

    // Fetch daily progress
    const today = new Date().toISOString().split('T')[0];
    const dailyProgressResult = await query(
      'SELECT words_count FROM daily_progress WHERE user_id = $1 AND date = $2',
      [userId, today]
    );
    const dailyProgress = dailyProgressResult.rows.length > 0 ? dailyProgressResult.rows[0].words_count : 0;

    const daysToBonus = user.current_streak % 7; 

    res.json({
      ...user,
      levelProgress,
      dailyProgress,
      dailyGoal: user.is_premium ? 20 : 5,
      daysToBonus
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update User Profile
app.put('/api/user/me', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const emailCheck = await query('SELECT id FROM users WHERE email = $1 AND id != $2', [email, userId]);
    if (emailCheck.rows.length > 0) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    await query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, userId]
    );

    res.json({ success: true, user: { name, email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Set Initial Level (Placement Test)
app.post('/api/user/setup', authenticateToken, async (req: any, res) => {
    try {
        const userId = req.user.id;
        const { level } = req.body; // e.g., 'B1'
        
        // Logic: Mark all words from previous levels as "KNOWN" to jump start
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const targetIndex = levels.indexOf(level);
        
        if (targetIndex > 0) {
            const levelsToSkip = levels.slice(0, targetIndex);
            // Insert into user_words all words from skipped levels
            // This is a heavy query for a real production app, but fine for MVP
            await query(`
                INSERT INTO user_words (user_id, word_id, status, last_reviewed_at)
                SELECT $1, id, 'KNOWN', NOW()
                FROM words
                WHERE level = ANY($2)
                ON CONFLICT DO NOTHING
            `, [userId, levelsToSkip]);

            // Update user stats
            const countRes = await query(`SELECT COUNT(*) FROM words WHERE level = ANY($1)`, [levelsToSkip]);
            const count = parseInt(countRes.rows[0].count);
            
            await query(`UPDATE users SET total_words_learned = total_words_learned + $1 WHERE id = $2`, [count, userId]);
        }

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to setup level' });
    }
});

// Get User Activity Heatmap
app.get('/api/user/activity', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const result = await query(
      `SELECT date, words_count 
       FROM daily_progress 
       WHERE user_id = $1 
       AND date > NOW() - INTERVAL '1 year'
       ORDER BY date ASC`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
});

// --- Learning Logic ---

// Get Learning Session Words
app.get('/api/learn/session', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const level = req.query.level as string;
    
    if (!level) return res.status(400).json({ error: 'Level is required' });

    // 1. Check daily limit
    const today = new Date().toISOString().split('T')[0];
    const userRes = await query('SELECT is_premium FROM users WHERE id = $1', [userId]);
    const isPremium = userRes.rows[0]?.is_premium;
    const limit = isPremium ? 20 : 5;

    const progressRes = await query('SELECT words_count FROM daily_progress WHERE user_id = $1 AND date = $2', [userId, today]);
    const learnedToday = progressRes.rows[0]?.words_count || 0;
    
    const remaining = Math.max(0, limit - learnedToday);

    if (remaining <= 0) {
      return res.json({ words: [], message: 'Daily limit reached' });
    }

    // 2. Fetch words
    const wordsRes = await query(
      `SELECT w.* 
       FROM words w
       LEFT JOIN user_words uw ON w.id = uw.word_id AND uw.user_id = $1
       WHERE w.level = $2 
       AND (uw.id IS NULL OR uw.status = 'NEW')
       LIMIT $3`,
      [userId, level, remaining]
    );

    res.json({ words: wordsRes.rows });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

// Sync Progress & EARNED PREMIUM LOGIC
app.post('/api/learn/progress', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { wordId, status } = req.body; 

    if (!wordId || !['KNOWN', 'HARD'].includes(status)) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    const today = new Date().toISOString().split('T')[0];

    // 1. Update/Insert user_words
    await query(
      `INSERT INTO user_words (user_id, word_id, status, last_reviewed_at)
       VALUES ($1, $2, $3, NOW())
       ON CONFLICT (user_id, word_id) 
       DO UPDATE SET status = $3, last_reviewed_at = NOW()`,
      [userId, wordId, status]
    );

    // 2. Update Daily Progress
    await query(
      `INSERT INTO daily_progress (user_id, date, words_count)
       VALUES ($1, $2, 1)
       ON CONFLICT (user_id, date)
       DO UPDATE SET words_count = daily_progress.words_count + 1`,
      [userId, today]
    );

    // 3. Update User Stats (Total words, XP)
    await query(
      `UPDATE users SET 
         total_words_learned = total_words_learned + 1,
         xp = xp + 10
       WHERE id = $1`,
      [userId]
    );

    // 4. Streak & Earned Premium Logic
    const userRes = await query('SELECT last_activity_date, current_streak, is_premium FROM users WHERE id = $1', [userId]);
    const user = userRes.rows[0];
    const lastDate = user.last_activity_date ? new Date(user.last_activity_date).toISOString().split('T')[0] : null;

    let earnedPremium = false;

    if (lastDate !== today) {
      // New day activity detected
      let newStreak = 1;
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (lastDate === yesterdayStr) {
        newStreak = user.current_streak + 1;
      }

      // Check for Earned Premium (Every 7 days)
      if (newStreak > 0 && newStreak % 7 === 0) {
        // Grant 3 days premium
        await query(
          `UPDATE users SET 
             is_premium = true,
             premium_expiry = NOW() + INTERVAL '3 days'
           WHERE id = $1`,
          [userId]
        );
        earnedPremium = true;
      }

      await query(
        `UPDATE users SET 
           last_activity_date = NOW(),
           current_streak = $1,
           longest_streak = GREATEST(longest_streak, $1)
         WHERE id = $2`,
        [newStreak, userId]
      );
    }

    res.json({ success: true, earnedPremium });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

// --- Dictionary API ---
app.get('/api/dictionary', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const queryText = `
      SELECT w.*, uw.status, uw.last_reviewed_at
      FROM words w
      JOIN user_words uw ON w.id = uw.word_id
      WHERE uw.user_id = $1 AND uw.status IN ('KNOWN', 'HARD')
      ORDER BY uw.last_reviewed_at DESC
    `;
    
    const result = await query(queryText, [userId]);
    res.json({ words: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch dictionary' });
  }
});

// --- Library (Word Blocks) API ---
app.get('/api/library/:level', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { level } = req.params;
    
    if (['B2', 'C1', 'C2'].includes(level)) {
       const userRes = await query('SELECT is_premium FROM users WHERE id = $1', [userId]);
       if (!userRes.rows[0]?.is_premium) {
         return res.status(403).json({ error: 'Premium required' });
       }
    }

    const queryText = `
      SELECT w.*, uw.status 
      FROM words w
      LEFT JOIN user_words uw ON w.id = uw.word_id AND uw.user_id = $1
      WHERE w.level = $2
      ORDER BY w.word ASC
    `;
    
    const result = await query(queryText, [userId, level]);
    res.json({ words: result.rows });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch library' });
  }
});

// Seed Words Endpoint
app.post('/api/dev/seed', async (req, res) => {
  const words = [
    // A1
    { word: 'Apple', translation: 'Яблоко', transcription: '/ˈæp.əl/', partOfSpeech: 'noun', level: 'A1' },
    { word: 'Book', translation: 'Книга', transcription: '/bʊk/', partOfSpeech: 'noun', level: 'A1' },
    { word: 'Cat', translation: 'Кот', transcription: '/kæt/', partOfSpeech: 'noun', level: 'A1' },
    { word: 'Dog', translation: 'Собака', transcription: '/dɒɡ/', partOfSpeech: 'noun', level: 'A1' },
    { word: 'Hello', translation: 'Привет', transcription: '/həˈləʊ/', partOfSpeech: 'interjection', level: 'A1' },
    { word: 'Family', translation: 'Семья', transcription: '/ˈfæm.əl.i/', partOfSpeech: 'noun', level: 'A1' },
    { word: 'House', translation: 'Дом', transcription: '/haʊs/', partOfSpeech: 'noun', level: 'A1' },
    { word: 'Work', translation: 'Работа', transcription: '/wɜːk/', partOfSpeech: 'verb/noun', level: 'A1' },
    { word: 'Water', translation: 'Вода', transcription: '/ˈwɔː.tər/', partOfSpeech: 'noun', level: 'A1' },
    { word: 'Friend', translation: 'Друг', transcription: '/frend/', partOfSpeech: 'noun', level: 'A1' },
    
    // A2
    { word: 'Adventure', translation: 'Приключение', transcription: '/ədˈven.tʃər/', partOfSpeech: 'noun', level: 'A2' },
    { word: 'Believe', translation: 'Верить', transcription: '/bɪˈliːv/', partOfSpeech: 'verb', level: 'A2' },
    { word: 'Cancel', translation: 'Отменять', transcription: '/ˈkæn.səl/', partOfSpeech: 'verb', level: 'A2' },
    { word: 'Delicious', translation: 'Вкусный', transcription: '/dɪˈlɪʃ.əs/', partOfSpeech: 'adjective', level: 'A2' },
    
    // B1
    { word: 'Environment', translation: 'Окружающая среда', transcription: '/ɪnˈvaɪ.rən.mənt/', partOfSpeech: 'noun', level: 'B1' },
    { word: 'Solution', translation: 'Решение', transcription: '/səˈluː.ʃən/', partOfSpeech: 'noun', level: 'B1' },
    { word: 'Candidate', translation: 'Кандидат', transcription: '/ˈkæn.dɪ.dət/', partOfSpeech: 'noun', level: 'B1' },
    
    // B2
    { word: 'Inevitably', translation: 'Неизбежно', transcription: '/ɪˈnev.ɪ.tə.bli/', partOfSpeech: 'adverb', level: 'B2' },
    { word: 'Capacity', translation: 'Вместимость', transcription: '/kəˈpæs.ə.ti/', partOfSpeech: 'noun', level: 'B2' },
    
    // C1
    { word: 'Ambiguous', translation: 'Двусмысленный', transcription: '/æmˈbɪɡ.ju.əs/', partOfSpeech: 'adjective', level: 'C1' },
    { word: 'Hypothesis', translation: 'Гипотеза', transcription: '/haɪˈpɒθ.ə.sɪs/', partOfSpeech: 'noun', level: 'C1' },
    
    // C2
    { word: 'Serendipity', translation: 'Интуитивная прозорливость', transcription: '/ˌser.ənˈdɪp.ə.ti/', partOfSpeech: 'noun', level: 'C2' },
    { word: 'Ephemeral', translation: 'Эфемерный', transcription: '/ɪˈfem.ər.əl/', partOfSpeech: 'adjective', level: 'C2' }
  ];

  try {
    for (const w of words) {
      await query(
        `INSERT INTO words (word, translation, transcription, part_of_speech, level)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT DO NOTHING`,
        [w.word, w.translation, w.transcription, w.partOfSpeech, w.level]
      );
    }
    res.json({ message: 'Seeded with ' + words.length + ' words' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Seed failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
