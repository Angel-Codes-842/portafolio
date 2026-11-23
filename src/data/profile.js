/**
 * Professional profile data.
 * Source: CV_Angel_Hernan_Gomez_Ayala-v7.pdf (actualizado en noviembre de 2026)
 */

export const profile = {
  fullName: 'Ángel Hernán Gómez Ayala',
  displayName: 'Ángel Gómez',
  role: 'Desarrollador Web Full-Stack & Especialista en Soporte TI',
  shortRole: 'Full-Stack Developer',
  location: 'Lambaré / Gran Asunción, Paraguay',
  email: 'hernan17ayala@gmail.com',
  phone: '0975 628 945',
  whatsappUrl: 'https://wa.me/595975628945',
  githubUrl: 'https://github.com/Angel-Codes-842',
  linkedinUrl: 'https://www.linkedin.com/in/angel-gómez-b72836209/',
  portfolioUrl: 'https://portafolio-rkbv.onrender.com',
  cvUrl: '/cv/CV_Angel_Hernan_Gomez_Ayala.pdf',
  cvFileName: 'CV_Angel_Hernan_Gomez_Ayala.pdf',
  yearsOfExperience: 6,
  summary: [
    'Profesional de TI con 6 años de experiencia comprobable en soporte técnico, infraestructura y redes, combinada con sólida experiencia desarrollando sistemas empresariales (ERP/POS), facturación con timbrado SET y aplicaciones web full-stack en producción.',
    'Especializado en Python (Django, FastAPI, Flask), React, TypeScript, Node.js/NestJS, PostgreSQL y contenerización con Docker. Alta velocidad de entrega mediante flujos asistidos por IA y buenas prácticas de arquitectura.',
  ],
  stats: [
    { value: '6+', label: 'años en TI' },
    { value: 'ERP/POS', label: 'sistemas en producción' },
    { value: 'Full-stack', label: 'de backend a frontend' },
  ],
  skillGroups: [
    {
      title: 'Backend & APIs',
      skills: ['Python', 'Django 5', 'Django REST Framework', 'Channels/WebSockets', 'FastAPI', 'Flask', 'Node.js', 'NestJS', 'Express', 'APIs REST'],
    },
    {
      title: 'Frontend',
      skills: ['React 18', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'Vite', 'Material UI', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      title: 'Bases de datos',
      skills: ['PostgreSQL 16', 'Supabase', 'SQLite', 'Modelado relacional', 'Migraciones', 'Respaldos automáticos'],
    },
    {
      title: 'DevOps & infraestructura',
      skills: ['Docker', 'Docker Compose', 'Nginx', 'Systemd', 'Ubuntu Server', 'Windows Server', 'Redes LAN', 'Bash/PowerShell'],
    },
    {
      title: 'IA & metodologías',
      skills: ['GitHub Copilot', 'OpenCode', 'Antigravity', 'Git/GitHub', 'Metodologías ágiles', 'Arquitectura modular', 'Pruebas de integración'],
    },
  ],
  experience: {
    role: 'Técnico Informático & Desarrollador de Sistemas Internos',
    company: 'Allnet Informática y Servicios',
    location: 'Pilar, Ñeembucú',
    period: '6 años',
    highlights: [
      'Soporte técnico integral: hardware, software, impresoras térmicas/fiscales y mantenimiento preventivo/correctivo.',
      'Configuración de redes LAN, servidores locales, estaciones de trabajo y diagnóstico avanzado de incidencias.',
      'Desarrollo e implementación de herramientas internas de gestión y recepción de equipos de taller (Sistema-AllNet).',
    ],
  },
  education: [
    {
      title: 'Licenciatura en Análisis de Sistemas',
      detail: '4.º año cursado · Universidad Nacional de Pilar (UNP) — Facultad de Ciencias, Tecnologías y Artes',
    },
    {
      title: 'Bachillerato Técnico en Informática',
      detail: 'Colegio Juan XXIII — Pilar, Ñeembucú',
    },
  ],
};

export default profile;
