'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any;
    let lenisRaf: ((time: number) => void) | null = null;

    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      lenisRaf = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(lenisRaf);
      gsap.ticker.lagSmoothing(0);

      // Expose lenis instance for potential use
      (window as any).__lenis = lenis;
    };

    initLenis();

    // Cleanup runs synchronously via useEffect return (not inside the async fn)
    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (lenisRaf) {
        import('gsap').then(({ gsap }) => {
          gsap.ticker.remove(lenisRaf!);
        });
      }
      if ((window as any).__lenis) {
        delete (window as any).__lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
