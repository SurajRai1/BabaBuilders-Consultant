'use client';

import { useState, useCallback } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Statement from '@/components/Statement';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <SmoothScroll>
        <CustomCursor />
        <div className="site-wrapper">
          <Navigation />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Approach />
            <Services />
            <Projects />
            <Statement />
            <CTA />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
