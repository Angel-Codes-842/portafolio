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
  SiHtmx
} from 'react-icons/si';

const techIcons = new Map([
  ['React', SiReact],
  ['Tailwind', SiTailwindcss],
  ['Django', SiDjango],
  ['Python', SiPython],
  ['Supabase', SiSupabase],
  ['SQLite', SiSqlite],
  ['PostgreSQL', SiPostgresql],
  ['HTMX', SiHtmx],
]);

export default function TechIcon({ tech, className = '' }) {
  const IconComponent = techIcons.get(tech);
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} aria-hidden="true" />;
}

export { techIcons };
