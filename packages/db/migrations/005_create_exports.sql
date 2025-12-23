-- ViralVibe Database Migration: Exports Table

CREATE TABLE IF NOT EXISTS public.exports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clip_id UUID NOT NULL REFERENCES public.clips(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    format TEXT DEFAULT 'mp4' CHECK (format IN ('mp4', 'webm', 'mov')),
    quality TEXT DEFAULT '1080p' CHECK (quality IN ('720p', '1080p', '4K')),
    status TEXT DEFAULT 'rendering' CHECK (status IN ('rendering', 'uploading', 'complete', 'error')),
    s3_url TEXT,
    download_url TEXT,
    error_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.exports ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own exports
CREATE POLICY "Users can view own exports" 
    ON public.exports FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own exports" 
    ON public.exports FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own exports" 
    ON public.exports FOR DELETE 
    USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_exports_clip_id ON public.exports(clip_id);
CREATE INDEX IF NOT EXISTS idx_exports_user_id ON public.exports(user_id);
CREATE INDEX IF NOT EXISTS idx_exports_status ON public.exports(status);
CREATE INDEX IF NOT EXISTS idx_exports_created_at ON public.exports(created_at DESC);

-- Comment on table
COMMENT ON TABLE public.exports IS 'Stores export jobs for video clips with download URLs';
COMMENT ON COLUMN public.exports.status IS 'Export status: rendering, uploading, complete, error';
COMMENT ON COLUMN public.exports.s3_url IS 'Permanent S3 storage URL';
COMMENT ON COLUMN public.exports.download_url IS 'Signed download URL (expires after 24h)';
