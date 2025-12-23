# 🎬 ViralVibe - Viral Video Repurposing SaaS

> **Transform long-form content into viral short-form clips automatically**

ViralVibe is a production-ready SaaS platform that competes with OpusClip and WayinVideo. It uses AI to analyze long-form videos, identify viral moments, and automatically generate optimized short-form clips with dynamic layouts, animated captions, and visual effects.

---

## ✨ Key Features

- 🎥 **YouTube URL & File Upload Support** - Process videos from URLs or direct uploads
- 🤖 **AI-Powered Virality Scoring** - Identify the most engaging moments using multi-factor analysis
- 📝 **Word-Level Transcription** - WhisperX integration for precise captions
- 👤 **Active Speaker Detection** - Automatic face tracking and dynamic cropping
- 🎨 **Remotion Video Rendering** - Real-time preview and export with custom layouts
- 📊 **Audio & Visual Analysis** - Energy detection and saliency mapping
- 💬 **Hook Extraction** - LLM-powered identification of engagement triggers
- ⚡ **GPU-Accelerated Processing** - Modal functions for fast video processing
- 🔐 **Complete Authentication** - Supabase Auth with JWT tokens
- 📦 **Production Ready** - Docker, CI/CD, comprehensive error handling

---

## 🏗️ Architecture

```
viralvibe-saas/
├── apps/
│   ├── web/              # Next.js 14 Frontend (App Router)
│   └── api/              # FastAPI Backend
├── packages/
│   ├── worker/           # Modal GPU Functions
│   ├── shared/           # Shared TypeScript Types
│   └── db/               # Supabase Migrations
├── docker-compose.yml    # Local Development Stack
├── pnpm-workspace.yaml   # Monorepo Configuration
└── pyproject.toml        # Python Dependencies
```

### Tech Stack

