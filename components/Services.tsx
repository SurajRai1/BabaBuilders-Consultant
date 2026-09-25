'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    activeNum: '01',
    totalNum: '03',
    title: 'Planning & Approval',
    subtitle: 'Naksha pass, permits & legal clearance',
    description:
      'Every enduring home begins with absolute clarity. We translate your family lifestyle, budget, and land dimensions into precision architectural drawings and municipality-approved blueprints — securing fast municipal pass before breaking ground.',
    tag: 'Municipality Approved',
    cta: 'Start Your Plan',
    image:
      'https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '02',
    activeNum: '02',
    totalNum: '03',
    title: 'Design & Visualization',
    subtitle: 'Modern aesthetics & spatial harmony',
    description:
      'Thoughtful spaces sculpted around sunlight, ventilation, and contemporary living. Photorealistic 3D exterior elevations and interior floor plans let you walk through and refine every space before the first brick is laid.',
    tag: '3D & Engineering',
    cta: 'Explore 3D Design',
    image:
      'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    number: '03',
    activeNum: '03',
    totalNum: '03',
    title: 'Construction & Advisory',
    subtitle: 'From foundation to turnkey finishing',
    description:
      'Reliable on-site supervision, material estimation, contractor hiring, and complete structural management. From the first concrete pour to interior finishing, our licensed engineers protect your investment till the keys are in your hand.',
    tag: 'Turnkey Building',
    cta: 'Build With Us',
    image:
      'https://images.pexels.com/photos/11429199/pexels-photo-11429199.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // ── Desktop Forge Experience (> 1024px) ────────────────────────
        mm.add('(min-width: 1025px)', () => {
          const section = sectionRef.current;
          if (!section) return;

          // Initial visual states
          textRefs.current.forEach((el, index) => {
            if (!el) return;
            if (index === 0) {
              gsap.set(el, { opacity: 1, y: 0, pointerEvents: 'auto' });
            } else {
              gsap.set(el, { opacity: 0, y: 50, pointerEvents: 'none' });
            }
          });

          imgRefs.current.forEach((el, index) => {
            if (!el) return;
            if (index === 0) {
              gsap.set(el, { opacity: 1, scale: 1 });
            } else {
              gsap.set(el, { opacity: 0, scale: 1.04 });
            }
          });

          bgRefs.current.forEach((el, index) => {
            if (!el) return;
            if (index === 0) {
              gsap.set(el, { opacity: 0.22 });
            } else {
              gsap.set(el, { opacity: 0 });
            }
          });

          // Main scrubbed timeline synchronized with Lenis ticker
          const tl = gsap.timeline();

          // Bottom progress bar scaling from 0 to 1
          if (progressBarRef.current) {
            tl.to(
              progressBarRef.current,
              {
                scaleX: 1,
                ease: 'none',
                duration: 3,
              },
              0
            );
          }

          // ── Transition 1: Step 01 -> Step 02 ──
          // Step 1 text glides up & fades out
          tl.to(
            textRefs.current[0],
            {
              y: -40,
              opacity: 0,
              ease: 'power1.inOut',
              duration: 0.38,
              onComplete: () => {
                if (textRefs.current[0]) textRefs.current[0]!.style.pointerEvents = 'none';
              },
              onReverseComplete: () => {
                if (textRefs.current[0]) textRefs.current[0]!.style.pointerEvents = 'auto';
              },
            },
            0.75
          );

          // Step 2 text glides up from below & fades in
          tl.fromTo(
            textRefs.current[1],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'power1.inOut',
              duration: 0.38,
              onStart: () => {
                if (textRefs.current[1]) textRefs.current[1]!.style.pointerEvents = 'auto';
              },
              onReverseComplete: () => {
                if (textRefs.current[1]) textRefs.current[1]!.style.pointerEvents = 'none';
              },
            },
            0.95
          );

          // Image 0 -> Image 1 crossfade
          tl.to(
            imgRefs.current[0],
            { opacity: 0, scale: 0.96, ease: 'power1.inOut', duration: 0.45 },
            0.75
          );
          tl.fromTo(
            imgRefs.current[1],
            { opacity: 0, scale: 1.04 },
            { opacity: 1, scale: 1, ease: 'power1.inOut', duration: 0.45 },
            0.85
          );

          // Background ambient blur crossfade
          tl.to(bgRefs.current[0], { opacity: 0, ease: 'power1.inOut', duration: 0.45 }, 0.75);
          tl.fromTo(
            bgRefs.current[1],
            { opacity: 0 },
            { opacity: 0.22, ease: 'power1.inOut', duration: 0.45 },
            0.85
          );

          // ── Transition 2: Step 02 -> Step 03 ──
          // Step 2 text glides up & fades out
          tl.to(
            textRefs.current[1],
            {
              y: -40,
              opacity: 0,
              ease: 'power1.inOut',
              duration: 0.38,
              onComplete: () => {
                if (textRefs.current[1]) textRefs.current[1]!.style.pointerEvents = 'none';
              },
              onReverseComplete: () => {
                if (textRefs.current[1]) textRefs.current[1]!.style.pointerEvents = 'auto';
              },
            },
            1.85
          );

          // Step 3 text glides up from below & fades in
          tl.fromTo(
            textRefs.current[2],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'power1.inOut',
              duration: 0.38,
              onStart: () => {
                if (textRefs.current[2]) textRefs.current[2]!.style.pointerEvents = 'auto';
              },
              onReverseComplete: () => {
                if (textRefs.current[2]) textRefs.current[2]!.style.pointerEvents = 'none';
              },
            },
            2.05
          );

          // Image 1 -> Image 2 crossfade
          tl.to(
            imgRefs.current[1],
            { opacity: 0, scale: 0.96, ease: 'power1.inOut', duration: 0.45 },
            1.85
          );
          tl.fromTo(
            imgRefs.current[2],
            { opacity: 0, scale: 1.04 },
            { opacity: 1, scale: 1, ease: 'power1.inOut', duration: 0.45 },
            1.95
          );

          // Background ambient blur crossfade
          tl.to(bgRefs.current[1], { opacity: 0, ease: 'power1.inOut', duration: 0.45 }, 1.85);
          tl.fromTo(
            bgRefs.current[2],
            { opacity: 0 },
            { opacity: 0.22, ease: 'power1.inOut', duration: 0.45 },
            1.95
          );

          // GSAP pin on section with scrub
          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: '+=2400',
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            animation: tl,
            invalidateOnRefresh: true,
          });
        });

        // ── Mobile Fallback (<= 1024px) ────────────────────────────────
        mm.add('(max-width: 1024px)', () => {
          const cards = sectionRef.current?.querySelectorAll('.services-mobile-card');
          if (cards && cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });
      }, sectionRef);

      ScrollTrigger.refresh();
    };

    const timer = setTimeout(init, 300);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="services-forge-section">
      <div className="services-forge-stage">
        {/* Ambient Subtle Warm Architectural Glow */}
        <div className="services-forge-bg">
          {services.map((item, index) => (
            <div
              key={`bg-${item.number}`}
              ref={(el) => {
                bgRefs.current[index] = el;
              }}
              className="services-bg-layer"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
          <div className="services-bg-vignette" />
        </div>

        {/* Desktop Split Stage: Left Still Image / Right Scrolling Text */}
        <div className="services-forge-inner">
          {/* Left Column: Still Image Frame that crossfades */}
          <div className="services-media-col">
            <div className="services-media-frame">
              {services.map((item, index) => (
                <img
                  key={`img-${item.number}`}
                  ref={(el) => {
                    imgRefs.current[index] = el;
                  }}
                  src={item.image}
                  alt={item.title}
                  className="services-media-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Text Items that slide up from bottom to top */}
          <div className="services-content-col">
            {services.map((item, index) => (
              <div
                key={`text-${item.number}`}
                ref={(el) => {
                  textRefs.current[index] = el;
                }}
                className="services-content-item"
              >
                <div className="services-item-top">
                  <span className="services-counter">
                    {item.activeNum} <span>/ {item.totalNum}</span>
                  </span>
                  <span className="services-badge">{item.tag}</span>
                </div>
                <h2 className="services-item-title">{item.title}</h2>
                <h3 className="services-item-subtitle">{item.subtitle}</h3>
                <p className="services-item-description">{item.description}</p>
                <a href="#start" className="services-forge-btn">
                  <span>{item.cta}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Luxury Progress Bar Only (Forge style, no text hint) */}
        <div className="services-forge-bottom">
          <div className="services-progress-track">
            <div ref={progressBarRef} className="services-progress-bar" />
          </div>
        </div>

        {/* Mobile Fallback: Earthy cream stacked cards */}
        <div className="services-mobile-list">
          {services.map((item) => (
            <div key={`mob-${item.number}`} className="services-mobile-card">
              <img
                src={item.image}
                alt={item.title}
                className="services-mobile-img"
                loading="lazy"
              />
              <div className="services-item-top">
                <span className="services-counter">
                  {item.activeNum} <span>/ {item.totalNum}</span>
                </span>
                <span className="services-badge">{item.tag}</span>
              </div>
              <h2 className="services-item-title" style={{ fontSize: '28px' }}>
                {item.title}
              </h2>
              <h3 className="services-item-subtitle" style={{ fontSize: '16px' }}>
                {item.subtitle}
              </h3>
              <p className="services-item-description" style={{ fontSize: '14px' }}>
                {item.description}
              </p>
              <a href="#start" className="services-forge-btn">
                <span>{item.cta}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
