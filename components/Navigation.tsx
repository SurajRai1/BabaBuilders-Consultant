'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BabaLogoMark } from '@/components/BabaLogo';

const chapters = [
  {
    num: '01',
    title: 'About Us',
    desc: 'The BABA standard & building legacy in Sunsari',
    href: '#about',
  },
  {
    num: '02',
    title: 'Our Approach',
    desc: 'Architectural planning, engineering & municipal naksha',
    href: '#approach',
  },
  {
    num: '03',
    title: 'Services',
    desc: 'Full-cycle consultancy, supervision & finishing',
    href: '#services',
  },
  {
    num: '04',
    title: 'Selected Works',
    desc: 'Enduring residential homes and commercial builds',
    href: '#projects',
  },
  {
    num: '05',
    title: 'Inquire',
    desc: 'Consult directly with our architects & engineers',
    href: '#start',
  },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.1a8.18 8.18 0 005.58 2.2v-3.45a4.83 4.83 0 01-3.77-1.4V6.69h3.77z" />
    </svg>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAndNavigate = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeAndNavigate();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, closeAndNavigate]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'menu-active' : ''}`}>
        <div className="container header-inner">
          <a href="#top" className="logo" onClick={closeAndNavigate} aria-label="BABA Builders home">
            <span className="logo-mark">
              <BabaLogoMark className="logo-mark-svg" />
            </span>
            <span className="logo-text">
              <strong>BABA</strong>
              <small>Builders &amp; Consultant</small>
            </span>
          </a>

          <button
            className={`hamburger ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* Deso-style Full Screen Menu */}
      <nav
        className={`deso-nav ${isOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <div className="deso-backdrop" onClick={closeAndNavigate} />

        <div className="deso-nav-inner">
          {/* Left Panel: Architectural Chapters (71.3vw desktop) */}
          <div className="deso-chapters-panel">
            <div className="deso-chapters-header">
              <span className="deso-headline-label">CHAPTERS</span>
              <div className="deso-headline-line" />
            </div>

            <div className="deso-chapters-list">
              {chapters.map((ch, idx) => (
                <a
                  key={ch.num}
                  href={ch.href}
                  className="deso-chapter-item"
                  onClick={closeAndNavigate}
                  style={{ '--item-index': idx } as React.CSSProperties}
                >
                  <span className="deso-chapter-num">{ch.num}</span>
                  <div className="deso-chapter-main">
                    <span className="deso-chapter-title">{ch.title}</span>
                    <span className="deso-chapter-desc">{ch.desc}</span>
                  </div>
                  <span className="deso-chapter-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </a>
              ))}
            </div>

            <div className="deso-chapters-footer">
              <span>BABA BUILDERS &amp; CONSULTANT</span>
              <span>SUNSARI, NEPAL — 26° 39&apos; N / 87° 20&apos; E</span>
            </div>
          </div>

          {/* Right Aside Drawer: Studio Info & Socials (28.7vw desktop) */}
          <aside className="deso-aside-drawer">
            <div className="deso-aside-inner">
              <div className="deso-aside-header">
                <span className="deso-aside-kicker">STUDIO / INQUIRIES</span>
              </div>

              <div className="deso-aside-body">
                {/* Office Location */}
                <div className="deso-aside-block">
                  <span className="deso-block-label">LOCATION</span>
                  <p className="deso-block-value">
                    Dharan Road, Sunsari<br />
                    Koshi Province, Nepal
                  </p>
                </div>

                {/* Direct Contact */}
                <div className="deso-aside-block">
                  <span className="deso-block-label">DIRECT CONTACT</span>
                  <p className="deso-block-value">
                    <a href="tel:+9779800000000" className="deso-contact-link">+977 980-0000000</a><br />
                    <a href="mailto:hello@bababuilders.com" className="deso-contact-link">hello@bababuilders.com</a>
                  </p>
                </div>

                {/* Social Links: Facebook, Instagram, TikTok */}
                <div className="deso-aside-block">
                  <span className="deso-block-label">CONNECT WITH US</span>
                  <div className="deso-social-row">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deso-social-btn"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deso-social-btn"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deso-social-btn"
                      aria-label="TikTok"
                    >
                      <TikTokIcon />
                      <span>TikTok</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Card CTA */}
              <div className="deso-aside-footer">
                <a href="#start" className="deso-cta-card" onClick={closeAndNavigate}>
                  <div className="deso-cta-text">
                    <span className="deso-cta-small">START YOUR BUILD</span>
                    <span className="deso-cta-big">Schedule Consultation</span>
                  </div>
                  <span className="deso-cta-icon">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </nav>
    </>
  );
}
