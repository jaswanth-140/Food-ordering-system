# ViralVibe Worker - Modal GPU Functions

GPU-accelerated video processing pipeline running on Modal.

## Overview

This package contains Modal functions for:

- **Video Download**: yt-dlp integration for YouTube videos
- **Transcription**: WhisperX for word-level accuracy
- **Speaker Detection**: Pyannote.audio active speaker detection
- **Audio Analysis**: RMS energy calculation with Librosa
- **Visual Analysis**: Motion detection with OpenCV
- **Hook Extraction**: LLM-powered engagement analysis

## Setup

### 1. Install Modal

```bash
pip install modal
```

### 2. Authenticate

```bash
modal token new
```

### 3. Test Locally

```bash
modal run video_processor.py
```

### 4. Deploy to Modal

```bash
modal deploy video_processor.py
```

## Architecture

```
Video URL → Download → Extract Audio
                ↓
        WhisperX Transcription
                ↓
   ┌────────────┴────────────┐
   ↓                         ↓
Speaker Detection    Audio Analysis
   ↓                         ↓
Visual Saliency         Hook Extraction
   ↓                         ↓
   └────────────┬────────────┘
                ↓
         Return Complete Data
```

## Functions

### `download_and_process_video(youtube_url: str) -> dict`

Main entry point that orchestrates the entire pipeline.

**Returns:**
```python
{
    "success": True,
    "transcripts": [
        {
            "text": "Hello world",
            "start": 0.5,
            "end": 1.2,
            "speaker_label": "SPEAKER_00",
            "word_timestamps": [
                {"word": "Hello", "start": 0.5, "end": 0.8},
                {"word": "world", "start": 0.9, "end": 1.2}
            ]
        }
    ],
    "speaker_detections": [
        {
            "timestamp": 0.5,
            "speaker_id": "SPEAKER_00",
            "bbox": {"x": 0.3, "y": 0.2, "w": 0.4, "h": 0.6},
            "confidence": 0.95
        }
    ],
    "audio_energy": [0.45, 0.62, 0.38, ...],  # Per-second RMS
    "visual_saliency": [0.23, 0.71, 0.89, ...],  # Per-second motion
    "hooks": [
        {
            "text": "You won't believe what happens next",
            "timestamp": 12.5,
            "hook_type": "cliffhanger"
        }
    ],
    "video_metadata": {
        "duration": 300,
        "fps": 30
    }
}
```

## GPU Configuration

- **GPU Type**: A40 (40GB VRAM)
- **Memory**: 16GB RAM
- **Timeout**: 1 hour
- **Retries**: 2

## Helper Modules

### `yt_dlp_downloader.py`
- Download videos from YouTube
- Extract audio tracks
- Handle various formats

### `whisperx_processor.py`
- Word-level transcription
- Speaker diarization
- Timestamp alignment

### `pyannote_asd.py`
- Active speaker detection
- Face bounding boxes
- Confidence scores

### `audio_analyzer.py`
- RMS energy calculation
- Dynamic range analysis
- Normalization

### `visual_analyzer.py`
- Optical flow analysis
- Frame differencing
- Motion intensity

### `llm_analyzer.py`
- GPT-4o hook extraction
- Engagement scoring
- Emotional analysis

## Environment Variables

```bash
OPENAI_API_KEY=sk-...
HUGGINGFACE_TOKEN=hf_...  # For Pyannote models
```

## Development

### Run Tests

```bash
pytest tests/
```

### Debug Locally

```bash
python video_processor.py
```

## Performance

- **Average Processing Time**: 5-10 minutes per hour of video
- **Cost**: ~$0.10-0.30 per video hour (Modal GPU pricing)
- **Throughput**: 6-12 videos/hour per worker

## TODO

- [ ] Implement yt_dlp_downloader.py
- [ ] Implement whisperx_processor.py
- [ ] Implement pyannote_asd.py
- [ ] Implement audio_analyzer.py
- [ ] Implement visual_analyzer.py
- [ ] Implement llm_analyzer.py
- [ ] Add comprehensive error handling
- [ ] Add progress callbacks
- [ ] Optimize GPU memory usage
- [ ] Add video quality selection
