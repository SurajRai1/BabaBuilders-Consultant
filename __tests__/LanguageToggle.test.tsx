import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import { LanguageProvider } from '@/context/LanguageContext';

describe('LanguageToggle Component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = 'en';
  });

  const renderWithProvider = (variant?: 'header' | 'drawer') => {
    return render(
      <LanguageProvider>
        <LanguageToggle variant={variant} />
      </LanguageProvider>
    );
  };

  it('should render both EN and नेपाली options', () => {
    renderWithProvider();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('नेपाली')).toBeInTheDocument();
  });

  it('should have EN active by default', () => {
    renderWithProvider();
    const enBtn = screen.getByText('EN');
    const neBtn = screen.getByText('नेपाली');

    expect(enBtn).toHaveClass('is-active');
    expect(enBtn).toHaveAttribute('aria-pressed', 'true');
    expect(neBtn).not.toHaveClass('is-active');
    expect(neBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('should switch active state to नेपाली when clicked', () => {
    renderWithProvider();
    const enBtn = screen.getByText('EN');
    const neBtn = screen.getByText('नेपाली');

    fireEvent.click(neBtn);

    expect(neBtn).toHaveClass('is-active');
    expect(neBtn).toHaveAttribute('aria-pressed', 'true');
    expect(enBtn).not.toHaveClass('is-active');
    expect(enBtn).toHaveAttribute('aria-pressed', 'false');
    expect(localStorage.getItem('baba_builders_lang')).toBe('ne');
  });

  it('should apply variant class correctly', () => {
    const { container: headerContainer } = renderWithProvider('header');
    expect(headerContainer.querySelector('.lang-toggle-header')).toBeInTheDocument();

    const { container: drawerContainer } = renderWithProvider('drawer');
    expect(drawerContainer.querySelector('.lang-toggle-drawer')).toBeInTheDocument();
  });
});
