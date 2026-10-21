import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { BabaLogoMark } from '@/components/BabaLogo';

describe('BabaLogoMark Component', () => {
  it('should render an SVG with the expected viewBox and paths', () => {
    const { container } = render(<BabaLogoMark className="custom-logo" />);
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('custom-logo');
    expect(svg).toHaveAttribute('viewBox', '135.8 28.0 247.7 294.9');
    expect(svg).toHaveAttribute('aria-hidden', 'true');

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBeGreaterThan(0);
  });

  it('should apply custom size styling when size prop is provided', () => {
    const { container } = render(<BabaLogoMark size={64} />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveStyle({ width: '64px', height: '64px' });
  });
});
