"""
Pydantic Models for Request/Response Validation
"""

from pydantic import BaseModel, Field, HttpUrl
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum


# =============================================================================
# Enums
# =============================================================================

class VideoStatus(str, Enum):
    """Video processing status"""
    QUEUED = "queued"
    DOWNLOADING = "downloading"
    TRANSCRIBING = "transcribing"
    SCORING = "scoring"
    COMPLETE = "complete"
    ERROR = "error"


class ExportStatus(str, Enum):
    """Export job status"""
    RENDERING = "rendering"
    UPLOADING = "uploading"
    COMPLETE = "complete"
    ERROR = "error"


class LayoutType(str, Enum):
    """Clip layout types"""
    SINGLE_SPEAKER = "single_speaker"
    SPLIT_SCREEN = "split_screen"
    PICTURE_IN_PICTURE = "picture_in_picture"
    DYNAMIC = "dynamic"


# =============================================================================
# User Models
# =============================================================================

class UserCreate(BaseModel):
    """User registration request"""
    email: str = Field(..., description="User email address")
    password: str = Field(..., min_length=8, description="User password (min 8 chars)")
    full_name: str = Field(..., min_length=1, description="User full name")


class UserLogin(BaseModel):
    """User login request"""
    email: str = Field(..., description="User email address")
    password: str = Field(..., description="User password")


class UserResponse(BaseModel):
    """User data response"""
    id: str
    email: str
    full_name: str
    created_at: datetime

    class Config:
        from_attributes = True


class AuthResponse(BaseModel):
    """Authentication response"""
    access_token: str
    user_id: str
    user: UserResponse


# =============================================================================
# Video Models
# =============================================================================

class VideoUploadRequest(BaseModel):
    """Video upload request"""
    youtube_url: Optional[HttpUrl] = Field(None, description="YouTube video URL")
    title: Optional[str] = Field(None, max_length=200, description="Video title")


class VideoResponse(BaseModel):
    """Video list item response"""
    id: str
    title: str
    status: VideoStatus
    clips_count: int
    duration_seconds: Optional[int]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class VideoDetailResponse(VideoResponse):
    """Detailed video response"""
    description: Optional[str]
    youtube_url: Optional[str]
    progress: int = Field(0, ge=0, le=100, description="Processing progress (0-100)")
    error_message: Optional[str]


# =============================================================================
# Clip Models
# =============================================================================

class ClipResponse(BaseModel):
    """Clip list item response"""
    id: str
    video_id: str
    clip_index: int
    virality_score: float = Field(..., ge=0.0, le=100.0)
    layout_type: LayoutType
    duration: float
    start_time: float
    end_time: float
    created_at: datetime

    class Config:
        from_attributes = True


class TranscriptData(BaseModel):
    """Transcript word-level data"""
    text: str
    start: float
    end: float
    speaker_label: Optional[str]
    word_timestamps: List[Dict[str, Any]]


class SpeakerDetectionData(BaseModel):
    """Speaker detection bounding box data"""
    timestamp: float
    speaker_id: str
    bbox: Dict[str, float]  # {x, y, w, h}
    confidence: float


class ClipMetadata(BaseModel):
    """Detailed clip metadata"""
    hook_score: float
    audio_score: float
    visual_score: float
    hooks: List[Dict[str, Any]]
    audio_rms: List[float]
    visual_saliency: List[float]


class ClipDetailResponse(ClipResponse):
    """Detailed clip response with all metadata"""
    metadata: ClipMetadata
    transcripts: List[TranscriptData]
    speaker_detections: List[SpeakerDetectionData]


# =============================================================================
# Export Models
# =============================================================================

class ExportRequest(BaseModel):
    """Export request"""
    format: str = Field("mp4", description="Video format (mp4, webm)")
    quality: str = Field("1080p", description="Video quality (720p, 1080p, 4K)")


class ExportResponse(BaseModel):
    """Export job response"""
    id: str
    clip_id: str
    status: ExportStatus
    format: str
    quality: str
    download_url: Optional[str]
    created_at: datetime
    completed_at: Optional[datetime]
    error_message: Optional[str]

    class Config:
        from_attributes = True


# =============================================================================
# Error Models
# =============================================================================

class ErrorResponse(BaseModel):
    """Standard error response"""
    detail: str
    error_code: Optional[str]
    timestamp: datetime = Field(default_factory=datetime.now)


# =============================================================================
# Health Check Models
# =============================================================================

class HealthResponse(BaseModel):
    """Health check response"""
    status: str
    db: str
    redis: str
