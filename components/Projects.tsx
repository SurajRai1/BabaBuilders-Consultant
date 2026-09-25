'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const images = {
  villa: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1400',
  dusk: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200',
  build: 'https://images.pexels.com/photos/11429199/pexels-photo-11429199.jpeg?auto=compress&cs=tinysrgb&w=1200',
  interior: 'https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const projects = [
  { title: 'The Courtyard Residence', category: 'Residential / New Build', image: images.villa, size: 'large' },
  { title: 'A Quiet Modern Home', category: 'Residential / Design', image: images.dusk, size: 'small' },
  { title: 'Crafted From The Ground Up', category: 'Construction / Supervision', image: images.build, size: 'small' },
  { title: 'Light, Space & Belonging', category: 'Interior / Consultancy', image: images.interior, size: 'large' },
];

export default function Projects() {
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
              04 / Selected work
            </span>
            <h2>
              Spaces with
              <br />
              <em>quiet confidence.</em>
            </h2>
          </div>
          <a className="btn btn-outline" href="#start">
            View all projects <ArrowUpRight size={15} />
          </a>
        </div>

        <div ref={gridRef} className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className={`project-card project-${project.size}`}>
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
