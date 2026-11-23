import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { profile } from '../../data/profile';

/**
 * Unit Tests for Hero Component
 */
describe('Hero', () => {
  it('displays the name "Ángel Gómez"', () => {
    render(<Hero />);
    expect(screen.getByText('Ángel Gómez')).toBeInTheDocument();
  });

  it('displays the title "Full-Stack Developer"', () => {
    render(<Hero />);
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
  });

  it('displays a short tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/Construyo sistemas web listos para producción/)).toBeInTheDocument();
  });

  it('keeps the hero free of repeated role and availability copy', () => {
    render(<Hero />);
    expect(screen.queryByText(new RegExp(profile.role))).not.toBeInTheDocument();
    expect(screen.queryByText(/Disponible para nuevas oportunidades/)).not.toBeInTheDocument();
  });

  it('displays "Ver Proyectos" and "Contacto" buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Ver Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('buttons link to correct sections', () => {
    render(<Hero />);
    const projectsButton = screen.getByText('Ver Proyectos').closest('a');
    const contactButton = screen.getByText('Contacto').closest('a');

    expect(projectsButton).toHaveAttribute('href', '#projects');
    expect(contactButton).toHaveAttribute('href', '#contact');
  });

  it('links to the CV', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /ver currículum/i })).toHaveAttribute('href', profile.cvUrl);
  });
});
