import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import React from 'react';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

describe('LanguageContext & Provider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = 'en';
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LanguageProvider>{children}</LanguageProvider>
  );

  it('should default to English language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe('en');
    expect(result.current.t).toBeDefined();
    expect(result.current.t.hero.since).toBe('Since 2022');
  });

  it('should allow setting language explicitly to Nepali', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    act(() => {
      result.current.setLang('ne');
    });

    expect(result.current.lang).toBe('ne');
    expect(localStorage.getItem('baba_builders_lang')).toBe('ne');
    expect(document.documentElement.lang).toBe('ne');
    expect(result.current.t.hero.since).toBe('स्थापना २०२२');
  });

  it('should toggle language back and forth between en and ne', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    act(() => {
      result.current.toggleLang();
    });
    expect(result.current.lang).toBe('ne');
    expect(document.documentElement.lang).toBe('ne');

    act(() => {
      result.current.toggleLang();
    });
    expect(result.current.lang).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('should load persisted language from localStorage on mount', () => {
    localStorage.setItem('baba_builders_lang', 'ne');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe('ne');
    expect(document.documentElement.lang).toBe('ne');
  });

  it('should throw an error when useLanguage is used outside LanguageProvider', () => {
    const originalError = console.error;
    console.error = vi.fn();
    try {
      expect(() => {
        renderHook(() => useLanguage());
      }).toThrow('useLanguage must be used within a LanguageProvider');
    } finally {
      console.error = originalError;
    }
  });
});
