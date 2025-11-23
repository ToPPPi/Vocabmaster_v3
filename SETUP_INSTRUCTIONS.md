# VocabMaster - Local Setup Instructions

This guide will help you run the VocabMaster project locally. The project consists of a Frontend (React + Vite) and Backend (Node.js + Express + PostgreSQL).

## Prerequisites

Ensure you have installed:
1. **Node.js** (version 18+)
2. **PostgreSQL** (version 14+)
3. **Git**

## 1. Database Setup (PostgreSQL)

### Option A: Using psql command line
1. Open your terminal
2. Create the database `vocabmaster`:
```sql
CREATE DATABASE vocabmaster;
```

3. Connect to the database and apply the schema:
```bash
psql -U postgres -d vocabmaster -f server/schema.sql
```
*(Replace `postgres` with your username if different)*

### Option B: Manual setup
1. Open pgAdmin or your preferred PostgreSQL client
2. Create a new database named `vocabmaster`
3. Execute the content of `server/schema.sql` in your database

## 2. Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Make sure you have the `.env` file in the server directory (already created with default values)

4. Start the backend server:
```bash
npx ts-node index.ts
```

If you see the message `Server running on http://localhost:5000`, the backend is running successfully.

## 3. Frontend Setup

1. Go back to the root directory:
```bash
cd ..
```

2. Install frontend dependencies:
```bash
npm install
```

3. Make sure you have the `.env` file in the root directory with your Gemini API key:
```env
VITE_API_KEY=your_google_gemini_api_key_here
```

4. Start the frontend development server:
```bash
npx vite
```

## 4. Database Seeding

To populate the database with initial words:

1. Ensure the backend server is running
2. Execute the seed endpoint:
```bash
curl -X POST http://localhost:5000/api/dev/seed
```

You should receive a response: `{"message":"Seeded with X words"}`

## 5. Complete Setup Verification

1. PostgreSQL is running
2. Backend is running on `http://localhost:5000`
3. Database is seeded with sample words
4. Frontend is running on `http://localhost:3000` (or another port)
5. Open your browser to the frontend URL
6. Register a new account
7. Complete the onboarding process
8. Start learning!

## Troubleshooting

### Common Issues:

1. **Database Connection Error**: Ensure PostgreSQL is running and your `.env` settings are correct
2. **Port Already in Use**: Change the PORT in `.env` files to different values
3. **API Key Issues**: Make sure to use `VITE_API_KEY` in the frontend `.env` file

### Database Commands for Troubleshooting:

Connect to database:
```bash
psql -U postgres -d vocabmaster
```

Check if tables exist:
```sql
\dt
```

Check if words are seeded:
```sql
SELECT COUNT(*) FROM words;
```

## Project Structure
```
/
├── components/       # React components
├── services/         # API calls (dataService, auth, gemini)
├── server/           # Backend
│   ├── index.ts      # Express server
│   ├── db.ts         # Database connection
│   ├── schema.sql    # Database schema
│   └── package.json  # Backend dependencies
├── index.html        # Entry point (for Vite)
├── index.tsx         # React entry point
├── App.tsx           # Main component
├── .env              # Frontend environment variables
└── server/.env       # Backend environment variables
```

## Environment Variables

### Frontend (.env):
```
VITE_API_KEY=your_google_gemini_api_key_here
```

### Backend (server/.env):
```
PORT=5000
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vocabmaster
JWT_SECRET=super_secret_key_change_me
```

## Running in Production

For production deployment, you should:
1. Use a secure JWT secret
2. Use environment variables for all sensitive data
3. Set up proper API key management (preferably on the backend)
4. Use a reverse proxy like Nginx
5. Set up proper SSL certificates