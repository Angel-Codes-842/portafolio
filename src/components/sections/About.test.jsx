import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

/**
 * Unit Tests for About Component
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

  it('displays the updated professional summary', () => {
    render(<About />);
    expect(screen.getByText(/Profesional de TI con 6 años de experiencia comprobable/)).toBeInTheDocument();
  });

  it('displays the updated tech stack description', () => {
    render(<About />);
    expect(screen.getByText(/Especializado en Python \(Django, FastAPI, Flask\), React, TypeScript/)).toBeInTheDocument();
  });

  it('renders the grouped tech stack', () => {
    render(<About />);
    expect(screen.getByText('Stack tecnológico')).toBeInTheDocument();
    expect(screen.getByText('Backend & APIs')).toBeInTheDocument();
    expect(screen.getByText('DevOps & infraestructura')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL 16')).toBeInTheDocument();
  });

  it('has the section id "about" for navigation', () => {
    render(<About />);
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
  });
});
