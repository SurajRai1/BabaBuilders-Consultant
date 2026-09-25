'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const images = {
  hero: 'https://images.pexels.com/photos/13752348/pexels-photo-13752348.jpeg?auto=compress&cs=tinysrgb&w=1800',
};

export default function Hero() {
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

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

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

  // Split text into characters
  const splitChars = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="hero-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

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
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <span className="hero-eyebrow-line" />
          Sunsari, Nepal
          <span className="hero-eyebrow-dot" />
          Since 2016
        </div>

        <div ref={titleRef} className="hero-title">
          <h1>
            {splitChars('Build a place')}
            <br />
            <em>{splitChars('to belong.')}</em>
          </h1>
        </div>

        <div ref={descRef} className="hero-description">
          <p>
            Thoughtful design, trusted guidance and construction with purpose.
            From your first naksha to the final detail.
          </p>
        </div>

        <div ref={actionsRef} className="hero-actions">
          <a className="btn btn-gold btn-slide" href="#services">
            <span className="btn-text">
              <span>
                Explore our services <ArrowUpRight size={15} style={{ marginLeft: 8 }} />
              </span>
              <span>
                Explore our services <ArrowUpRight size={15} style={{ marginLeft: 8 }} />
              </span>
            </span>
          </a>
          <a className="text-link" href="#projects">
            View our work <ChevronRight size={15} />
          </a>
        </div>
      </div>

      <div ref={footerRef} className="hero-footer">
        <span className="hero-coordinate">26° 39&apos; N / 87° 20&apos; E</span>
      </div>
    </section>
  );
}
