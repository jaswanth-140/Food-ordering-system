-- ViralVibe Database Migration: Transcripts Table

CREATE TABLE IF NOT EXISTS public.transcripts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clip_id UUID NOT NULL REFERENCES public.clips(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    speaker_labels TEXT[] DEFAULT '{}',
    word_timestamps JSONB NOT NULL DEFAULT '[]',
    speaker_data JSONB NOT NULL DEFAULT '[]',
    audio_rms FLOAT[] DEFAULT '{}',
    visual_saliency FLOAT[] DEFAULT '{}',
    hooks JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.transcripts ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access transcripts from their own clips
CREATE POLICY "Users can view transcripts from own clips" 
    ON public.transcripts FOR SELECT 
    USING (
        clip_id IN (
            SELECT c.id FROM public.clips c
            JOIN public.videos v ON c.video_id = v.id
            WHERE v.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert transcripts for own clips" 
    ON public.transcripts FOR INSERT 
    WITH CHECK (
        clip_id IN (
            SELECT c.id FROM public.clips c
            JOIN public.videos v ON c.video_id = v.id
            WHERE v.user_id = auth.uid()
        )
    );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_transcripts_clip_id ON public.transcripts(clip_id);

-- Unique constraint: one transcript per clip
CREATE UNIQUE INDEX IF NOT EXISTS idx_transcripts_clip_unique ON public.transcripts(clip_id);

-- Full-text search index on transcript text
CREATE INDEX IF NOT EXISTS idx_transcripts_text_search ON public.transcripts USING GIN (to_tsvector('english', text));

-- Comment on table
COMMENT ON TABLE public.transcripts IS 'Stores detailed transcript data for clips including word timestamps and speaker information';
COMMENT ON COLUMN public.transcripts.word_timestamps IS 'Array of {word, start, end, speaker} objects for karaoke captions';
COMMENT ON COLUMN public.transcripts.speaker_data IS 'Active speaker detection data with bounding boxes';
COMMENT ON COLUMN public.transcripts.audio_rms IS 'Audio RMS energy values per second for visualization';
COMMENT ON COLUMN public.transcripts.visual_saliency IS 'Visual motion/saliency scores per second';
COMMENT ON COLUMN public.transcripts.hooks IS 'LLM-identified engagement hooks with timestamps';
