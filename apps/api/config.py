"""
ViralVibe API Configuration
"""

from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    """Application settings"""
    
    # API Settings
    API_HOST: str = "0.0.0.0"
    API_PORT: int = 8000
    API_WORKERS: int = 4
    API_RELOAD: bool = True
    API_SECRET_KEY: str = "change-this-in-production"
    
    # Environment
    PYTHON_ENV: str = "development"
    DEBUG: bool = True
    
    # CORS
    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:8000"]
    
    # Database (Supabase)
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/viralvibe"
    SUPABASE_URL: str = ""
    SUPABASE_ANON_KEY: str = ""
    SUPABASE_SERVICE_KEY: str = ""
    
    # Redis & Celery
    REDIS_URL: str = "redis://localhost:6379"
    CELERY_BROKER_URL: str = "redis://localhost:6379/0"
    CELERY_RESULT_BACKEND: str = "redis://localhost:6379/1"
    
    # Modal
    MODAL_TOKEN_ID: str = ""
    MODAL_TOKEN_SECRET: str = ""
    MODAL_ENVIRONMENT: str = "main"
    
    # AWS S3
    AWS_ACCESS_KEY_ID: str = ""
    AWS_SECRET_ACCESS_KEY: str = ""
    AWS_S3_BUCKET: str = "viralvibe-videos"
    AWS_S3_REGION: str = "us-east-1"
    AWS_S3_SIGNED_URL_EXPIRY: int = 86400
    
    # OpenAI
    OPENAI_API_KEY: str = ""
    OPENAI_MODEL: str = "gpt-4o"
    
    # Remotion
    REMOTION_WEBHOOK_SECRET: str = ""
    REMOTION_LICENSE_KEY: str = ""
    
    # Monitoring
    SENTRY_DSN: str = ""
    LOG_LEVEL: str = "INFO"
    
    class Config:
        env_file = ".env"
        case_sensitive = True


# Global settings instance
settings = Settings()
