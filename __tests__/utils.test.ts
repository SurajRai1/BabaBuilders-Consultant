import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('Utility cn() function', () => {
  it('should merge class names correctly', () => {
    expect(cn('class-a', 'class-b')).toBe('class-a class-b');
  });

  it('should handle conditional class names', () => {
    const isScrolled = true;
    const isHidden = false;
    expect(cn('base-class', isScrolled && 'is-scrolled', isHidden && 'is-hidden')).toBe(
      'base-class is-scrolled'
    );
  });

  it('should correctly resolve tailwind conflicts', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should handle undefined, null, and empty inputs gracefully', () => {
    expect(cn(undefined, null, false, '', 'valid')).toBe('valid');
  });
});
