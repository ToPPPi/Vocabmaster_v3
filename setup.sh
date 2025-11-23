#!/bin/bash

echo "VocabMaster Local Setup Script"
echo "==============================="

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "Error: PostgreSQL is not installed or not in PATH"
    echo "Please install PostgreSQL and ensure psql command is available"
    exit 1
fi

echo "✓ PostgreSQL is installed"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed or not in PATH"
    exit 1
fi

echo "✓ Node.js is installed"

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2)
NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1)

if [ "$NODE_MAJOR" -lt 18 ]; then
    echo "Error: Node.js version must be 18 or higher. Current version: $NODE_VERSION"
    exit 1
fi

echo "✓ Node.js version is $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed or not in PATH"
    exit 1
fi

echo "✓ npm is installed"

# Create database if it doesn't exist
echo "Creating database..."
DB_EXISTS=$(psql -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname='vocabmaster'" 2>/dev/null)

if [ "$DB_EXISTS" = '1' ]; then
    echo "✓ Database 'vocabmaster' already exists"
else
    echo "Creating database 'vocabmaster'..."
    createdb -U postgres vocabmaster
    if [ $? -eq 0 ]; then
        echo "✓ Database 'vocabmaster' created successfully"
    else
        echo "Error: Failed to create database 'vocabmaster'"
        echo "Make sure PostgreSQL is running and you have the necessary permissions"
        exit 1
    fi
fi

# Apply schema
echo "Applying database schema..."
psql -U postgres -d vocabmaster -f server/schema.sql
if [ $? -eq 0 ]; then
    echo "✓ Database schema applied successfully"
else
    echo "Error: Failed to apply database schema"
    exit 1
fi

# Install backend dependencies
echo "Installing backend dependencies..."
cd server
npm install
if [ $? -eq 0 ]; then
    echo "✓ Backend dependencies installed"
else
    echo "Error: Failed to install backend dependencies"
    exit 1
fi
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install
if [ $? -eq 0 ]; then
    echo "✓ Frontend dependencies installed"
else
    echo "Error: Failed to install frontend dependencies"
    exit 1
fi

echo ""
echo "Setup completed successfully! 🎉"
echo ""
echo "To run the application:"
echo "1. Start the backend server:"
echo "   cd server && npx ts-node index.ts"
echo ""
echo "2. In a new terminal, start the frontend:"
echo "   npx vite"
echo ""
echo "3. To seed the database with sample words (after starting the backend):"
echo "   curl -X POST http://localhost:5000/api/dev/seed"
echo ""
echo "4. Open your browser to http://localhost:3000 to access the application"
echo ""
echo "Note: Make sure to update your .env files with your actual API keys and database credentials"