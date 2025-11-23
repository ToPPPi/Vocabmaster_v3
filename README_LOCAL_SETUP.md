# VocabMaster - Complete Local Setup Guide

## Project Overview
VocabMaster is a language learning application built with:
- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL
- **AI Integration**: Google Gemini API for generating example sentences

## System Requirements
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Git

## Database Setup (SQL Commands)

### 1. Create the database:
```sql
CREATE DATABASE vocabmaster;
```

### 2. Connect to the database and run the schema:
```bash
psql -U postgres -d vocabmaster -f server/schema.sql
```

### 3. Or manually execute this schema:
```sql
-- Enable extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    current_streak INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    total_words_learned INTEGER DEFAULT 0,
    last_activity_date DATE,
    xp INTEGER DEFAULT 0,
    is_premium BOOLEAN DEFAULT FALSE,
    premium_expiry TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Words table
CREATE TABLE IF NOT EXISTS words (
    id SERIAL PRIMARY KEY,
    word VARCHAR(255) NOT NULL,
    translation VARCHAR(500) NOT NULL,
    transcription VARCHAR(255),
    part_of_speech VARCHAR(100),
    level VARCHAR(10) NOT NULL -- A1, A2, B1, B2, C1, C2
);

-- User-Words relationship table
CREATE TABLE IF NOT EXISTS user_words (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    word_id INTEGER REFERENCES words(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'NEW', -- NEW, LEARNING, KNOWN, HARD
    last_reviewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, word_id)
);

-- Daily progress tracking
CREATE TABLE IF NOT EXISTS daily_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    words_count INTEGER DEFAULT 0,
    UNIQUE(user_id, date)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_words_level ON words(level);
CREATE INDEX IF NOT EXISTS idx_user_words_user_id ON user_words(user_id);
CREATE INDEX IF NOT EXISTS idx_user_words_word_id ON user_words(word_id);
CREATE INDEX IF NOT EXISTS idx_daily_progress_user_id_date ON daily_progress(user_id, date);
```

## Environment Configuration

### Backend (.env in /server directory):
```
PORT=5000
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vocabmaster
JWT_SECRET=super_secret_key_change_me
```

### Frontend (.env in /workspace directory):
```
VITE_API_KEY=your_google_gemini_api_key_here
```

## Setup Process

### Option 1: Single Command Setup (Recommended)
After setting up the database and environment variables, you can run both the server and frontend with a single command:

```bash
npm install  # Install all dependencies
npm run dev  # Run both server and frontend simultaneously
```

This will start both the backend server (on port 5000) and the frontend (on port 3000) at the same time.

### Option 2: Separate Setup
If you prefer to run them separately:

#### 1. Install Backend Dependencies
```bash
cd server
npm install
```

#### 2. Install Frontend Dependencies
```bash
cd ..
npm install
```

#### 3. Start the Backend Server
```bash
cd server
npx ts-node index.ts
# or: npm run dev (in the server directory)
```

#### 4. In a new terminal, start the Frontend
```bash
cd ..
npx vite
# or: npm run client (from the root directory)
```

### 5. Seed the Database (after starting the backend)
```bash
curl -X POST http://localhost:5000/api/dev/seed
```

## Application Flow

1. Open browser to http://localhost:3000
2. Register a new account
3. Complete the placement test to determine your level
4. Start learning vocabulary

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### User Profile
- `GET /api/user/me` - Get current user profile
- `PUT /api/user/me` - Update user profile
- `POST /api/user/setup` - Set initial level after placement test

### Learning
- `GET /api/learn/session?level={level}` - Get words for learning session
- `POST /api/learn/progress` - Submit learning progress

### Dictionary & Library
- `GET /api/dictionary` - Get learned words
- `GET /api/library/{level}` - Get words in a specific level

### Other
- `GET /api/health` - Health check
- `POST /api/dev/seed` - Seed database with sample words

## Troubleshooting

### Common Issues:

1. **Database Connection Error**: Ensure PostgreSQL is running and credentials in `.env` are correct
2. **Port Already in Use**: Change ports in `.env` files
3. **API Key Issues**: Make sure to use `VITE_API_KEY` for frontend and set it properly
4. **Module Import Issues**: Verify all dependencies are installed correctly

### Check Database Connection:
```bash
psql -U postgres -d vocabmaster -c "SELECT version();"
```

### Verify Tables Exist:
```bash
psql -U postgres -d vocabmaster -c "\dt"
```

### Check Seeded Words:
```bash
psql -U postgres -d vocabmaster -c "SELECT COUNT(*) FROM words;"
```

## Security Notes

- Change the default JWT secret in production
- Never commit actual API keys to version control
- Use environment variables for all sensitive configuration
- Consider implementing rate limiting for API endpoints
- In production, proxy AI requests through your backend to protect API keys

## Development Notes

- The frontend uses Vite for fast development
- API requests are proxied from frontend to backend
- The application supports multiple language levels (A1-C2)
- Premium features are available based on user streaks
- Data is persisted in PostgreSQL with proper relationships