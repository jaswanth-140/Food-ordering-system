"""
Authentication Routes
"""

from fastapi import APIRouter, HTTPException, status
from models import UserCreate, UserLogin, AuthResponse, ErrorResponse
import logging

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post("/signup", response_model=AuthResponse, responses={400: {"model": ErrorResponse}})
async def signup(user_data: UserCreate):
    """
    Register a new user
    
    - **email**: User email address
    - **password**: User password (min 8 characters)
    - **full_name**: User's full name
    """
    try:
        # TODO: Implement Supabase user creation
        logger.info(f"User signup attempt: {user_data.email}")
        
        # Placeholder response
        raise HTTPException(
            status_code=status.HTTP_501_NOT_IMPLEMENTED,
            detail="Signup endpoint not yet implemented. Connect Supabase Auth."
        )
    except Exception as e:
        logger.error(f"Signup error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Signup failed"
        )


@router.post("/login", response_model=AuthResponse, responses={401: {"model": ErrorResponse}})
async def login(credentials: UserLogin):
    """
    Authenticate user and return JWT token
    
    - **email**: User email address
    - **password**: User password
    """
    try:
        # TODO: Implement Supabase authentication
        logger.info(f"Login attempt: {credentials.email}")
        
        # Placeholder response
        raise HTTPException(
            status_code=status.HTTP_501_NOT_IMPLEMENTED,
            detail="Login endpoint not yet implemented. Connect Supabase Auth."
        )
    except Exception as e:
        logger.error(f"Login error: {e}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
