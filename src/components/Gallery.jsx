import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

function Gallery({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxOpen, goNext, goPrev]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="gallery" id="image-gallery">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`lightbox ${lightboxOpen ? 'open' : ''}`}
        onClick={closeLightbox}
        id="image-lightbox"
      >
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">✕</button>
        <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Anterior">‹</button>
        <img
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt}
          onClick={(e) => e.stopPropagation()}
        />
        <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Siguiente">›</button>
        <div className="lightbox-counter">{currentIndex + 1} / {images.length}</div>
      </div>
    </>
  );
}

export default Gallery;
