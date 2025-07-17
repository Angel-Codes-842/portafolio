import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import useProjects from './hooks/useProjects';

function App() {
  const { projects, loading } = useProjects();

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-dark text-textMain dark:bg-white dark:text-dark text-center font-sans pt-24 px-4">
        <img
          src="/angel-avatar.png"
          alt="Avatar"
          className="w-32 h-32 md:w-36 md:h-36 rounded-full mb-6 shadow-xl border-4 border-card dark:border-darkSection object-cover"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          ¡Hola! Soy <span className="text-accent dark:text-accent2">Angel</span> 👋
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl text-textSecondary dark:text-gray-600">
          Desarrollador web apasionado por crear soluciones modernas y eficientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-accent hover:bg-accent2 text-dark dark:text-white dark:bg-accent2 dark:hover:bg-accent px-6 py-3 rounded-full font-bold shadow transition hover:scale-105"
          >
            Ver proyectos
          </a>
          <a
            href="/cv-angel.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-dark dark:bg-darkSection dark:text-white px-6 py-3 rounded-full font-bold shadow transition hover:bg-accent hover:text-white dark:hover:bg-accent2 dark:hover:text-dark"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6H4l6 6 6-6h-3V7z"/></svg>
            Descargar CV
          </a>
        </div>
      </section>
      <section id="projects" className="py-20 bg-darkSection dark:bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent dark:text-accent2">Proyectos</h2>
          {loading ? (
            <div className="text-center text-accent">Cargando proyectos...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard key={project.id || idx} {...project} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section id="about" className="py-20 bg-dark dark:bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent dark:text-accent2">Sobre mí</h2>
          <AboutSection />
        </div>
      </section>
      <TechStack />
      <section id="contact" className="py-20 bg-darkSection dark:bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent dark:text-accent2">Contacto</h2>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
