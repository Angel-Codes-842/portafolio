/**
 * Projects data for the portfolio.
 * Información actualizada desde el CV (noviembre de 2026).
 *
 * Para múltiples imágenes, usa el array 'images':
 * images: ['/images/projects/proyecto-1.png', '/images/projects/proyecto-2.png']
 */

export const projects = [
  {
    id: 'factusys',
    title: 'FactuSYS — ERP / POS',
    description:
      'ERP/POS multi-rubro con facturación legal con timbrado SET, notas de crédito/débito, remisiones, cuentas corrientes, stock por lotes y vencimientos, multisucursal y auditoría de usuarios. Desplegado con Docker, Docker Compose y Nginx, con respaldos automáticos vía Supercronic.',
    techStack: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Material UI'],
    repoUrl: 'https://github.com/Angel-Codes-842/FactuSYS',
    badge: 'En producción',
  },
  {
    id: 'systurno',
    title: 'SysTurno — Turnos en Tiempo Real',
    description:
      'Plataforma para laboratorios y clínicas con kiosko táctil, panel de recepción y pantalla TV con anuncios por voz e impresión térmica en tiempo real mediante Django Channels y WebSockets. Despliegue automatizado en Ubuntu/Windows Server con Nginx y Systemd.',
    techStack: ['Django', 'Channels', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    images: [
      '/images/projects/turno.png',
      '/images/projects/turno2.png',
      '/images/projects/turno3.png',
      '/images/projects/turno4.png',
      '/images/projects/turno5.png',
      '/images/projects/turno6.png',
      '/images/projects/turno7.png',
    ],
    repoUrl: 'https://github.com/Angel-Codes-842/systurno',
    badge: 'Tiempo real',
  },
  {
    id: 'panaderia-pos',
    title: 'POS Multi-Sucursal — Panadería',
    description:
      'Aplicación web para control de ventas, arqueo de caja, inventario y sucursales, con persistencia en PostgreSQL, Node.js/Express y contenedores Docker Compose con volúmenes y respaldos locales.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    images: [
      '/images/projects/panaderia-1.png',
      '/images/projects/panaderia-2.png',
      '/images/projects/panaderia-3.png',
      '/images/projects/panaderia-4.png',
      '/images/projects/panaderia-5.png',
      '/images/projects/panaderia-6.png',
      '/images/projects/panaderia-7.png',
      '/images/projects/panaderia-8.png',
      '/images/projects/panaderia-9.png',
    ],
    repoUrl: 'https://github.com/Angel-Codes-842/panaderia',
    badge: 'Multi-sucursal',
  },
  {
    id: 'sistema-allnet',
    title: 'Sistema AllNet — Recepción de Taller',
    description:
      'Herramienta interna para la gestión y recepción de equipos de taller, construida con Django y HTMX para interactividad sin recargas. Desplegada localmente con Nginx.',
    techStack: ['Django', 'HTMX', 'SQLite', 'Nginx'],
    images: [
      '/images/projects/django-htmx.png',
      '/images/projects/django-htmx2.png',
      '/images/projects/django-htmx3.png',
      '/images/projects/django-htmx4.png',
      '/images/projects/django-htmx5.png',
      '/images/projects/django-htmx6.png',
      '/images/projects/django-htmx7.png',
      '/images/projects/django-htmx8.png',
      '/images/projects/django-htmx9.png',
      '/images/projects/django-htmx10.png',
    ],
    repoUrl: 'https://github.com/Angel-Codes-842/Sistema-AllNet',
    badge: 'Uso interno',
  },
  {
    id: 'techforge',
    title: 'TechForge — Landing Page',
    description:
      'Landing page responsive con animaciones y una estética moderna, construida con React, Tailwind CSS y Vite.',
    techStack: ['React', 'Tailwind', 'Vite'],
    images: [
      '/images/projects/techforge.png',
      '/images/projects/techforge2.png',
      '/images/projects/techforge3.png',
      '/images/projects/techforge4.png',
    ],
    demoUrl: 'https://techforge-5og0.onrender.com/#home',
    badge: 'Demo en vivo',
  },
];

export default projects;
