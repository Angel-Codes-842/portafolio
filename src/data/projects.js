/**
 * Projects data for the portfolio
 * Contains information about featured projects
 * 
 * Para múltiples imágenes, usa el array 'images' en lugar de 'image':
 * images: ['/images/projects/proyecto-1.png', '/images/projects/proyecto-2.png']
 */
export const projects = [
  {
    id: 'sistema-turnos',
    title: 'Sistema de Turnos - Laboratorio',
    description: 'Sistema de gestión de turnos para clínica laboratorial. Los usuarios solicitan turnos para ser atendidos. Desplegado localmente con Nginx.',
    techStack: ['React', 'Tailwind', 'Django', 'PostgreSQL'],
    // Puedes usar 'image' para una sola imagen o 'images' para varias:
    // images: ['/images/projects/turnos-1.png', '/images/projects/turnos-2.png'],
    images: ['/images/projects/turno.png', '/images/projects/turno2.png', '/images/projects/turno3.png', '/images/projects/turno4.png', '/images/projects/turno5.png', '/images/projects/turno6.png', '/images/projects/turno7.png',]
  },
  {
    id: 'techforge',
    title: 'TechForge Landing Page',
    description: 'Landing page moderna con diseño responsive y animaciones.',
    techStack: ['React', 'Tailwind'],
    images: ['/images/projects/techforge.png', '/images/projects/techforge2.png', '/images/projects/techforge3.png', '/images/projects/techforge4.png'],
    demoUrl: 'https://techforge-5og0.onrender.com/#home',
  },
  {
    id: 'django-htmx',
    title: 'Sistema de Recepción Django',
    description: 'Sistema de recepción con Django y HTMX para interactividad.',
    techStack: ['Django', 'HTMX', 'SQLite'],
    images: ['/images/projects/django-htmx.png', '/images/projects/django-htmx2.png', '/images/projects/django-htmx3.png', '/images/projects/django-htmx4.png', '/images/projects/django-htmx5.png', '/images/projects/django-htmx6.png', '/images/projects/django-htmx7.png', '/images/projects/django-htmx8.png', '/images/projects/django-htmx9.png', '/images/projects/django-htmx10.png',  ],
    repoUrl: 'https://github.com/Angel-Codes-842/Sistema-AllNet',
  },
];

export default projects;
