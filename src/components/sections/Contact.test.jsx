import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import { profile } from '../../data/profile';

/**
 * Unit Tests for Contact Component
 */
describe('Contact', () => {
  it('renders the section heading and call to action', () => {
    render(<Contact />);

    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText('¡Trabajemos juntos!')).toBeInTheDocument();
  });

  it('renders the location and phone from the CV', () => {
    render(<Contact />);

    expect(screen.getByText(new RegExp(profile.location))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(profile.phone))).toBeInTheDocument();
  });

  it('renders direct contact links', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: new RegExp(profile.email) })).toHaveAttribute('href', `mailto:${profile.email}`);
    expect(screen.getByRole('link', { name: /WhatsApp/ })).toHaveAttribute('href', profile.whatsappUrl);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', profile.linkedinUrl);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', profile.githubUrl);
  });

  it('opens external profiles in a new tab safely', () => {
    render(<Contact />);

    const whatsapp = screen.getByRole('link', { name: /WhatsApp/ });
    const linkedin = screen.getByRole('link', { name: 'LinkedIn' });
    const github = screen.getByRole('link', { name: 'GitHub' });

    [whatsapp, linkedin, github].forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders section with correct id for navigation', () => {
    render(<Contact />);

    expect(document.getElementById('contact')).toBeInTheDocument();
  });
});
