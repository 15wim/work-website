import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" aria-label="Walid Matin — home">
          Walid <span className="nav__logo-bold">Matin</span>
        </Link>

        <nav className={`nav__links${menuOpen ? ' nav__links--open' : ''}`} aria-label="Main navigation">
          {navLinks.map(link =>
            link.isRoute ? (
              <Link key={link.label} to={link.href} className="nav__link">
                {link.label}
              </Link>
            ) : isHome ? (
              <a
                key={link.label}
                href={link.href}
                className="nav__link"
                onClick={e => handleAnchor(e, link.href)}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={`/${link.href}`} className="nav__link">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
