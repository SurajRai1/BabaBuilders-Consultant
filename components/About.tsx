'use client';

import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const images = {
  process: '/images/project-villa.png',
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Text reveal for heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Copy paragraphs stagger
      if (copyRef.current) {
        const paragraphs = copyRef.current.querySelectorAll('p, a.text-link');
        gsap.fromTo(
          paragraphs,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: copyRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Image mask reveal (clip-path)
      if (maskRef.current) {
        gsap.to(maskRef.current, {
          scaleY: 0,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Parallax on image
      if (imageRef.current) {
        const img = imageRef.current.querySelector('img');
        if (img) {
          gsap.to(img, {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section section-pad">
      <div className="container about-grid">
        <div className="about-kicker font-eyebrow">
          <span className="about-kicker-number">{t.about.kickerNumber}</span>
          <span className="about-kicker-line" />
          {t.about.kickerText}
        </div>

        <div ref={copyRef} className="about-copy">
          <h2 ref={headingRef}>
            {t.about.headingLine1}
            <br />
            <span>{t.about.headingLine2}</span>
          </h2>
          <p className="lead">{t.about.lead}</p>
          <p>{t.about.body}</p>
          <a
            className="text-link"
            href="#approach"
            style={{ color: 'var(--deep-green)', borderColor: 'rgba(43,53,48,0.4)' }}
          >
            {t.about.approachLink} <ChevronRight size={14} />
          </a>
        </div>

        <div ref={imageRef} className="about-image-wrap">
          <img
            src={images.process}
            alt="BABA Builders architectural process"
          />
          <div ref={maskRef} className="about-image-mask" />
          <div className="about-caption">
            {t.about.captionLine1}
            <br />
            <span>{t.about.captionLine2}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
