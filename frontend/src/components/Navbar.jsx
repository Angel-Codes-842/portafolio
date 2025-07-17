import { FaDownload, FaMoon, FaSun, FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Inicio", icon: <FaHome /> },
  { href: "#projects", label: "Proyectos", icon: <FaProjectDiagram /> },
  { href: "#about", label: "Sobre mí", icon: <FaUser /> },
  { href: "#contact", label: "Contacto", icon: <FaEnvelope /> },
];

const socialLinks = [
  { href: "https://github.com/Angel-Codes-842", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/angel-g%C3%B3mez-b72836209/", icon: <FaLinkedin />, label: "LinkedIn" },
];

const Navbar = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <nav className="hidden md:block bg-darkSection/90 dark:bg-white/80 backdrop-blur shadow-md fixed w-full z-10 font-sans border-b border-card dark:border-gray-200 px-2">
        <div className="container mx-auto px-0 sm:px-4 py-3 flex flex-row justify-between items-center">
          <span className="font-bold text-2xl text-accent tracking-tight dark:text-accent2">Angel Gómez - Desarrollador</span>
          <ul className="flex flex-row space-x-8 font-semibold items-center">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent transition text-textMain dark:text-dark">
                  {link.label}
                </a>
              </li>
            ))}
            {socialLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent2 dark:text-accent2 dark:hover:text-accent font-bold transition ml-2"
                  title={link.label}
                >
                  {link.icon}
                  <span className="ml-1 hidden lg:inline">{link.label}</span>
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setDark(!dark)}
                className="inline-flex items-center bg-card dark:bg-accent2 text-accent dark:text-dark px-3 py-2 rounded-full font-bold shadow transition ml-2"
                title={dark ? "Modo claro" : "Modo oscuro"}
              >
                {dark ? <FaSun /> : <FaMoon />}
              </button>
            </li>
            <li>
              <a
                href="/cv-angel.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent hover:bg-accent2 text-dark px-4 py-2 rounded-full font-bold shadow transition ml-2"
              >
                <FaDownload className="mr-2" />
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="fixed bottom-0 left-0 w-full flex md:hidden bg-darkSection dark:bg-gray-100 border-t border-card dark:border-gray-200 z-20">
        <ul className="flex flex-row justify-around items-center w-full py-2">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="flex flex-col items-center text-accent dark:text-accent2 hover:text-accent2 dark:hover:text-accent font-semibold text-xs">
                {link.icon}
                <span className="text-[10px] mt-1">{link.label}</span>
              </a>
            </li>
          ))}
          {socialLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-accent dark:text-accent2 hover:text-accent2 dark:hover:text-accent font-semibold text-xs"
                title={link.label}
              >
                {link.icon}
                <span className="text-[10px] mt-1">{link.label}</span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDark(!dark)}
              className="flex flex-col items-center text-accent dark:text-accent2 hover:text-accent2 dark:hover:text-accent font-semibold text-xs"
              title={dark ? "Modo claro" : "Modo oscuro"}
            >
              {dark ? <FaSun /> : <FaMoon />}
              <span className="text-[10px] mt-1">{dark ? "Claro" : "Oscuro"}</span>
            </button>
          </li>
          <li>
            <a
              href="/cv-angel.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-accent dark:text-accent2 hover:text-accent2 dark:hover:text-accent font-semibold text-xs"
            >
              <FaDownload />
              <span className="text-[10px] mt-1">CV</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
