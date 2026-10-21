import { describe, it, expect } from 'vitest';
import { translations } from '@/lib/translations';

describe('Bilingual Translations Dictionary', () => {
  it('should have complete dictionaries for both English (en) and Nepali (ne)', () => {
    expect(translations.en).toBeDefined();
    expect(translations.ne).toBeDefined();
  });

  it('should have exact deep key parity between English and Nepali dictionaries', () => {
    const getKeys = (obj: any, prefix = ''): string[] => {
      let keys: string[] = [];
      for (const key of Object.keys(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          keys = keys.concat(getKeys(obj[key], fullKey));
        } else {
          keys.push(fullKey);
        }
      }
      return keys.sort();
    };

    const enKeys = getKeys(translations.en);
    const neKeys = getKeys(translations.ne);

    expect(enKeys).toEqual(neKeys);
  });

  it('should have matching array lengths for marquee in en and ne', () => {
    expect(translations.en.marquee.length).toBeGreaterThan(0);
    expect(translations.en.marquee.length).toBe(translations.ne.marquee.length);
  });

  it('should have matching steps in the approach section', () => {
    expect(translations.en.approach.steps.length).toBe(3);
    expect(translations.en.approach.steps.length).toBe(translations.ne.approach.steps.length);

    translations.en.approach.steps.forEach((step, idx) => {
      expect(step.number).toBeDefined();
      expect(step.title.trim().length).toBeGreaterThan(0);
      expect(translations.ne.approach.steps[idx].title.trim().length).toBeGreaterThan(0);
    });
  });

  it('should have matching services data items', () => {
    expect(translations.en.services.items.length).toBe(3);
    expect(translations.en.services.items.length).toBe(translations.ne.services.items.length);

    translations.en.services.items.forEach((item, idx) => {
      expect(item.number).toBeDefined();
      expect(item.title.trim().length).toBeGreaterThan(0);
      expect(translations.ne.services.items[idx].title.trim().length).toBeGreaterThan(0);
    });
  });

  it('should have matching projects showcase items', () => {
    expect(translations.en.projects.items.length).toBe(4);
    expect(translations.en.projects.items.length).toBe(translations.ne.projects.items.length);

    translations.en.projects.items.forEach((item, idx) => {
      expect(item.title.trim().length).toBeGreaterThan(0);
      expect(item.category.trim().length).toBeGreaterThan(0);
      expect(translations.ne.projects.items[idx].title.trim().length).toBeGreaterThan(0);
    });
  });

  it('should have matching navigation chapters', () => {
    expect(translations.en.navChapters.length).toBe(5);
    expect(translations.en.navChapters.length).toBe(translations.ne.navChapters.length);

    translations.en.navChapters.forEach((chapter, idx) => {
      expect(chapter.num).toBeDefined();
      expect(chapter.href).toBe(translations.ne.navChapters[idx].href);
    });
  });

  it('should contain valid Devanagari characters in Nepali translations', () => {
    const hasDevanagari = (str: string) => /[\u0900-\u097F]/.test(str);
    expect(hasDevanagari(translations.ne.hero.titleLine1)).toBe(true);
    expect(hasDevanagari(translations.ne.header.tagline)).toBe(true);
    expect(hasDevanagari(translations.ne.about.lead)).toBe(true);
  });
});
