/**
 * TechIcon Component
 * Displays technology icons for the tech stack
 */

import {
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiPython,
  SiSupabase,
  SiSqlite,
  SiPostgresql,
  SiHtmx,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiVite,
  SiMui,
  SiDocker,
  SiNginx,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiPostman,
  SiLinux,
} from 'react-icons/si';

const techIcons = new Map([
  ['React', SiReact],
  ['React 18', SiReact],
  ['Tailwind', SiTailwindcss],
  ['Tailwind CSS', SiTailwindcss],
  ['Django', SiDjango],
  ['Django 5', SiDjango],
  ['Django REST Framework', SiDjango],
  ['Python', SiPython],
  ['Supabase', SiSupabase],
  ['SQLite', SiSqlite],
  ['PostgreSQL', SiPostgresql],
  ['PostgreSQL 16', SiPostgresql],
  ['HTMX', SiHtmx],
  ['FastAPI', SiFastapi],
  ['Flask', SiFlask],
  ['Node.js', SiNodedotjs],
  ['Node.js/NestJS', SiNodedotjs],
  ['NestJS', SiNestjs],
  ['Express', SiExpress],
  ['TypeScript', SiTypescript],
  ['JavaScript ES6+', SiJavascript],
  ['Next.js', SiNextdotjs],
  ['Vite', SiVite],
  ['Material UI', SiMui],
  ['Docker', SiDocker],
  ['Docker Compose', SiDocker],
  ['Nginx', SiNginx],
  ['Git/GitHub', SiGithub],
  ['GitHub Copilot', SiGithubcopilot],
  ['Git', SiGit],
  ['Postman', SiPostman],
  ['Ubuntu Server', SiLinux],
  ['Linux', SiLinux],
]);

export default function TechIcon({ tech, className = '' }) {
  const IconComponent = techIcons.get(tech);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} aria-hidden="true" />;
}

export { techIcons };
