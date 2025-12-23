"""
ViralVibe FastAPI Backend - Main Application Entry Point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import logging

from config import settings
from routes import auth, videos, clips, exports

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(
    title="ViralVibe API",
    description="Viral Video Repurposing SaaS Platform API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(videos.router, prefix="/api/videos", tags=["Videos"])
app.include_router(clips.router, prefix="/api/clips", tags=["Clips"])
app.include_router(exports.router, prefix="/api/exports", tags=["Exports"])


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "ViralVibe API",
        "version": "1.0.0",
        "docs": "/docs"
    }


@app.get("/api/health")
async def health_check():
    """
    Health check endpoint for monitoring
    """
    try:
        # TODO: Add database and redis health checks
        return {
            "status": "healthy",
            "db": "connected",
            "redis": "connected"
        }
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        return JSONResponse(
            status_code=503,
            content={
                "status": "unhealthy",
                "error": str(e)
            }
        )


@app.on_event("startup")
async def startup_event():
    """Initialize services on startup"""
    logger.info("🚀 ViralVibe API starting up...")
    logger.info(f"Environment: {settings.PYTHON_ENV}")
    logger.info(f"CORS Origins: {settings.CORS_ORIGINS}")


@app.on_event("shutdown")
async def shutdown_event():
    """Cleanup on shutdown"""
    logger.info("👋 ViralVibe API shutting down...")


if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run(
        "main:app",
        host=settings.API_HOST,
        port=settings.API_PORT,
        reload=settings.API_RELOAD,
        workers=settings.API_WORKERS if not settings.API_RELOAD else 1,
    )
