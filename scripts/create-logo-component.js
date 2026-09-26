const fs = require('fs');

const markSvg = fs.readFileSync('public/logo-mark.svg', 'utf8');
const fullSvg = fs.readFileSync('public/logo-with-location.svg', 'utf8');

// Extract viewBox and inner <g> or <path>
const markViewBoxMatch = markSvg.match(/viewBox="([^"]+)"/);
const markViewBox = markViewBoxMatch ? markViewBoxMatch[1] : '135.8 28.0 247.7 294.9';

const markGMatch = markSvg.match(/<g transform="[^"]+"[^>]*>([\s\S]*?)<\/g>/);
const markInner = markGMatch ? markGMatch[1].trim() : '';

const fullViewBoxMatch = fullSvg.match(/viewBox="([^"]+)"/);
const fullViewBox = fullViewBoxMatch ? fullViewBoxMatch[1] : '18.0 21.0 482.0 548.5';

const fullGMatch = fullSvg.match(/<g transform="[^"]+"[^>]*>([\s\S]*?)<\/g>/);
const fullInner = fullGMatch ? fullGMatch[1].trim() : '';

const componentContent = `'use client';

import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Baba Builders & Consultant - Emblem Mark
 * Stylized 'B' with Baba Sage portrait, architectural roof and window.
 * Inherits color via \`currentColor\`.
 */
export function BabaLogoMark({ className = '', size, ...props }: LogoProps) {
  const style = size ? { width: size, height: size, ...props.style } : props.style;

  return (
    <svg
      viewBox="${markViewBox}"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)" stroke="none">
        ${markInner}
      </g>
    </svg>
  );
}

/**
 * Baba Builders & Consultant - Complete Official Vector Logo
 * Includes the Emblem, BABA, BUILDERS & CONSULTANT, Pvt. Ltd., and Sunsari, Nepal.
 */
export function BabaFullLogo({ className = '', size, ...props }: LogoProps) {
  const style = size ? { width: size, height: 'auto', ...props.style } : props.style;

  return (
    <svg
      viewBox="${fullViewBox}"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={style}
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)" stroke="none">
        ${fullInner}
      </g>
      <text
        x="259.0"
        y="534.0"
        textAnchor="middle"
        fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="4"
        fill="currentColor"
      >
        SUNSARI, NEPAL
      </text>
    </svg>
  );
}

export default BabaLogoMark;
`;

fs.writeFileSync('components/BabaLogo.tsx', componentContent);
console.log('Successfully created components/BabaLogo.tsx');
