'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CustomCursor() {
  const { t } = useLanguage();
  const tRef = useRef(t);
  tRef.current = t;

  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor || !label) return;

    // Skip on mobile/touch devices and respect motion preferences
    if (
      window.matchMedia('(max-width: 768px)').matches ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    // Wake up the animation loop when mouse moves
    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      cursor.classList.add('is-visible');

      // Start the animation loop only if it's sleeping
      if (!isMoving.current) {
        isMoving.current = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    const onMouseLeave = () => {
      cursor.classList.remove('is-visible');
      label.classList.remove('is-visible');
    };

    // GPU-accelerated smooth follow with idle sleep
    let rafId: number;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);

      // Use translate3d for GPU compositing (no layout reflow)
      const tx = pos.current.x;
      const ty = pos.current.y;
      cursor.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      label.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;

      // Sleep when the cursor has settled (within 0.1px of target)
      const dx = Math.abs(pos.current.x - target.current.x);
      const dy = Math.abs(pos.current.y - target.current.y);
      if (dx < 0.1 && dy < 0.1) {
        isMoving.current = false;
        return; // Stop the loop — will restart on next mousemove
      }

      rafId = requestAnimationFrame(animate);
    };

    // Event delegation: single listener handles all hover states dynamically
    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('.project-card')) {
        cursor.classList.add('is-project');
        label.classList.add('is-visible');
        label.textContent = tRef.current.cursor.view;
      } else if (el.closest('a, button, .btn, .nav-link-item')) {
        cursor.classList.add('is-hover');
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('.project-card') || el.closest('a, button, .btn, .nav-link-item')) {
        cursor.classList.remove('is-hover');
        cursor.classList.remove('is-project');
        label.classList.remove('is-visible');
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      cancelAnimationFrame(rafId);
      isMoving.current = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={labelRef} className="custom-cursor-label" />
    </>
  );
}
