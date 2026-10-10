'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BabaLogoMark } from '@/components/BabaLogo';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/icons/SocialIcons';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/lib/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t } = useLanguage();

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
              <strong>{lang === 'ne' ? 'बाबा' : 'BABA'}</strong>
              <small>{t.header.tagline}</small>
            </span>
          </a>

          <div className="header-controls">
            <LanguageToggle />
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
          {/* Left Panel: Architectural Chapters */}
          <div className="deso-chapters-panel">
            <div className="deso-chapters-header">
              <span className="deso-headline-label">{t.header.chapters}</span>
              <div className="deso-headline-line" />
              <LanguageToggle variant="drawer" className="deso-menu-lang-toggle" />
            </div>

            <div className="deso-chapters-list">
              {t.navChapters.map((ch, idx) => (
                <a
                  key={idx}
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
              <span>{t.header.footerOrg}</span>
              <span>{t.header.footerCoords}</span>
            </div>
          </div>

          {/* Right Aside Drawer: Studio Info & Socials */}
          <aside className="deso-aside-drawer">
            <div className="deso-aside-inner">
              <div className="deso-aside-header">
                <span className="deso-aside-kicker">{t.header.studioInquiries}</span>
              </div>

              <div className="deso-aside-body">
                {/* Office Location */}
                <div className="deso-aside-block">
                  <span className="deso-block-label">{t.header.locationLabel}</span>
                  <p className="deso-block-value" style={{ whiteSpace: 'pre-line' }}>
                    {t.header.locationValue}
                  </p>
                </div>

                {/* Direct Contact */}
                <div className="deso-aside-block">
                  <span className="deso-block-label">{t.header.directContactLabel}</span>
                  <p className="deso-block-value">
                    <a href={`tel:${SITE_CONFIG.contact.phoneTel}`} className="deso-contact-link">
                      {SITE_CONFIG.contact.phone}
                    </a>
                    <br />
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="deso-contact-link">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </p>
                </div>

                {/* Social Links */}
                <div className="deso-aside-block">
                  <span className="deso-block-label">{t.header.connectLabel}</span>
                  <div className="deso-social-row">
                    <a
                      href={SITE_CONFIG.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deso-social-btn"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                      <span>Facebook</span>
                    </a>
                    <a
                      href={SITE_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deso-social-btn"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={SITE_CONFIG.socials.tiktok}
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
                <a href="#contact" className="deso-cta-card" onClick={closeAndNavigate}>
                  <div className="deso-cta-text">
                    <span className="deso-cta-small">{t.header.startBuildLabel}</span>
                    <span className="deso-cta-big">{t.header.scheduleConsultation}</span>
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
