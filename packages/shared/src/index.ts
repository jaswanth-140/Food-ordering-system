/**
 * ViralVibe Shared TypeScript Types
 * 
 * Shared between frontend and backend for type safety
 */

// =============================================================================
// Enums
// =============================================================================

export enum VideoStatus {
  QUEUED = 'queued',
  DOWNLOADING = 'downloading',
  TRANSCRIBING = 'transcribing',
  SCORING = 'scoring',
  COMPLETE = 'complete',
  ERROR = 'error',
}

export enum ExportStatus {
  RENDERING = 'rendering',
  UPLOADING = 'uploading',
  COMPLETE = 'complete',
  ERROR = 'error',
}

export enum LayoutType {
  SINGLE_SPEAKER = 'single_speaker',
  SPLIT_SCREEN = 'split_screen',
  PICTURE_IN_PICTURE = 'picture_in_picture',
  DYNAMIC = 'dynamic',
}

// =============================================================================
// User Types
// =============================================================================

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  created_at: string;
}

export interface AuthResponse {
  access_token: string;
  user_id: string;
  user: User;
}

// =============================================================================
// Video Types
// =============================================================================

export interface Video {
  id: string;
  user_id: string;
  youtube_url?: string;
  title: string;
  description?: string;
  duration_seconds?: number;
  status: VideoStatus;
  progress: number;
  clips_count: number;
  error_message?: string;
  created_at: string;
  updated_at: string;
}

export interface VideoUploadRequest {
  youtube_url?: string;
  title?: string;
}

// =============================================================================
// Clip Types
// =============================================================================

export interface Clip {
  id: string;
  video_id: string;
  clip_index: number;
  virality_score: number;
  layout_type: LayoutType;
  start_time: number;
  end_time: number;
  duration: number;
  created_at: string;
}

export interface ClipMetadata {
  hook_score: number;
  audio_score: number;
  visual_score: number;
  hooks: Hook[];
  audio_rms: number[];
  visual_saliency: number[];
}

export interface ClipDetail extends Clip {
  metadata: ClipMetadata;
  transcripts: TranscriptSegment[];
  speaker_detections: SpeakerDetection[];
}

// =============================================================================
// Transcript Types
// =============================================================================

export interface WordTimestamp {
  word: string;
  start: number;
  end: number;
  speaker?: string;
}

export interface TranscriptSegment {
  text: string;
  start: number;
  end: number;
  speaker_label?: string;
  word_timestamps: WordTimestamp[];
}

export interface SpeakerDetection {
  timestamp: number;
  speaker_id: string;
  bbox: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  confidence: number;
}

export interface Hook {
  text: string;
  timestamp: number;
  hook_type: 'question' | 'cliffhanger' | 'emotional' | 'surprise' | 'call_to_action';
  score: number;
}

// =============================================================================
// Export Types
// =============================================================================

export interface Export {
  id: string;
  clip_id: string;
  user_id: string;
  format: 'mp4' | 'webm' | 'mov';
  quality: '720p' | '1080p' | '4K';
  status: ExportStatus;
  s3_url?: string;
  download_url?: string;
  error_message?: string;
  created_at: string;
  completed_at?: string;
}

export interface ExportRequest {
  format: 'mp4' | 'webm' | 'mov';
  quality: '720p' | '1080p' | '4K';
}

// =============================================================================
// Modal Response Types
// =============================================================================

export interface ModalVideoProcessingResponse {
  success: boolean;
  transcripts: TranscriptSegment[];
  speaker_detections: SpeakerDetection[];
  audio_energy: number[];
  visual_saliency: number[];
  hooks: Hook[];
  video_metadata: {
    duration: number;
    fps: number;
  };
  error?: string;
  timestamp: string;
}

// =============================================================================
// API Response Types
// =============================================================================

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// =============================================================================
// Error Types
// =============================================================================

export interface ApiError {
  detail: string;
  error_code?: string;
  timestamp: string;
}

// =============================================================================
// Health Check Types
// =============================================================================

export interface HealthCheck {
  status: 'healthy' | 'unhealthy';
  db: 'connected' | 'disconnected';
  redis: 'connected' | 'disconnected';
}
