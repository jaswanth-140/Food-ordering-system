"""
Clips Routes
"""

from fastapi import APIRouter, HTTPException, status, Query
from typing import List, Optional
from models import ClipResponse, ClipDetailResponse, ErrorResponse
import logging

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("", response_model=List[ClipResponse])
async def list_clips(
    video_id: Optional[str] = Query(None, description="Filter by video ID"),
    sort: str = Query("virality", description="Sort by: virality, duration, created"),
    # user = Depends(get_current_user)  # TODO: Add auth dependency
):
    """
    List clips with optional filtering and sorting
    
    - **video_id**: Filter clips by video (optional)
    - **sort**: Sort order (virality, duration, created)
    """
    try:
        logger.info(f"Listing clips - video_id: {video_id}, sort: {sort}")
        
        # TODO: Fetch clips from database with filters
        
        return []
    except Exception as e:
        logger.error(f"List clips error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch clips"
        )


@router.get("/{clip_id}", response_model=ClipDetailResponse)
async def get_clip(
    clip_id: str,
    # user = Depends(get_current_user)  # TODO: Add auth dependency
):
    """
    Get detailed clip information including transcripts and metadata
    
    - **clip_id**: Clip UUID
    """
    try:
        logger.info(f"Fetching clip: {clip_id}")
        
        # TODO: Fetch clip from database with all metadata
        
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Clip not found"
        )
    except Exception as e:
        logger.error(f"Get clip error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch clip"
        )
