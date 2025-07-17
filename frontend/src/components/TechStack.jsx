import { FaGitAlt, FaGithub, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiFastapi, SiTailwindcss, SiPostgresql, SiDjango, SiPostman, SiFlask, SiSqlite, SiDocker, SiFigma, SiCanva } from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", icon: <FaReact className="text-accent dark:text-accent2" /> },
      { name: "JavaScript", icon: <FaNodeJs className="text-accent2 dark:text-accent" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-accent dark:text-accent2" /> },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Python", icon: <FaPython className="text-accent2 dark:text-accent" /> },
      { name: "Django", icon: <SiDjango className="text-accent dark:text-accent2" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-accent dark:text-accent2" /> },
      { name: "Flask", icon: <SiFlask className="text-accent2 dark:text-accent" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-accent dark:text-accent2" /> },
    ],
  },
  {
    title: "Base de datos",
    techs: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-accent2 dark:text-accent" /> },
      { name: "SQLite", icon: <SiSqlite className="text-accent dark:text-accent2" /> },
    ],
  },
  {
    title: "Testing y APIs",
    techs: [
      { name: "Postman", icon: <SiPostman className="text-accent dark:text-accent2" /> },
    ],
  },
  {
    title: "Herramientas",
    techs: [
      { name: "Git", icon: <FaGitAlt className="text-accent2 dark:text-accent" /> },
      { name: "GitHub", icon: <FaGithub className="text-accent dark:text-accent2" /> },
      { name: "Docker", icon: <SiDocker className="text-accent dark:text-accent2" /> },
      { name: "Figma", icon: <SiFigma className="text-accent2 dark:text-accent" /> },
      { name: "Canva", icon: <SiCanva className="text-accent dark:text-accent2" /> },
    ],
  },
];

const TechStack = () => (
  <section id="tech" className="py-20 bg-darkSection dark:bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-accent dark:text-accent2">Tecnologías que uso</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {techCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-bold mb-4 text-accent2 dark:text-accent text-center">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {category.techs.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center bg-card dark:bg-white rounded-lg p-4 shadow transition-transform hover:scale-110 hover:shadow-lg w-32">
                  <div className="text-5xl mb-2">{tech.icon}</div>
                  <span className="text-accent dark:text-accent2 font-semibold text-center text-sm break-words">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
