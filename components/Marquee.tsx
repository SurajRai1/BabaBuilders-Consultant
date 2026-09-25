'use client';

import { useEffect, useRef } from 'react';

const items = [
  'Naksha Pass',
  'House Design',
  'Construction',
  'Consultancy',
  'Renovation',
  'Estimation',
  'Supervision',
  'Architecture',
];

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // As user scrolls down, words continue moving horizontally via CSS and smoothly fade out
        gsap.fromTo(
          sectionRef.current,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      }, sectionRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  const content = items.map((item, i) => (
    <span key={i} className="marquee-item">
      {item}
      <span className="marquee-separator" style={{ marginLeft: 40 }}>✦</span>
    </span>
  ));

  return (
    <section ref={sectionRef} className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">{content}</div>
        <div className="marquee-content" aria-hidden="true">{content}</div>
      </div>
    </section>
  );
}
