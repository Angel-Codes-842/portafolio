import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

/**
 * Unit Tests for About Component
 * **Validates: Requirements 3.1, 3.2**
 */
describe('About', () => {
  it('renders the section heading "Mi enfoque"', () => {
    render(<About />);
    expect(screen.getByText('Mi enfoque')).toBeInTheDocument();
  });

  it('displays terminal prefix ">" for the heading', () => {
    render(<About />);
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('displays the developer description about web experiences', () => {
    render(<About />);
    expect(screen.getByText(/Desarrollo experiencias web limpias, rápidas y con estética retro minimalista\./)).toBeInTheDocument();
  });

  it('displays the tech stack description', () => {
    render(<About />);
    expect(screen.getByText(/Trabajo con React, Tailwind, Django, APIs, bases de datos y despliegues modernos\./)).toBeInTheDocument();
  });

  it('has the section id "about" for navigation', () => {
    render(<About />);
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
  });
});
