function ListDisplay({ projects }) {
  return (
    <div className="project-grid">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} className="project-image-preview" />
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}


export default ListDisplay;
