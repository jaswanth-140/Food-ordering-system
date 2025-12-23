# 🚀 ViralVibe SaaS - Quick Start Guide

**5-Minute Setup Guide**

---

## Prerequisites

✅ Node.js >= 20.0.0  
✅ Python >= 3.10  
✅ pnpm >= 8.0.0  
✅ Docker (optional but recommended)

---

## Quick Setup

### 1. Install Dependencies (30 seconds)

```bash
pnpm install
pip install -e .
```

### 2. Configure Environment (1 minute)

```bash
cp .env.example .env
# Edit .env with your credentials:
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY
# - SUPABASE_SERVICE_KEY
# - DATABASE_URL
# - OPENAI_API_KEY
# - MODAL_TOKEN_ID
# - MODAL_TOKEN_SECRET
# - AWS credentials
```

### 3. Start Development (10 seconds)

**Option A: Docker (Easiest)**
```bash
docker-compose up -d
```

**Option B: Manual**
```bash
# Terminal 1: Backend
cd apps/api
uvicorn main:app --reload

# Terminal 2: Frontend  
cd apps/web
pnpm dev

# Terminal 3: Worker
cd apps/api
celery -A tasks.celery_app worker --loglevel=info
```

---

## Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **API ReDoc**: http://localhost:8000/redoc

---

## Useful Commands

### Development
```bash
pnpm dev              # Start all services
pnpm dev:web          # Frontend only
pnpm dev:api          # Backend only
```

### Build
```bash
pnpm build            # Build all
pnpm build:web        # Frontend only
```

### Testing
```bash
pnpm test             # Run all tests
pytest                # Backend tests
```

### Docker
```bash
docker-compose up -d       # Start services
docker-compose down        # Stop services
docker-compose logs -f     # View logs
docker-compose restart     # Restart services
```

---

## Project Structure

```
viralvibe-saas/
├── apps/
│   ├── web/           → Next.js Frontend
│   └── api/           → FastAPI Backend
├── packages/
│   ├── worker/        → Modal GPU Functions
│   ├── shared/        → TypeScript Types
│   └── db/            → Database Migrations
```

---

## Common Tasks

### Run Database Migrations
```bash
# See packages/db/README.md
# Use Supabase CLI or SQL editor to run migrations
```

### Deploy Modal Worker
```bash
cd packages/worker
modal deploy video_processor.py
```

### Check Types
```bash
pnpm type-check
```

### Lint Code
```bash
pnpm lint
```

### Format Code
```bash
pnpm format
```

---

## Need More Help?

| Question | See |
|----------|-----|
| How do I set up the project? | `README.md` |
| What's the architecture? | `ARCHITECTURE.md` |
| How do I contribute? | `CONTRIBUTING.md` |
| What needs to be done? | `TODO.md` |
| What's the current status? | `PROJECT_STATUS.md` |
| What are the coding standards? | `.cursorrules` |

---

## Support Services Setup

### Supabase
1. Go to https://app.supabase.com
2. Create new project
3. Run migrations from `packages/db/migrations/`
4. Copy URL and keys to `.env`

### Modal
1. Go to https://modal.com
2. Create account
3. Run `modal token new`
4. Copy tokens to `.env`

### AWS S3
1. Create S3 bucket
2. Configure CORS
3. Create IAM user with S3 access
4. Copy credentials to `.env`

---

## Troubleshooting

### Port Already in Use
```bash
lsof -ti:3000 | xargs kill -9  # Frontend
lsof -ti:8000 | xargs kill -9  # Backend
```

### Database Connection Failed
```bash
docker-compose restart postgres
```

### Celery Not Starting
```bash
docker-compose restart redis
docker-compose restart celery-worker
```

---

## Next Steps After Setup

1. ✅ Verify all services are running
2. ✅ Check http://localhost:3000 loads
3. ✅ Check http://localhost:8000/docs loads
4. ✅ Review `TODO.md` for implementation tasks
5. ✅ Start with Phase 2: Backend Implementation

---

**Ready to Build!** 🎬

For detailed information, see `README.md` and `ARCHITECTURE.md`.
