const Footer = () => (
  <footer className="bg-darkSection dark:bg-gray-100 text-textSecondary dark:text-dark py-4 text-center font-sans">
    <span>© {new Date().getFullYear()} Angel. Todos los derechos reservados.</span>
    <span className="mx-2">|</span>
    <a
      href="/cv-angel.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-accent hover:text-accent2 dark:text-accent2 dark:hover:text-accent font-bold transition"
    >
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6H4l6 6 6-6h-3V7z"/></svg>
      Descargar CV
    </a>
  </footer>
);

export default Footer;