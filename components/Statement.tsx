'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const images = {
  interior: 'https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const promiseRef = useRef<HTMLDivElement>(null);

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

      // Promise items stagger
      if (promiseRef.current) {
        const items = promiseRef.current.querySelectorAll('.promise-item');
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: promiseRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Image mask reveal
      if (maskRef.current) {
        gsap.to(maskRef.current, {
          scaleX: 0,
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
            yPercent: -12,
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
    <section ref={sectionRef} className="statement-section section-pad">
      <div className="container statement-grid">
        <div>
          <span className="font-eyebrow" style={{ color: 'rgba(43,53,48,0.5)' }}>
            05 / Our promise
          </span>
          <h2 ref={headingRef}>
            Good buildings are
            <br />
            <em>felt before they are seen.</em>
          </h2>
          <p>
            In the light of a room. In the confidence of a sound decision. In
            the feeling that everything is exactly where it should be.
          </p>
          <div ref={promiseRef} className="promise-list">
            <span className="promise-item">
              <Check size={14} /> Honest guidance
            </span>
            <span className="promise-item">
              <Check size={14} /> Lasting quality
            </span>
            <span className="promise-item">
              <Check size={14} /> Detail-led delivery
            </span>
          </div>
        </div>
        <div ref={imageRef} className="statement-image">
          <img src={images.interior} alt="Bright, thoughtfully designed interior" />
          <div ref={maskRef} className="statement-image-mask" />
        </div>
      </div>
    </section>
  );
}
