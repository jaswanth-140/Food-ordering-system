-- ViralVibe Database Migration: Videos Table

CREATE TABLE IF NOT EXISTS public.videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    youtube_url TEXT,
    title TEXT NOT NULL,
    description TEXT,
    duration_seconds INTEGER,
    status TEXT DEFAULT 'queued' CHECK (status IN ('queued', 'downloading', 'transcribing', 'scoring', 'complete', 'error')),
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    clips_count INTEGER DEFAULT 0,
    error_message TEXT,
    modal_response JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own videos
CREATE POLICY "Users can view own videos" 
    ON public.videos FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own videos" 
    ON public.videos FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own videos" 
    ON public.videos FOR UPDATE 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own videos" 
    ON public.videos FOR DELETE 
    USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_videos_user_id ON public.videos(user_id);
CREATE INDEX IF NOT EXISTS idx_videos_status ON public.videos(status);
CREATE INDEX IF NOT EXISTS idx_videos_created_at ON public.videos(created_at DESC);

-- Trigger to update updated_at timestamp
CREATE TRIGGER update_videos_updated_at
    BEFORE UPDATE ON public.videos
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Comment on table
COMMENT ON TABLE public.videos IS 'Stores user-uploaded videos and their processing status';
COMMENT ON COLUMN public.videos.status IS 'Processing status: queued, downloading, transcribing, scoring, complete, error';
COMMENT ON COLUMN public.videos.progress IS 'Processing progress percentage (0-100)';
COMMENT ON COLUMN public.videos.modal_response IS 'Complete JSON response from Modal video processing';
