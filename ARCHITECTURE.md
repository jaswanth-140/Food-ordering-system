# ViralVibe Architecture Documentation

## System Overview

ViralVibe is a full-stack SaaS platform for automated viral video repurposing, built as a monorepo with clear separation of concerns.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND LAYER                           │
│                     Next.js 14 (App Router)                      │
│                  React + TypeScript + Tailwind                   │
└──────────────────────────┬──────────────────────────────────────┘
                           │ REST API
                           │ (JWT Auth)
┌──────────────────────────▼──────────────────────────────────────┐
│                       BACKEND LAYER                              │
│                     FastAPI + Python 3.10                        │
│                   SQLAlchemy + Pydantic                          │
└─────┬──────────────────────┬──────────────────────┬─────────────┘
      │                      │                      │
      │ Postgres             │ Redis                │ Modal API
      │                      │                      │
┌─────▼────────┐   ┌────────▼────────┐   ┌────────▼─────────────┐
│   Supabase   │   │  Celery Queue   │   │  GPU Worker Layer    │
│  (Database   │   │  (Background    │   │  (Video Processing)  │
│   + Auth)    │   │   Tasks)        │   │                      │
└──────────────┘   └─────────────────┘   └──────────────────────┘
                                                     │
                                          ┌──────────▼──────────┐
                                          │    S3 Storage       │
                                          │  (Video Outputs)    │
                                          └─────────────────────┘
```

## Component Breakdown

### 1. Frontend (`/apps/web`)

**Technology**: Next.js 14 with App Router, TypeScript, Tailwind CSS

**Key Features**:
- Server-side rendering for SEO and performance
- Client-side state management with React Query
- Real-time updates via polling
- Remotion for video preview and rendering

**Directory Structure**:
```
apps/web/
├── src/
│   ├── app/
│   │   ├── (auth)/              # Authentication pages
│   │   │   ├── login/
│   │   │   └── signup/
│   │   └── (protected)/         # Protected routes
│   │       └── dashboard/
│   │           ├── page.tsx     # Video list
│   │           ├── upload/      # Upload interface
│   │           ├── video/[id]/  # Video detail
│   │           └── exports/     # Export management
│   ├── components/
│   │   ├── ui/                  # shadcn/ui primitives
│   │   ├── layouts/             # Layout components
│   │   └── Remotion/            # Video compositions
│   └── lib/
│       ├── api/                 # API client
│       ├── hooks/               # Custom hooks
│       └── utils/               # Helper functions
```

### 2. Backend (`/apps/api`)

**Technology**: FastAPI, Python 3.10, SQLAlchemy, Celery

**Key Features**:
- Async I/O for high concurrency
- Pydantic validation for all inputs
- JWT authentication
- Background task queue
- RESTful API design

**Directory Structure**:
```
apps/api/
├── main.py                      # FastAPI app entry
├── config.py                    # Settings & env vars
├── models.py                    # Pydantic schemas
├── database.py                  # Database connection
├── middleware/
│   └── auth.py                  # JWT validation
├── routes/
│   ├── auth.py                  # Authentication
│   ├── videos.py                # Video management
│   ├── clips.py                 # Clip gallery
│   └── exports.py               # Export jobs
├── tasks/
│   ├── celery_app.py            # Celery config
│   └── video_processing.py      # Background tasks
└── utils/
    ├── validators.py            # Input validation
    └── errors.py                # Error handling
```

### 3. GPU Worker (`/packages/worker`)

**Technology**: Modal, WhisperX, Pyannote, FFmpeg

**Key Features**:
- GPU-accelerated processing
- Automatic scaling
- Fault tolerance
- Progress tracking

**Processing Pipeline**:
```
1. Download Video (yt-dlp)
2. Extract Audio (FFmpeg)
3. Transcription (WhisperX) → Word-level timestamps
4. Speaker Detection (Pyannote) → Face bounding boxes
5. Audio Analysis (Librosa) → RMS energy
6. Visual Analysis (OpenCV) → Motion saliency
7. Hook Extraction (GPT-4o) → Engagement moments
8. Return Complete JSON → Backend
```

### 4. Database (`/packages/db`)

**Technology**: PostgreSQL (via Supabase)

**Schema**:
```sql
users (profile data)
  ↓
videos (uploaded content)
  ↓
clips (generated segments)
  ↓
transcripts (detailed data)
  ↓
