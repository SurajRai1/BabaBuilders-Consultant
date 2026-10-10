'use client';

import React from 'react';
import { BABA_LOGO_MARK_PATHS } from './BabaLogoMarkPaths';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Baba Builders & Consultant — Emblem Mark
 * Stylized 'B' with Baba Sage portrait, architectural roof and window.
 * Inherits color via `currentColor`.
 */
export function BabaLogoMark({ className = '', size, ...props }: LogoProps) {
  const style = size ? { width: size, height: size, ...props.style } : props.style;

  return (
    <svg
      viewBox="135.8 28.0 247.7 294.9"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)" stroke="none">
        {BABA_LOGO_MARK_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

export default BabaLogoMark;
