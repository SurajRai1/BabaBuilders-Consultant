'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Heading: moves up slowly as you scroll through the section (natural scroll parallax)
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
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );

        gsap.to(headingRef.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Cards: stagger in, then each card moves at slightly different speed
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.approach-card');

        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        cards.forEach((card, i) => {
          gsap.to(card, {
            yPercent: -8 - i * 5,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} id="approach" className="approach-section section-pad">
      <div className="container">
        <div ref={headingRef} className="approach-heading-row">
          <div>
            <span className="font-eyebrow" style={{ color: 'var(--muted)' }}>
              {t.approach.kicker}
            </span>
            <h2>
              {t.approach.headingLine1}
              <br />
              <em>{t.approach.headingLine2}</em>
            </h2>
          </div>
          <p>
            {t.approach.taglineLine1}
            <br />
            {t.approach.taglineLine2}
          </p>
        </div>

        <div ref={cardsRef} className="approach-cards">
          {t.approach.steps.map((step) => (
            <div key={step.number} className="approach-card">
              <span className="card-number">{step.number}</span>
              <div className="card-rule" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <a href="#start" className="card-link">
                {t.approach.startProject} <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
