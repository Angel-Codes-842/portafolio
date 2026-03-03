import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

/**
 * Unit Tests for Hero Component
 * **Validates: Requirements 1.1, 1.2, 1.3, 1.5**
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

  it('displays the tagline text', () => {
    render(<Hero />);
    expect(screen.getByText(/Creo aplicaciones robustas y mantenibles/)).toBeInTheDocument();
  });

  it('displays "Ver Proyectos" button', () => {
    render(<Hero />);
    expect(screen.getByText('Ver Proyectos')).toBeInTheDocument();
  });

  it('displays "Contacto" button', () => {
    render(<Hero />);
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('buttons link to correct sections', () => {
    render(<Hero />);
    const projectsButton = screen.getByText('Ver Proyectos').closest('a');
    const contactButton = screen.getByText('Contacto').closest('a');
    
    expect(projectsButton).toHaveAttribute('href', '#projects');
    expect(contactButton).toHaveAttribute('href', '#contact');
  });
});
