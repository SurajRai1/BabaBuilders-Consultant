'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/lib/constants';

const images = {
  hero: '/images/hero.png',
};

export default function Hero() {
  const { t, lang } = useLanguage();
  const [animated, setAnimated] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Wait for preloader
      await new Promise((resolve) => setTimeout(resolve, 2800));

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          setAnimated(true);
        },
      });

      // Eyebrow line + text
      tl.to('.hero-eyebrow-line', { scaleX: 1, duration: 0.8 }, 0);
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.2);

      // Character split animation for title
      const chars = titleRef.current?.querySelectorAll('.hero-char');
      if (chars) {
        tl.to(
          chars,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
          },
          0.4
        );
      }

      // Description and actions fade up
      tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.2);
      tl.to(actionsRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.4);
      tl.to(footerRef.current, { opacity: 1, duration: 0.6 }, 1.6);

      // Parallax on scroll
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    };

    initAnimations();
  }, []);

  // Split text into words and grapheme characters safely preserving unicode clusters and preventing mid-word breaks
  const renderTitleLine = (text: string, isEm = false) => {
    const words = text.split(' ').filter(Boolean);

    return words.map((word, wordIdx) => {
      let chars: string[];
      if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
        const segmenter = new (Intl as any).Segmenter(lang, { granularity: 'grapheme' });
        chars = Array.from(segmenter.segment(word), (s: any) => s.segment);
      } else {
        chars = Array.from(word);
      }

      return (
        <span key={`${lang}-${wordIdx}`} className="hero-word">
          {chars.map((char, charIdx) => (
            <span
              key={`${lang}-${wordIdx}-${charIdx}`}
              className="hero-char"
              style={animated ? { opacity: 1, transform: 'none' } : undefined}
            >
              {char}
            </span>
          ))}
          {wordIdx < words.length - 1 && (
            <span className="hero-word-spacer">&nbsp;</span>
          )}
        </span>
      );
    });
  };

  return (
    <section ref={sectionRef} className="hero" id="top">
      <div
        ref={bgRef}
        className="hero-bg"
        style={{ backgroundImage: `url(${images.hero})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-grid-pattern" />

      <div className="container hero-content">
        <div
          ref={eyebrowRef}
          className="font-eyebrow hero-eyebrow"
          style={{ opacity: animated ? 1 : 0, transform: animated ? 'none' : 'translateY(20px)' }}
        >
          <span className="hero-eyebrow-line" style={animated ? { transform: 'scaleX(1)' } : undefined} />
          {t.hero.location}
          <span className="hero-eyebrow-dot" />
          {t.hero.since}
        </div>

        <div ref={titleRef} className={`hero-title ${lang === 'ne' ? 'hero-title-ne' : ''}`}>
          <h1>
            <span className="hero-line hero-line-1">
              {renderTitleLine(t.hero.titleLine1)}
            </span>
            <span className="hero-line hero-line-2">
              <em>{renderTitleLine(t.hero.titleLine2, true)}</em>
            </span>
          </h1>
        </div>

        <div
          ref={descRef}
          className="hero-description"
          style={animated ? { opacity: 1, transform: 'none' } : undefined}
        >
          <p>{t.hero.description}</p>
        </div>

        <div
          ref={actionsRef}
          className="hero-actions"
          style={animated ? { opacity: 1, transform: 'none' } : undefined}
        >
          <a className="btn btn-gold btn-slide" href="#services">
            <span className="btn-text">
              <span>
                {t.hero.exploreServices} <ArrowUpRight size={15} style={{ marginLeft: 8 }} />
              </span>
              <span>
                {t.hero.exploreServices} <ArrowUpRight size={15} style={{ marginLeft: 8 }} />
              </span>
            </span>
          </a>
          <a className="text-link" href="#projects">
            {t.hero.viewWork} <ChevronRight size={15} />
          </a>
        </div>
      </div>

      <div
        ref={footerRef}
        className="hero-footer"
        style={animated ? { opacity: 1 } : undefined}
      >
        <span className="hero-coordinate">{SITE_CONFIG.location.coordinates}</span>
      </div>
    </section>
  );
}
