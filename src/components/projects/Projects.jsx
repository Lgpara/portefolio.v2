import projectData from "../../appdata/projects.json";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <h2>My work</h2>
      <div className="projectCardsContainer">
        {projectData.map((project) => (
          <div className="projectCard">
            <img src={project.images[0]} alt="" className="projectImage" />
            <div className="links">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-solid fa-info"></i>
            </div>
            <div className="infos">
                <h3 className="projectTitle">{project.titre}</h3>
                <div className="projectStacks">
                    {project.stacks}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
