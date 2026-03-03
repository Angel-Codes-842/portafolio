import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import ProjectCard from './ProjectCard';

/**
 * Property-Based Test for ProjectCard Tech Stack
 * **Feature: retro-portfolio, Property 1: Tech Stack Completeness**
 * **Validates: Requirements 4.5**
 */
describe('ProjectCard', () => {
  it('Property 1: Tech Stack Completeness - renders all tech stack items', () => {
    fc.assert(
      fc.property(
        // Generate array of 1-10 unique non-empty tech stack strings
        fc.array(
          fc.string({ minLength: 1, maxLength: 20 })
            .filter(s => s.trim().length > 0),
          { minLength: 1, maxLength: 10 }
        ).map(arr => [...new Set(arr)]).filter(arr => arr.length > 0),
        (techStack) => {
          const { container } = render(
            <ProjectCard
              title="Test Project"
              description="Test description"
              image="/test.png"
              techStack={techStack}
            />
          );
          
          // Verify all tech stack items appear in the rendered output
          techStack.forEach(tech => {
            const techElements = container.querySelectorAll('span');
            const found = Array.from(techElements).some(
              el => el.textContent === tech
            );
            expect(found).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property-Based Test for ProjectCard Data Integrity
   * **Feature: retro-portfolio, Property 3: Project Data Integrity**
   * **Validates: Requirements 4.3, 4.5**
   */
  it('Property 3: Project Data Integrity - renders title, description, and all techStack items without modification', () => {
    fc.assert(
      fc.property(
        // Generate project data
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
          description: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
          techStack: fc.array(
            fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
            { minLength: 1, maxLength: 5 }
          ).map(arr => [...new Set(arr)]).filter(arr => arr.length > 0),
        }),
        ({ title, description, techStack }) => {
          const { container } = render(
            <ProjectCard
              title={title}
              description={description}
              image="/test.png"
              techStack={techStack}
            />
          );
          
          // Verify title is rendered exactly
          const titleElement = container.querySelector('h3');
          expect(titleElement.textContent).toBe(title);
          
          // Verify description is rendered exactly
          const descElement = container.querySelector('p');
          expect(descElement.textContent).toBe(description);
          
          // Verify all tech stack items are rendered exactly
          techStack.forEach(tech => {
            const techElements = container.querySelectorAll('span');
            const found = Array.from(techElements).some(
              el => el.textContent === tech
            );
            expect(found).toBe(true);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
