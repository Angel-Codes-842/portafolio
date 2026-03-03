import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import { projects } from '../../data/projects';

/**
 * Unit Tests for Projects Section
 * **Validates: Requirements 4.1, 4.7**
 */
describe('Projects', () => {
  it('renders the correct number of project cards', () => {
    const { container } = render(<Projects />);
    
    // Each project card has an h3 for the title
    const projectTitles = container.querySelectorAll('h3');
    expect(projectTitles.length).toBe(projects.length);
  });

  it('renders all three required projects', () => {
    render(<Projects />);
    
    // Verify all project titles are rendered
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('applies grid layout classes for responsive design', () => {
    const { container } = render(<Projects />);
    
    // Find the grid container
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
