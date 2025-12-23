-- ViralVibe Database Migration: Clips Table

CREATE TABLE IF NOT EXISTS public.clips (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    video_id UUID NOT NULL REFERENCES public.videos(id) ON DELETE CASCADE,
    clip_index INTEGER NOT NULL,
    virality_score FLOAT NOT NULL CHECK (virality_score >= 0 AND virality_score <= 100),
    layout_type TEXT NOT NULL CHECK (layout_type IN ('single_speaker', 'split_screen', 'picture_in_picture', 'dynamic')),
    start_time FLOAT NOT NULL CHECK (start_time >= 0),
    end_time FLOAT NOT NULL CHECK (end_time > start_time),
    duration FLOAT GENERATED ALWAYS AS (end_time - start_time) STORED,
    metadata JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.clips ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access clips from their own videos
CREATE POLICY "Users can view clips from own videos" 
    ON public.clips FOR SELECT 
    USING (
        video_id IN (
            SELECT id FROM public.videos WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert clips for own videos" 
    ON public.clips FOR INSERT 
    WITH CHECK (
        video_id IN (
            SELECT id FROM public.videos WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Users can delete clips from own videos" 
    ON public.clips FOR DELETE 
    USING (
        video_id IN (
            SELECT id FROM public.videos WHERE user_id = auth.uid()
        )
    );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_clips_video_id ON public.clips(video_id);
CREATE INDEX IF NOT EXISTS idx_clips_virality_score ON public.clips(virality_score DESC);
CREATE INDEX IF NOT EXISTS idx_clips_created_at ON public.clips(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_clips_layout_type ON public.clips(layout_type);

-- Unique constraint: one clip_index per video
CREATE UNIQUE INDEX IF NOT EXISTS idx_clips_video_index ON public.clips(video_id, clip_index);

-- Comment on table
COMMENT ON TABLE public.clips IS 'Stores generated video clips with virality scores and metadata';
COMMENT ON COLUMN public.clips.virality_score IS 'Calculated virality score (0-100) based on hook, audio, and visual analysis';
COMMENT ON COLUMN public.clips.layout_type IS 'Video layout: single_speaker, split_screen, picture_in_picture, dynamic';
COMMENT ON COLUMN public.clips.metadata IS 'Complete clip metadata including scores, hooks, transcripts, etc.';
