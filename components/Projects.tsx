'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Forge-style section slide-up
      gsap.fromTo(
        sectionRef.current,
        { yPercent: 6 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      // Heading reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
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

      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll('.project-card');
      cards.forEach((card, i) => {
        const mask = card.querySelector('.project-card-mask');

        // Card fade in with stagger
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Image mask reveal
        if (mask) {
          gsap.to(mask, {
            scaleY: 0,
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects-section section-pad">
      <div className="container">
        <div ref={headingRef} className="projects-heading">
          <div>
            <span className="font-eyebrow" style={{ color: 'var(--muted)' }}>
              {t.projects.kicker}
            </span>
            <h2>
              {t.projects.headingLine1}
              <br />
              <em>{t.projects.headingLine2}</em>
            </h2>
          </div>
          <a className="btn btn-outline" href="#start">
            {t.projects.viewAll} <ArrowUpRight size={15} />
          </a>
        </div>

        <div ref={gridRef} className="projects-grid">
          {t.projects.items.map((project, i) => (
            <div key={`project-${i}`} className={`project-card project-${project.size}`}>
              <img src={project.image} alt={project.title} />
              <div className="project-card-overlay" />
              <div className="project-card-mask" />
              <div className="project-card-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <ArrowUpRight size={19} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
