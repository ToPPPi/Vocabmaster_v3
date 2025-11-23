-- VocabMaster Database Setup Script
-- This script creates the database and all necessary tables

-- Connect to PostgreSQL as superuser and create the database
-- Run this command separately: createdb -U postgres vocabmaster

-- Connect to the vocabmaster database and run the following commands:

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

-- Insert some sample users (optional, for testing)
-- INSERT INTO users (email, password_hash, name) VALUES 
-- ('test@example.com', '$2a$10$8K1p/aW4mzOUV3/Zqkx0ZOtZ6.Nmz4g24U3YJyvzL0p6L8K4QHq6.', 'Test User')
-- ON CONFLICT DO NOTHING;

-- Verify tables were created
\dt

-- Show table structures
\d users
\d words
\d user_words
\d daily_progress