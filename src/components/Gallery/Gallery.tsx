import { useState } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { galleryImages } from '../../data/gallery';
import './Gallery.css';

export default function Gallery() {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (galleryImages.length === 0) return null;

  return (
    <section id="gallery" className="section gallery">
      <div className="section__inner" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`reveal${isVisible ? ' reveal--visible' : ''}`}>
          <p className="section__label">Gallery</p>
          <h2 className="section__title">Photos</h2>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              className={`gallery__item reveal reveal--delay-${Math.min(i + 1, 6)}${isVisible ? ' reveal--visible' : ''}`}
              onClick={() => setLightbox(img.src)}
              aria-label={`View photo: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} className="gallery__img" loading="lazy" />
              <span className="gallery__overlay" aria-hidden="true">
                <span className="gallery__overlay-icon">⤢</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={() => setLightbox(null)}
        >
          <button className="gallery__lightbox-close" aria-label="Close lightbox">✕</button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="gallery__lightbox-img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
