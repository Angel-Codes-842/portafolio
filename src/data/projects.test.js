import { describe, it, expect } from 'vitest';
import { projects } from './projects';

/**
 * Data integrity checks for the portfolio projects
 */
describe('projects data', () => {
  it('contains a unique id and complete content for every project', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(projects.length);

    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(project.repoUrl || project.demoUrl).toBeTruthy();
    });
  });

  it('includes the projects highlighted in the CV', () => {
    expect(projects.length).toBeGreaterThanOrEqual(5);
    expect(projects.some((project) => project.id === 'factusys')).toBe(true);
    expect(projects.some((project) => project.id === 'systurno')).toBe(true);
    expect(projects.some((project) => project.id === 'panaderia-pos')).toBe(true);
  });

  it('uses valid http(s) links', () => {
    projects.forEach((project) => {
      [project.repoUrl, project.demoUrl].filter(Boolean).forEach((url) => {
        expect(url).toMatch(/^https:\/\//);
      });
    });
  });
});
