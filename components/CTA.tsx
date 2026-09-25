'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';

const images = {
  cta: 'https://images.pexels.com/photos/13752348/pexels-photo-13752348.jpeg?auto=compress&cs=tinysrgb&w=1800',
};

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      if (contentRef.current) {
        const els = contentRef.current.querySelectorAll('p, .btn, .cta-note');
        gsap.fromTo(
          els,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} id="start" className="cta-section">
      <div className="cta-bg" style={{ backgroundImage: `url(${images.cta})` }} />
      <div className="cta-overlay" />
      <div className="container cta-inner">
        <div ref={contentRef}>
          <h2 ref={headingRef}>
            Have a vision?
            <br />
            <em>Let&apos;s give it form.</em>
          </h2>
          <p>
            Whether it&apos;s a new home from the ground up, a renovation, or
            guidance through a build you&apos;re managing yourself, we&apos;re
            here to help at every step.
          </p>
          <a className="btn btn-gold btn-slide" href="mailto:hello@bababuilders.com">
            <span className="btn-text">
              <span>
                Start a conversation <ArrowUpRight size={15} style={{ marginLeft: 8 }} />
              </span>
              <span>
                Start a conversation <ArrowUpRight size={15} style={{ marginLeft: 8 }} />
              </span>
            </span>
          </a>
        </div>
        <div className="cta-note">
          <Heart size={16} />
          <span>
            Your project begins with a clear conversation. No commitment, no
            pressure — just the right first step.
          </span>
        </div>
      </div>
    </section>
  );
}
