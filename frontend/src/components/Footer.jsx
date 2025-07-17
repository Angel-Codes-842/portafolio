import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-darkSection dark:bg-gray-100 text-textSecondary dark:text-dark py-4 text-center font-sans">
    <span>
      © {new Date().getFullYear()} Angel. Todos los derechos reservados.
    </span>
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
    <span className="mx-2">|</span>
    <a
      href="https://github.com/Angel-Codes-842"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-accent hover:text-accent2 dark:text-accent2 dark:hover:text-accent font-bold transition mx-1"
      title="GitHub"
    >
      <FaGithub className="mr-1" /> GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/angel-g%C3%B3mez-b72836209/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-accent hover:text-accent2 dark:text-accent2 dark:hover:text-accent font-bold transition mx-1"
      title="LinkedIn"
    >
      <FaLinkedin className="mr-1" /> LinkedIn
    </a>
  </footer>
);

export default Footer;