exports (rendered outputs)
```

**Security**:
- Row-Level Security (RLS) on all tables
- Users can only access their own data
- Service role for backend operations
- Anon key for frontend operations

### 5. Shared Types (`/packages/shared`)

**Technology**: TypeScript

**Purpose**:
- Shared interfaces between frontend and backend
- Type safety across the monorepo
- Single source of truth for data structures

## Data Flow

### Video Upload Flow

```
1. User uploads YouTube URL via frontend
2. Frontend → POST /api/videos/upload
3. Backend creates video record (status: "queued")
4. Backend enqueues Celery task
5. Celery worker calls Modal function
6. Modal processes video on GPU
7. Modal returns complete data
8. Backend calculates virality scores
9. Backend creates clip records
10. Frontend polls for status updates
11. User views clips sorted by virality
```

### Clip Export Flow

```
1. User clicks "Export" on clip
2. Frontend → POST /api/clips/{id}/export
3. Backend creates export record (status: "rendering")
4. Backend enqueues export_clip_task
5. Celery worker calls Remotion render
6. Remotion generates MP4
7. Upload to S3
8. Generate signed URL (24h expiry)
9. Update export record (status: "complete")
10. User downloads video
```

## Virality Scoring Algorithm

Each clip receives a score (0-100) based on three factors:

```python
virality_score = (
    0.4 * hook_score +      # LLM-analyzed engagement hooks
    0.3 * audio_score +     # RMS energy and dynamics
    0.3 * visual_score      # Motion and visual saliency
) * 100
```

### Hook Score (40%)
- Questions to audience
- Cliffhangers
- Emotional moments
- Surprising statements
- Calls to action

### Audio Score (30%)
- RMS energy levels
- Dynamic range
- Speech clarity
- Background noise

### Visual Score (30%)
- Motion intensity
- Face presence
- Visual changes
- Scene transitions

## Authentication & Security

### JWT Flow

```
1. User logs in → POST /api/auth/login
2. Supabase validates credentials
3. Backend generates JWT token
4. Frontend stores token in localStorage
5. Frontend includes token in Authorization header
6. Backend validates token on protected routes
```

### Row-Level Security (RLS)

Every database query automatically filters by `user_id`:

```sql
-- Automatic filtering via RLS policy
SELECT * FROM videos WHERE user_id = auth.uid();
```

## Deployment Architecture

### Frontend (Vercel)
- Automatic deployments from main branch
- Edge network for global CDN
- Environment variables via dashboard

### Backend (Railway/Render)
- Docker container deployment
- Auto-scaling based on load
- Health check endpoint monitoring

### Worker (Modal)
- Serverless GPU functions
- Pay-per-use pricing
- Automatic scaling

### Database (Supabase)
- Managed PostgreSQL
- Automatic backups
- Connection pooling

## Performance Optimizations

### Frontend
- Server components by default
- Image optimization with next/image
- Code splitting
- React Query caching

### Backend
- Async I/O throughout
- Database connection pooling
- Redis caching
- Pagination on all list endpoints

### Database
- Indexes on frequently queried columns
- Materialized views for complex queries
- EXPLAIN ANALYZE for query optimization

## Monitoring & Logging

### Application Logs
- Structured logging with context
- Log levels: DEBUG, INFO, WARNING, ERROR
- Centralized via logging service

### Metrics
- API response times
- Video processing duration
- Error rates
- User activity

### Health Checks
- `/api/health` endpoint
- Database connectivity
- Redis connectivity
- Dependency status

## Scalability

### Horizontal Scaling
- Frontend: Automatic via Vercel
- Backend: Add more API instances
- Worker: Automatic via Modal
- Database: Read replicas

### Vertical Scaling
- Backend: Increase instance size
- Database: Upgrade plan
- Worker: Use larger GPU

## Failure Handling

### Retry Logic
- Celery tasks: 3 retries with exponential backoff
- Modal functions: 2 retries
- API requests: Frontend retry with exponential backoff

### Graceful Degradation
- If Modal fails: Show error, allow retry
- If transcription fails: Use fallback
- If database is slow: Show loading state

### Error Boundaries
- React error boundaries for UI crashes
- FastAPI exception handlers
- Database transaction rollbacks

## Future Enhancements

### Phase 2 (Q2 2024)
- Multi-user workspaces
- Team collaboration
- Advanced analytics
- Custom branding

### Phase 3 (Q3 2024)
- Real-time collaboration
- Live preview editing
- A/B testing for clips
- Social media scheduling

### Phase 4 (Q4 2024)
- Mobile app (React Native)
- Offline mode
- Advanced AI features
- Enterprise features
