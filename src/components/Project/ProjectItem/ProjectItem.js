import "./ProjectItem.css"

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <div className="project-item__content">
        <div className="project-item__overlay"></div>
        <div className="project-item__description">
          <div className="project-item__details">
            <div className="project-item__details-title">
              <h1>{project?.name}</h1>
            </div>
            <div className="project-item__details-description">
              <p>{project?.description}</p>
            </div>
          </div>
          <a
            className="project-item__details-btn"
            href={project?.link}
            target="_blank"
            rel="noreferrer"
          >
            <span>DETAILS</span>
          </a>
        </div>
        <div className="project-item__img-wrapper">
          <img className="project-item__img" src={project?.img} alt={project?.name} />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;