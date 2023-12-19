import projectData from "../../appdata/projects.json"

export default function Projects(){
    return(
        <div className="projectsContainer">
            {projectData.map((project)=>(
                <div className="projectCard">
                    <h3 className="projectTitle">{project.titre}</h3>
                    <p className="projectDescription">{project.description}</p>
                </div>
            ))}
        </div>
    )
}