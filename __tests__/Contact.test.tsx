import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Contact from '@/components/Contact';
import { LanguageProvider } from '@/context/LanguageContext';

describe('Contact Component', () => {
  const renderContact = () => {
    return render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );
  };

  it('should render all contact form fields and submit button', () => {
    renderContact();

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /Send Message/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });

  it('should enforce required constraints on key inputs', () => {
    renderContact();

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Your Message/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(messageInput).toBeRequired();
  });

  it('should update input values when user types', () => {
    renderContact();

    const nameInput = screen.getByLabelText(/Full Name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Email Address/i) as HTMLInputElement;
    const phoneInput = screen.getByLabelText(/Phone Number/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/Your Message/i) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: 'Aarav Sharma' } });
    fireEvent.change(emailInput, { target: { value: 'aarav@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '+977 9812345678' } });
    fireEvent.change(messageInput, { target: { value: 'Looking for 3D naksha pass.' } });

    expect(nameInput.value).toBe('Aarav Sharma');
    expect(emailInput.value).toBe('aarav@example.com');
    expect(phoneInput.value).toBe('+977 9812345678');
    expect(messageInput.value).toBe('Looking for 3D naksha pass.');
  });

  it('should render office information cards', () => {
    renderContact();

    expect(screen.getByText(/Visit Our Office/i)).toBeInTheDocument();
    expect(screen.getByText(/Call Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Email Us/i)).toBeInTheDocument();
  });
});
