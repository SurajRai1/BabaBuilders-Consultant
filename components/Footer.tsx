'use client';

import { BabaLogoMark } from '@/components/BabaLogo';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/icons/SocialIcons';
import { SITE_CONFIG } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#top" className="logo">
              <span className="logo-mark">
                <BabaLogoMark className="logo-mark-svg" />
              </span>
              <span className="logo-text">
                <strong>{SITE_CONFIG.shortName}</strong>
                <small>{SITE_CONFIG.subheading}</small>
              </span>
            </a>
            <p className="footer-tagline" style={{ marginTop: 20 }}>
              {t.footer.taglineLine1}
              <br />
              <em>{t.footer.taglineLine2}</em>
            </p>
          </div>

          <div className="footer-links">
            <a href="#top">{t.footer.nav.home}</a>
            <a href="#about">{t.footer.nav.about}</a>
            <a href="#approach">{t.footer.nav.approach}</a>
            <a href="#services">{t.footer.nav.services}</a>
            <a href="#projects">{t.footer.nav.projects}</a>
            <a href="#start">{t.footer.nav.contact}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {t.footer.copyright}
            <span className="footer-dot" />
            {t.footer.location}
          </span>
          <div className="footer-socials">
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={SITE_CONFIG.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="TikTok"
            >
              <TikTokIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
