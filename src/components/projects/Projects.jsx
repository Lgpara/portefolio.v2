import { useState } from "react";
import projectData from "../../appdata/projects.json";
import img from "../../appdata/images.json"
import "./projects.css";

export default function Projects() {
  const [projectsImgSelect, setProjectsImgSelect] = useState(
    projectData.map(() => 0)
  );
  const [projectsLength, setProjectsLength] = useState(
    projectData.map((project) => project.images.length)
  );
  function handleChevronClick(projectIndex, way) {
    const newArray = [...projectsImgSelect];
    if (way === "right") {
      const currentIndex = projectsImgSelect[projectIndex];
      let newIndex = currentIndex + 1;
      if (newIndex > projectsLength[projectIndex] - 1) {
        newIndex = 0;
        newArray[projectIndex] = newIndex;
        setProjectsImgSelect(newArray);
      } else {
        newArray[projectIndex] = newIndex;
        setProjectsImgSelect(newArray);
      }
    } else if (way === "left") {
      const currentIndex = projectsImgSelect[projectIndex];
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = projectsLength[projectIndex] - 1;
        newArray[projectIndex] = newIndex;
        setProjectsImgSelect(newArray);
      } else {
        newArray[projectIndex] = newIndex;
        setProjectsImgSelect(newArray);
      }
    } else {
      return;
    }
  }

  const getIconSource = (name) => {
    const stacks = img.icons.stacks
    const tools = img.icons.tools
    const techs = img.icons.techs
    for (const stack of stacks) {
      if (stack.name === name) {
        return stack.source;
      }
    }
  
    for (const tool of tools) {
      if (tool.name === name) {
        return tool.source;
      }
    }
  
    for (const tech of techs) {
      if (tech.name === name) {
        return tech.source;
      }
    }
  
    return null;
  }

  return (
    <div className="projectsContainer">
      <h2>My work</h2>
      <div className="projectCardsContainer">
        {projectData.map((project, index) => (
          <div key={"projet" + index}>
            <div
              className={
                index % 2 === 0 ? "projectCard" : "projectCard rowReverse"
              }
            >
              <div className="carouselImg">
                <img
                  src={project.images[projectsImgSelect[index]]}
                  alt=""
                  className="projectImage"
                  transition="opacity 0.5s ease"
                />
                <div className="arrowContainer">
                  <i
                    className="fa-solid fa-circle-chevron-left"
                    onClick={() => handleChevronClick(index, "left")}
                  ></i>
                  <i
                    className="fa-solid fa-circle-chevron-right"
                    onClick={() => handleChevronClick(index, "right")}
                  ></i>
                </div>
              </div>
              <div className="infos">
                <h3 className="projectTitle">{project.titre}</h3>


                <div className="projectStacks">{project.stacks.map((stack, index)=>(
                  <img key={"projectstack" + index} className="projectStacksIcon"  src={getIconSource(stack)} />
                ))}</div>


                <p>{project.description}</p>
                <div className="linksContainer">
                  {project.link.website !== "" ? (
                    <a href={project.link.website} className="website">
                      <i className="fa-solid fa-globe"></i>
                      <p>Visit website</p>
                    </a>
                  ) : null}
                  {project.link.github !== "" ? (
                    <a href={project.link.github} className="gh">
                      <i className="fa-brands fa-github"></i>
                      <p>GitHub Code</p>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            {index < projectData.length - 1 ? (
              <div className="separationBar"></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

