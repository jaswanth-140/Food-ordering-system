# ViralVibe Database Migrations

Supabase PostgreSQL migrations for the ViralVibe platform.

## Schema Overview

### Tables

1. **users** - User profiles (extends Supabase Auth)
2. **videos** - Uploaded videos and processing status
3. **clips** - Generated clips with virality scores
4. **transcripts** - Detailed transcript data with word timestamps
5. **exports** - Export jobs and download URLs

## Entity Relationships

```
auth.users (Supabase Auth)
    ↓
public.users (profile data)
    ↓
videos (user uploads)
    ↓
clips (generated segments)
    ↓
transcripts (detailed data)
    ↓
exports (rendered videos)
```

## Row-Level Security (RLS)

All tables have RLS enabled with policies ensuring:

- Users can only access their own data
- No cross-user data leakage
- Service role can perform admin operations

## Running Migrations

### Option 1: Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Initialize project
supabase init

# Link to your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### Option 2: Supabase Dashboard

1. Go to https://app.supabase.com
2. Select your project
3. Navigate to SQL Editor
4. Run each migration file in order (001, 002, 003, etc.)

### Option 3: Direct PostgreSQL

```bash
psql $DATABASE_URL -f migrations/001_create_users.sql
psql $DATABASE_URL -f migrations/002_create_videos.sql
psql $DATABASE_URL -f migrations/003_create_clips.sql
psql $DATABASE_URL -f migrations/004_create_transcripts.sql
psql $DATABASE_URL -f migrations/005_create_exports.sql
```

## Migration Order

**IMPORTANT**: Run migrations in numerical order:

1. `001_create_users.sql` - User profiles
2. `002_create_videos.sql` - Videos table
3. `003_create_clips.sql` - Clips table (depends on videos)
4. `004_create_transcripts.sql` - Transcripts table (depends on clips)
5. `005_create_exports.sql` - Exports table (depends on clips)

## Indexes

All tables are optimized with indexes for:

- Primary keys (automatic)
- Foreign keys
- Frequently queried columns (status, created_at)
- Sort columns (virality_score, created_at)
- Full-text search (transcript text)

## Triggers

### Auto-Update Timestamps

All tables with `updated_at` columns have triggers to automatically update the timestamp on row updates.

### Auto-Create User Profile

When a user signs up via Supabase Auth, a trigger automatically creates their profile in `public.users`.

## Sample Queries

### Get User's Videos

```sql
SELECT * FROM videos
WHERE user_id = auth.uid()
ORDER BY created_at DESC;
```

### Get Clips for Video (Sorted by Virality)

```sql
SELECT * FROM clips
WHERE video_id = 'video-uuid'
ORDER BY virality_score DESC;
```

### Get Complete Clip Data

```sql
SELECT 
    c.*,
    t.text,
    t.word_timestamps,
    t.speaker_data,
    t.hooks
FROM clips c
LEFT JOIN transcripts t ON t.clip_id = c.id
WHERE c.id = 'clip-uuid';
```

### Get User's Export History

```sql
SELECT 
    e.*,
    c.virality_score,
    c.duration
FROM exports e
JOIN clips c ON c.id = e.clip_id
WHERE e.user_id = auth.uid()
ORDER BY e.created_at DESC;
```

## Backup & Restore

### Backup

```bash
pg_dump $DATABASE_URL > backup.sql
```

### Restore

```bash
psql $DATABASE_URL < backup.sql
```

## Development vs Production

### Development

Use local Supabase instance:

```bash
supabase start
```

### Production

Use hosted Supabase project with proper environment variables.

## Security Checklist

- [x] RLS enabled on all tables
- [x] Policies prevent cross-user access
- [x] Foreign key constraints for referential integrity
- [x] Check constraints for data validation
- [x] Service role for backend operations
- [x] Anon key for frontend operations

## TODO

- [ ] Add analytics tables (video views, clip shares)
- [ ] Add subscription/payment tables (Stripe integration)
- [ ] Add team/workspace tables (multi-user support)
- [ ] Add webhook logs table
- [ ] Add audit trail table