#### Frontend
- **Framework**: Next.js 14 (App Router, Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Video Rendering**: Remotion
- **State Management**: React Query, Context API
- **Auth**: Supabase Auth

#### Backend
- **Framework**: FastAPI (async)
- **Language**: Python 3.10
- **Database**: PostgreSQL (via Supabase)
- **Task Queue**: Celery + Redis
- **Validation**: Pydantic v2
- **Auth**: JWT tokens

#### Video Processing
- **Infrastructure**: Modal (GPU functions)
- **Transcription**: WhisperX
- **Speaker Detection**: Pyannote.audio
- **Video Processing**: FFmpeg, OpenCV
- **Audio Analysis**: Librosa
- **LLM**: OpenAI GPT-4o

#### Infrastructure
- **Cloud Storage**: AWS S3
- **Database**: Supabase (PostgreSQL + Row-Level Security)
- **Caching**: Redis
- **Deployment**: Vercel (frontend), Railway/Render (backend), Modal (workers)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 20.0.0
- **pnpm** >= 8.0.0
- **Python** >= 3.10
- **Docker** & **Docker Compose**
- **Supabase** account
- **Modal** account
- **OpenAI** API key

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/viralvibe-saas.git
cd viralvibe-saas

# Install dependencies
pnpm install

# Install Python dependencies
pip install -e .
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env and fill in your credentials:
# - Supabase URL and keys
# - Modal tokens
# - OpenAI API key
# - AWS S3 credentials
```

### 3. Database Setup

```bash
# Run Supabase migrations
cd packages/db
pnpm run migrate
```

### 4. Start Development Environment

```bash
# Option A: Using Docker (Recommended)
docker-compose up -d

# Option B: Manual start
# Terminal 1: Start backend
cd apps/api
uvicorn main:app --reload

# Terminal 2: Start Celery worker
cd apps/api
celery -A tasks.celery_app worker --loglevel=info

# Terminal 3: Start frontend
cd apps/web
pnpm dev
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

---

## 📋 Project Structure

### `/apps/web` - Next.js Frontend

```
apps/web/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   └── (protected)/
│       └── dashboard/
│           ├── page.tsx              # Video list
│           ├── upload/               # Upload interface
│           ├── video/[id]/           # Video detail
│           └── exports/              # Exports list
├── components/
│   ├── ui/                          # shadcn/ui components
│   ├── layouts/                     # Header, Sidebar
│   ├── VideoCard.tsx                # Video display card
│   ├── ClipCard.tsx                 # Clip display card
│   └── Remotion/                    # Remotion compositions
│       ├── Composition.tsx
│       ├── DynamicCropVideo.tsx
│       ├── AnimatedCaptions.tsx
│       └── AudioVisualization.tsx
├── lib/
│   ├── api/                         # API client
│   ├── hooks/                       # Custom React hooks
│   └── utils/                       # Helper functions
└── middleware.ts                    # Auth middleware
```

### `/apps/api` - FastAPI Backend

```
apps/api/
├── main.py                          # FastAPI app entry point
├── config.py                        # Environment configuration
├── database.py                      # SQLAlchemy setup
├── models.py                        # Pydantic models
├── middleware/
│   └── auth.py                      # JWT validation
├── routes/
│   ├── auth.py                      # Login/signup
│   ├── videos.py                    # Video CRUD
│   ├── clips.py                     # Clip gallery
│   └── exports.py                   # Export management
├── tasks/
│   ├── celery_app.py                # Celery configuration
│   └── video_processing.py          # Background tasks
└── utils/
    ├── validators.py                # Input validation
    └── errors.py                    # Custom exceptions
```

### `/packages/worker` - Modal GPU Functions

```
packages/worker/
├── video_processor.py               # Main Modal function
├── yt_dlp_downloader.py             # Video download
├── whisperx_processor.py            # Transcription
├── pyannote_asd.py                  # Speaker detection
├── audio_analyzer.py                # Audio energy analysis
├── visual_analyzer.py               # Visual saliency
└── llm_analyzer.py                  # Hook extraction
```

### `/packages/db` - Database Migrations

```
packages/db/
└── migrations/
    ├── 001_create_users.sql
    ├── 002_create_videos.sql
    ├── 003_create_clips.sql
    ├── 004_create_transcripts.sql
    └── 005_create_exports.sql
```

---

## 🔄 Video Processing Pipeline

```mermaid
graph LR
    A[User Uploads Video] --> B[Create Video Record]
    B --> C[Enqueue Celery Task]
    C --> D[Modal: Download Video]
    D --> E[Modal: WhisperX Transcription]
    E --> F[Modal: Speaker Detection]
    F --> G[Modal: Audio Analysis]
    G --> H[Modal: Visual Analysis]
    H --> I[Modal: Hook Extraction]
    I --> J[Backend: Virality Scoring]
    J --> K[Backend: Save Clips]
    K --> L[User Views Clips]
    L --> M[User Exports Clip]
    M --> N[Remotion Renders Video]
    N --> O[Upload to S3]
    O --> P[User Downloads]
```

---

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Videos
- `POST /api/videos/upload` - Upload video (URL or file)
- `GET /api/videos` - List user's videos
- `GET /api/videos/{video_id}` - Get video details

### Clips
- `GET /api/clips?video_id={id}` - List clips for video
- `GET /api/clips/{clip_id}` - Get clip details
- `POST /api/clips/{clip_id}/export` - Export clip

### Exports
- `GET /api/exports/{export_id}` - Get export status

### Health
- `GET /api/health` - Health check

Full API documentation available at `/docs` when running the backend.

---

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Frontend tests
cd apps/web
pnpm test

# Backend tests
cd apps/api
pytest

# Coverage report
pytest --cov=. --cov-report=html
```

---

## 📦 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
cd apps/web
vercel --prod
```

### Backend (Railway/Render)

```bash
# Build Docker image
docker build -f apps/api/Dockerfile -t viralvibe-api .

# Push to registry
docker push your-registry/viralvibe-api:latest
```

### Worker (Modal)

```bash
# Deploy Modal functions
cd packages/worker
modal deploy video_processor.py
```

---

## 🔒 Security

- **Authentication**: JWT tokens with 1-hour expiry
- **Row-Level Security**: Supabase RLS policies
- **Input Validation**: Pydantic models for all inputs
- **Rate Limiting**: 100 requests/minute per user
- **CORS**: Restricted to frontend origin
- **SQL Injection**: Prevented via SQLAlchemy ORM
- **Secrets Management**: Environment variables only

---

## 📊 Virality Scoring Algorithm

Each clip receives a score (0-100) based on:

- **40% Hook Strength**: LLM analysis of transcript engagement
- **30% Audio Energy**: RMS energy levels and dynamic range
- **30% Visual Saliency**: Motion detection and visual interest

```python
virality_score = (0.4 * hook_score + 0.3 * audio_score + 0.3 * visual_score) * 100
```

---

## 🛠️ Development

### Code Style

- **Python**: Black formatter, Ruff linter, mypy type checker
- **TypeScript**: ESLint, Prettier
- **Commits**: Conventional commits (feat, fix, refactor, etc.)

### Pre-commit Hooks

```bash
# Install pre-commit
pip install pre-commit
pre-commit install

# Run manually
pre-commit run --all-files
```

---

## 📝 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📧 Support

- **Documentation**: [docs.viralvibe.ai](https://docs.viralvibe.ai)
- **Email**: support@viralvibe.ai
- **Discord**: [Join our community](https://discord.gg/viralvibe)

---

## 🙏 Acknowledgments

- WhisperX for accurate transcription
- Pyannote.audio for speaker detection
- Remotion for video rendering
- Modal for GPU infrastructure

---

Made with ❤️ by the ViralVibe Team
