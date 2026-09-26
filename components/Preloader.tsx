'use client';

import { useEffect, useRef, useState } from 'react';
import { BabaLogoMark } from '@/components/BabaLogo';


export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import('gsap');

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
            delay: 0.2,
          });
        },
      });

      // Animate logo in
      tl.to(logoRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0);
      tl.to(lineRef.current, { scaleY: 1, duration: 0.8, ease: 'power2.inOut' }, 0.2);

      // Counter animation
      tl.to(counterRef.current, { opacity: 1, duration: 0.3 }, 0.1);

      const counter = { val: 0 };
      tl.to(
        counter,
        {
          val: 100,
          duration: 2,
          ease: 'power2.inOut',
          onUpdate: () => setCount(Math.round(counter.val)),
        },
        0.3
      );

      // Pause then exit
      tl.to({}, { duration: 0.3 });
    };

    loadGsap();
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-content">
        <div ref={logoRef} className="preloader-logo">
          <div className="preloader-logo-icon">
            <BabaLogoMark className="preloader-mark-svg" />
          </div>
          <span className="preloader-logo-text">BABA Builders & Consultant</span>
        </div>
        <div ref={lineRef} className="preloader-line" />
        <span ref={counterRef} className="preloader-counter">
          {count}%
        </span>
      </div>
    </div>
  );
}
