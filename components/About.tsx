'use client';

import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const images = {
  process: 'https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Section pinned or flush layout without artificial gap

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
          <span className="about-kicker-number">01</span>
          <span className="about-kicker-line" />
          The BABA standard
        </div>

        <div ref={copyRef} className="about-copy">
          <h2 ref={headingRef}>
            More than a building.
            <br />
            <span>A considered beginning.</span>
          </h2>
          <p className="lead">
            Every home starts with a vision. We bring the clarity, craft and care
            to shape it into something enduring.
          </p>
          <p>
            At BABA Builders &amp; Consultant, we support you from the first
            conversation and house plan through approvals, construction and
            completion. Our work is grounded in practical thinking, honest
            guidance and a deep respect for the details that make a space feel
            like yours.
          </p>
          <a className="text-link" href="#approach" style={{ color: 'var(--deep-green)', borderColor: 'rgba(43,53,48,0.4)' }}>
            Discover our approach <ChevronRight size={14} />
          </a>
        </div>

        <div ref={imageRef} className="about-image-wrap">
          <img
            src={images.process}
            alt="Architects reviewing plans at a construction site"
          />
          <div ref={maskRef} className="about-image-mask" />
          <div className="about-caption">
            Built with clarity.
            <br />
            <span>Guided with care.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
