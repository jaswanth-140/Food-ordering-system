# Contributing to ViralVibe

Thank you for your interest in contributing to ViralVibe! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other community members

## Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
git clone https://github.com/your-username/viralvibe-saas.git
cd viralvibe-saas
```

### 2. Install Dependencies

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install all dependencies
pnpm install

# Install Python dependencies
pip install -e .
```

### 3. Set Up Environment

```bash
# Copy environment template
cp .env.example .env

# Fill in your credentials
# - Supabase URL and keys
# - Modal tokens
# - OpenAI API key
# - AWS S3 credentials
```

### 4. Start Development

```bash
# Option 1: Using Docker
docker-compose up -d

# Option 2: Manual
# Terminal 1: Backend
cd apps/api && uvicorn main:app --reload

# Terminal 2: Frontend
cd apps/web && pnpm dev

# Terminal 3: Celery
cd apps/api && celery -A tasks.celery_app worker --loglevel=info
```

## Development Workflow

### Branch Naming

- `feat/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `refactor/what-changed` - Code refactoring
- `docs/what-updated` - Documentation updates
- `test/what-tested` - Test additions

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add virality scoring algorithm
fix: handle missing transcript data gracefully
refactor: extract clip processing into separate module
docs: update API documentation
test: add tests for video upload endpoint
chore: update dependencies
```

### Pull Request Process

1. **Create a branch** from `main`
2. **Make your changes** following code style guidelines
3. **Write/update tests** for your changes
4. **Run linting and tests** locally
5. **Push your branch** to your fork
6. **Create a Pull Request** to the main repository
7. **Address review feedback** if any

### Pull Request Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] All tests pass
- [ ] No linting errors
```

## Code Style Guidelines

### Python (Backend)

**Formatting**: Black with 100 character line length

```python
# Good
def process_video(video_id: str, youtube_url: str) -> dict:
    """Process video and return metadata"""
    logger.info(f"Processing video: {video_id}")
    return {"status": "success"}

# Bad
def process_video(video_id,youtube_url):
    logger.info("Processing video: "+video_id)
    return dict(status="success")
```

**Type Hints**: Always use type hints

```python
# Good
from typing import Optional, List

def get_clips(video_id: str, limit: int = 20) -> List[Clip]:
    pass

# Bad
def get_clips(video_id, limit=20):
    pass
```

**Pydantic Models**: Use for all API schemas

```python
from pydantic import BaseModel, Field

class VideoUploadRequest(BaseModel):
    youtube_url: HttpUrl
    title: str = Field(..., min_length=1, max_length=200)
```

### TypeScript (Frontend)

**Formatting**: Prettier with semicolons

```typescript
// Good
interface Video {
  id: string;
  title: string;
  status: VideoStatus;
}

export function VideoCard({ video }: { video: Video }) {
  return <div>{video.title}</div>;
}

// Bad
interface Video {
  id: string
  title: string
  status: VideoStatus
}

export function VideoCard({video}) {
  return <div>{video.title}</div>
}
```

**React Components**: Use Server Components by default

```typescript
// Server Component (default)
export default async function DashboardPage() {
  const videos = await getVideos();
  return <VideoGrid videos={videos} />;
}

// Client Component (when needed)
'use client';
export function VideoCard({ video }: { video: Video }) {
  const [isHovered, setIsHovered] = useState(false);
  // ...
}
```

**Custom Hooks**: Prefix with `use`

```typescript
export function useVideoStatus(videoId: string) {
  return useQuery({
    queryKey: ['video', videoId],
    queryFn: () => api.getVideo(videoId),
    refetchInterval: 3000,
  });
}
```

## Testing

### Backend Tests

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=. --cov-report=html

# Run specific test file
pytest tests/test_videos.py

# Run specific test
pytest tests/test_videos.py::test_upload_video
```

**Writing Tests**:

```python
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_upload_video():
    response = client.post(
        "/api/videos/upload",
        json={"youtube_url": "https://youtube.com/watch?v=test"}
    )
    assert response.status_code == 200
    assert "video_id" in response.json()
```

### Frontend Tests

```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test --coverage

# Run in watch mode
pnpm test --watch
```

**Writing Tests**:

```typescript
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';

describe('VideoCard', () => {
  it('renders video title', () => {
    const video = { id: '1', title: 'Test Video', status: 'complete' };
    render(<VideoCard video={video} />);
    expect(screen.getByText('Test Video')).toBeInTheDocument();
  });
});
```

## Documentation

### Code Comments

Only comment complex logic:

```python
# Good (complex logic)
# Calculate virality using weighted scores:
# 40% hooks (engagement triggers)
# 30% audio (energy and dynamics)
# 30% visual (motion and saliency)
virality = 0.4 * hooks + 0.3 * audio + 0.3 * visual

# Bad (obvious)
# Set user_id to the current user's ID
user_id = current_user.id
```

### API Documentation

Use docstrings:

```python
@router.post("/upload")
async def upload_video(request: VideoUploadRequest):
    """
    Upload a video for processing
    
    Args:
        request: Video upload data containing URL or file
    
    Returns:
        VideoResponse with video_id and initial status
    
    Raises:
        HTTPException: If upload fails or URL is invalid
    """
    pass
```

### README Updates

Update README.md when:
- Adding new features
- Changing setup process
- Adding new dependencies
- Modifying architecture

## Performance Guidelines

### Backend

- Use `async`/`await` for I/O operations
- Implement pagination for list endpoints
- Add database indexes for frequently queried columns
- Use Redis for caching when appropriate

### Frontend

- Use Server Components by default
- Implement code splitting for large components
- Optimize images with `next/image`
- Use React Query for data fetching

### Database

- Add indexes on foreign keys and frequently queried columns
- Use EXPLAIN ANALYZE to optimize slow queries
- Implement connection pooling

## Security

### Never Commit Secrets

```bash
# Add to .gitignore
.env
.env.local
*.env
```

### Input Validation

Always validate user inputs:

```python
from pydantic import BaseModel, Field, validator

class VideoUploadRequest(BaseModel):
    youtube_url: HttpUrl
    
    @validator('youtube_url')
    def validate_youtube_url(cls, v):
        if 'youtube.com' not in str(v) and 'youtu.be' not in str(v):
            raise ValueError('Must be a YouTube URL')
        return v
```

### SQL Injection Prevention

Always use parameterized queries:

```python
# Good (SQLAlchemy)
result = await db.execute(
    select(Video).where(Video.id == video_id)
)

# Bad (raw SQL)
result = await db.execute(
    f"SELECT * FROM videos WHERE id = '{video_id}'"
)
```

## Common Issues

### Port Already in Use

```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Database Connection Issues

```bash
# Check PostgreSQL is running
docker ps | grep postgres

# Restart PostgreSQL
docker-compose restart postgres
```

### Celery Not Picking Up Tasks

```bash
# Check Redis is running
docker ps | grep redis

# Restart Celery worker
docker-compose restart celery-worker
```

## Getting Help

- **Documentation**: Check README.md and ARCHITECTURE.md first
- **GitHub Issues**: Search existing issues or create a new one
- **Discord**: Join our community Discord server
- **Email**: support@viralvibe.ai for sensitive issues

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project README

Thank you for contributing to ViralVibe! 🎬
