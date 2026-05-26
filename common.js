/* ============================================ */
/* 2 ВИДЕО ВЕРТИКАЛЬНО, ЧЁРНО-БЕЛЫЕ, ПРИ НАВЕДЕНИИ ЦВЕТНЫЕ */
/* ============================================ */

.ai-videos-wrapper {
    flex: 1;
    min-width: 280px;
    display: flex;
    justify-content: center;
}

.ai-video-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 320px;
}

.ai-video-item {
    width: 100%;
    transition: filter 0.3s ease, transform 0.3s ease;
    cursor: pointer;
}

.ai-video-item:hover {
    transform: translateY(-4px);
}

.ai-video-frame-wrapper {
    position: relative;
    width: 100%;
    background: #0a0a0f;
    border-radius: 36px;
    overflow: hidden;
    border: 2px solid rgba(214, 41, 118, 0.3);
    transition: all 0.3s ease;
    box-shadow: 0 0 0 4px rgba(0,0,0,0.3), 0 20px 35px -15px rgba(0,0,0,0.5);
}

.ai-video-frame-wrapper:hover {
    border-color: var(--ig-pink);
    box-shadow: 0 0 0 4px rgba(0,0,0,0.3), 0 20px 35px -15px rgba(214, 41, 118, 0.3);
}

.video-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
}

.video-frame iframe {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover;
}

@media (max-width: 1024px) {
    .ai-design-grid {
        flex-direction: column;
    }
    .ai-cards-column {
        order: 1;
    }
    .ai-videos-wrapper {
        order: 2;
    }
    .ai-video-container {
        max-width: 400px;
        margin: 0 auto;
    }
    .ai-video-frame-wrapper {
        border-radius: 28px;
    }
}

@media (max-width: 768px) {
    .ai-video-container {
        max-width: 300px;
    }
    .ai-video-frame-wrapper {
        border-radius: 24px;
    }
}
