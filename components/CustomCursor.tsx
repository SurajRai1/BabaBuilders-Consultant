'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor || !label) return;

    // Only on desktop
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      cursor.classList.add('is-visible');
    };

    const onMouseLeave = () => {
      cursor.classList.remove('is-visible');
      label.classList.remove('is-visible');
    };

    // Smooth follow with RAF
    let rafId: number;
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);
      cursor.style.left = `${pos.current.x}px`;
      cursor.style.top = `${pos.current.y}px`;
      label.style.left = `${pos.current.x}px`;
      label.style.top = `${pos.current.y}px`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    // Hover states
    const addHover = () => cursor.classList.add('is-hover');
    const removeHover = () => {
      cursor.classList.remove('is-hover');
      cursor.classList.remove('is-project');
      label.classList.remove('is-visible');
    };
    const addProject = () => {
      cursor.classList.add('is-project');
      label.classList.add('is-visible');
      label.textContent = 'View';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const interactives = document.querySelectorAll('a, button, .btn, .nav-link-item');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((el) => {
      el.addEventListener('mouseenter', addProject);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      projectCards.forEach((el) => {
        el.removeEventListener('mouseenter', addProject);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={labelRef} className="custom-cursor-label" />
    </>
  );
}
