const ProjectCard = ({ title, description, image_url, github_url, live_url, technologies }) => (
  <div className="bg-card dark:bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-4 sm:p-6 flex flex-col font-sans border border-darkSection dark:border-gray-200 hover:border-accent w-full max-w-xs mx-auto">
    {image_url && (
      <img src={image_url} alt={title} className="rounded-md mb-4 h-40 sm:h-48 object-cover border-2 border-darkSection dark:border-gray-200" />
    )}
    <h3 className="text-lg sm:text-xl font-bold mb-2 text-accent dark:text-accent2">{title}</h3>
    <p className="text-textMain dark:text-dark mb-2 text-sm sm:text-base">{description}</p>
    <div className="mb-2">
      <span className="text-xs sm:text-sm text-accent2 dark:text-accent">Tecnologías: {technologies}</span>
    </div>
    <div className="flex space-x-4 mt-auto">
      {github_url && (
        <a href={github_url} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent2 dark:text-accent2 dark:hover:text-accent hover:underline transition text-sm sm:text-base">
          GitHub
        </a>
      )}
      {live_url && (
        <a href={live_url} target="_blank" rel="noopener noreferrer" className="text-accent2 hover:text-accent dark:text-accent dark:hover:text-accent2 hover:underline transition text-sm sm:text-base">
          Ver Proyecto
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;