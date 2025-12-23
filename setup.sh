#!/bin/bash

# ViralVibe SaaS Setup Script
# This script helps you set up the development environment

set -e  # Exit on error

echo "🎬 ViralVibe SaaS - Setup Script"
echo "================================"
echo ""

# Check prerequisites
echo "📋 Checking prerequisites..."

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 20.0.0"
    exit 1
fi
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version must be >= 20.0.0 (current: $(node -v))"
    exit 1
fi
echo "✅ Node.js $(node -v)"

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo "⚠️  pnpm not found. Installing pnpm..."
    npm install -g pnpm
fi
echo "✅ pnpm $(pnpm -v)"

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python >= 3.10"
    exit 1
fi
PYTHON_VERSION=$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
echo "✅ Python $PYTHON_VERSION"

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "⚠️  Docker not found. Docker is optional but recommended."
else
    echo "✅ Docker $(docker --version | cut -d' ' -f3 | cut -d',' -f1)"
fi

echo ""
echo "📦 Installing dependencies..."

# Install Node.js dependencies
echo "Installing pnpm workspaces..."
pnpm install

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -e .

echo ""
echo "⚙️  Setting up environment..."

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit .env and add your credentials:"
    echo "   - Supabase URL and keys"
    echo "   - Modal tokens"
    echo "   - OpenAI API key"
    echo "   - AWS S3 credentials"
else
    echo "✅ .env file already exists"
fi

# Create frontend .env.local if it doesn't exist
if [ ! -f apps/web/.env.local ]; then
    echo "Creating frontend .env.local from template..."
    cp apps/web/.env.local.example apps/web/.env.local
else
    echo "✅ Frontend .env.local already exists"
fi

echo ""
echo "🐳 Docker setup (optional)..."
echo "To start all services with Docker:"
echo "  docker-compose up -d"
echo ""
echo "Or start services manually:"
echo ""
echo "  Terminal 1 (Backend):"
echo "    cd apps/api"
echo "    uvicorn main:app --reload"
echo ""
echo "  Terminal 2 (Frontend):"
echo "    cd apps/web"
echo "    pnpm dev"
echo ""
echo "  Terminal 3 (Celery Worker):"
echo "    cd apps/api"
echo "    celery -A tasks.celery_app worker --loglevel=info"
echo ""

echo "✅ Setup complete!"
echo ""
echo "📚 Next steps:"
echo "1. Edit .env and add your API keys"
echo "2. Run database migrations (see packages/db/README.md)"
echo "3. Start development servers (see above)"
echo "4. Visit http://localhost:3000"
echo ""
echo "📖 For more information, see README.md"
