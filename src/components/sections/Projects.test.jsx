import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import { projects } from '../../data/projects';

/**
 * Unit Tests for Projects Section
 */
describe('Projects', () => {
  it('renders one card per project', () => {
    const { container } = render(<Projects />);

    const projectTitles = container.querySelectorAll('h3');
    expect(projectTitles.length).toBe(projects.length);
  });

  it('renders every project title from the data source', () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
    });
  });

  it('renders the projects introduced from the CV', () => {
    render(<Projects />);

    expect(screen.getAllByText(/FactuSYS/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/SysTurno/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/POS Multi-Sucursal/).length).toBeGreaterThan(0);
  });

  it('applies grid layout classes for responsive design', () => {
    const { container } = render(<Projects />);

    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toBeTruthy();
    expect(gridContainer.classList.contains('grid-cols-1')).toBe(true);
    expect(gridContainer.classList.contains('md:grid-cols-2')).toBe(true);
  });

  it('renders section with correct id for navigation', () => {
    const { container } = render(<Projects />);

    const section = container.querySelector('section');
    expect(section.id).toBe('projects');
  });
});
