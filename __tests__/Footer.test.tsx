import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/lib/constants';

describe('Footer Component', () => {
  const renderFooter = () => {
    return render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );
  };

  it('should render brand name and copyright', () => {
    renderFooter();

    expect(screen.getByText(SITE_CONFIG.shortName)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${new Date().getFullYear()}`, 'i'))).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    renderFooter();

    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '#top');
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: /Approach/i })).toHaveAttribute('href', '#approach');
    expect(screen.getByRole('link', { name: /Services/i })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: /Projects/i })).toHaveAttribute('href', '#projects');
  });

  it('should render social media links with valid target and rel attributes', () => {
    renderFooter();

    const fbLink = screen.getByLabelText('Facebook');
    const instaLink = screen.getByLabelText('Instagram');
    const tiktokLink = screen.getByLabelText('TikTok');

    expect(fbLink).toHaveAttribute('href', SITE_CONFIG.socials.facebook);
    expect(fbLink).toHaveAttribute('target', '_blank');
    expect(fbLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(instaLink).toHaveAttribute('href', SITE_CONFIG.socials.instagram);
    expect(tiktokLink).toHaveAttribute('href', SITE_CONFIG.socials.tiktok);
  });
});
