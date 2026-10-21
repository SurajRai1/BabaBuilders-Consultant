import { describe, it, expect } from 'vitest';
import {
  SITE_CONFIG,
  NAV_CHAPTERS,
  MARQUEE_ITEMS,
  APPROACH_STEPS,
  SERVICES_DATA,
  PROJECTS_DATA,
} from '@/lib/constants';

describe('Site Configuration & Constants', () => {
  it('should have valid SITE_CONFIG metadata', () => {
    expect(SITE_CONFIG.name).toBe('BABA Builders & Consultant');
    expect(SITE_CONFIG.location.city).toBe('Sunsari');
    expect(SITE_CONFIG.location.country).toBe('Nepal');
    expect(SITE_CONFIG.location.coordinates).toBeDefined();
    expect(SITE_CONFIG.contact.phone).toBeDefined();
    expect(SITE_CONFIG.contact.email).toContain('@');
  });

  it('should have 5 navigation chapters with valid anchor links', () => {
    expect(NAV_CHAPTERS.length).toBe(5);
    NAV_CHAPTERS.forEach((chapter) => {
      expect(chapter.num).toMatch(/^\d{2}$/);
      expect(chapter.href).toMatch(/^#[a-z]+$/);
      expect(chapter.title.length).toBeGreaterThan(0);
    });
  });

  it('should have marquee items defined', () => {
    expect(MARQUEE_ITEMS.length).toBeGreaterThan(0);
    expect(MARQUEE_ITEMS).toContain('Naksha Pass');
  });

  it('should have 3 approach steps defined in order', () => {
    expect(APPROACH_STEPS.length).toBe(3);
    expect(APPROACH_STEPS.map((s) => s.number)).toEqual(['01', '02', '03']);
  });

  it('should have 3 services defined with cta and images', () => {
    expect(SERVICES_DATA.length).toBe(3);
    SERVICES_DATA.forEach((service) => {
      expect(service.title.length).toBeGreaterThan(0);
      expect(service.image.length).toBeGreaterThan(0);
      expect(service.cta.length).toBeGreaterThan(0);
    });
  });

  it('should have 4 projects with valid size designations', () => {
    expect(PROJECTS_DATA.length).toBe(4);
    PROJECTS_DATA.forEach((project) => {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.image.length).toBeGreaterThan(0);
      expect(['large', 'small']).toContain(project.size);
    });
  });
});
