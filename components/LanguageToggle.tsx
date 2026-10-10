'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  variant?: 'header' | 'drawer';
}

export default function LanguageToggle({ className = '', variant = 'header' }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`lang-toggle lang-toggle-${variant} ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        className={`lang-option ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-option ${lang === 'ne' ? 'is-active' : ''}`}
        onClick={() => setLang('ne')}
        aria-pressed={lang === 'ne'}
      >
        नेपाली
      </button>
    </div>
  );
}
