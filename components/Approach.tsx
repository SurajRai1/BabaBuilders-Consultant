'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We listen closely to your needs, your site and the life you want to create there.',
  },
  {
    number: '02',
    title: 'Shape',
    description:
      'We turn the possibilities into a considered plan that is practical, personal and ready to move forward.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'We stay close to the work, protecting the vision through every stage of construction.',
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Forge-style section slide-up (on top of previous section)
      gsap.fromTo(
        sectionRef.current,
        { yPercent: 8 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top 20%',
            scrub: true,
          },
        }
      );

      // Curtain Lift Effect: As user scrolls down past Approach, it lifts UPWARDS like a curtain revealing Page 3
      gsap.to(sectionRef.current, {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom bottom',
          end: 'bottom 10%',
          scrub: true,
        },
      });

      // Heading: moves up slowly as you scroll through the section (natural scroll parallax)
      if (headingRef.current) {
        // First, reveal the heading
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

        // Then, subtle parallax as user scrolls through
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

      // Cards: stagger in, then each card moves at slightly different speed (natural scroll feel)
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.approach-card');

        // Stagger reveal
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

        // Each card moves at a slightly different parallax speed as you scroll
        cards.forEach((card, i) => {
          gsap.to(card, {
            yPercent: -8 - i * 5, // card 1: -8%, card 2: -13%, card 3: -18%
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
              02 / Our approach
            </span>
            <h2>
              Every decision
              <br />
              <em>has a purpose.</em>
            </h2>
          </div>
          <p>
            One team. One clear direction.
            <br />
            A better way to build.
          </p>
        </div>

        <div ref={cardsRef} className="approach-cards">
          {steps.map((step) => (
            <div key={step.number} className="approach-card">
              <span className="card-number">{step.number}</span>
              <div className="card-rule" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <a href="#start" className="card-link">
                Start your project <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
