import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__inner">
        <div className={`hero__content${loaded ? ' hero__content--loaded' : ''}`}>
          <p className="hero__eyebrow">Vice President · Strategic Insights &amp; Data Office</p>
          <h1 className="hero__name">
            Walid<br />
            <span className="hero__name-bold">Matin</span>
          </h1>
          <p className="hero__company">Innovation Federal Credit Union</p>
          <p className="hero__tagline">
            Data, at its best, is more than numbers — it&apos;s how an organization learns to
            understand itself and make smarter decisions.
          </p>
          <div className="hero__actions">
            <a
              href="https://www.linkedin.com/in/walidmatin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary"
            >
              Connect on LinkedIn
            </a>
            <button className="hero__btn hero__btn--secondary" onClick={handleScroll}>
              View My Work ↓
            </button>
          </div>
        </div>

        <div className={`hero__photo-wrap${loaded ? ' hero__photo-wrap--loaded' : ''}`}>
          <div className="hero__photo" aria-hidden="true">
            <img
              src="/work-website/images/walid-hero.jpg"
              alt="Walid Matin"
              className="hero__photo-img"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="hero__photo-placeholder">
              <span className="hero__photo-initials">WM</span>
            </div>
          </div>
          <div className="hero__photo-ring" aria-hidden="true" />
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
