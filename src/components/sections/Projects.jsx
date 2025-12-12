/**
 * Projects Section Component
 * Displays projects in a 2-column grid (1-column on mobile)
 * Requirements: 4.1, 4.7, 7.5, 9.3
 */

import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`py-16 px-4 md:px-8 bg-white ${isVisible ? 'animate-crt' : 'opacity-0'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className="font-pixel text-3xl md:text-4xl text-carbon mb-12 text-center">
          Proyectos
        </h2>
        
        {/* Projects grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              images={project.images}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
