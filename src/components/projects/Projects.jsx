import { useState } from "react";
import projectData from "../../appdata/projects.json";
import "./projects.css";

export default function Projects() {
  const [projectsImgSelect, setProjectsImgSelect] = useState(projectData.map(()=>(0)))
  const [projectsLength, setProjectsLength] = useState(projectData.map((project)=>(project.images.length)))
  console.log(projectsImgSelect)
  function handleChevronClick(projectIndex, way){
    const newArray = [...projectsImgSelect]
    if(way === "right"){
      const currentIndex = projectsImgSelect[projectIndex]
      let newIndex = currentIndex + 1
      if (newIndex > projectsLength[projectIndex] - 1){
        newIndex = 0
        newArray[projectIndex]= newIndex
        setProjectsImgSelect(newArray)
      } else {
        newArray[projectIndex]= newIndex
        setProjectsImgSelect(newArray)
      }
    } else if(way ==="left"){
      const currentIndex = projectsImgSelect[projectIndex]
      let newIndex = currentIndex - 1
      if (newIndex < 0){
        newIndex = projectsLength[projectIndex] - 1
        newArray[projectIndex]= newIndex
        setProjectsImgSelect(newArray)
      } else {
        newArray[projectIndex]= newIndex
        setProjectsImgSelect(newArray)
      }
    }else {
      return
    }
  }
  return (
    <div className="projectsContainer">
      <h2>My work</h2>
      <div className="projectCardsContainer">
        {projectData.map((project, index) => (
          <>
            <div className={index % 2 === 0 ? "projectCard" : "projectCard rowReverse"}>
              <div className="carouselImg">
                <img src={project.images[projectsImgSelect[index]]} alt="" className="projectImage" />
                <div className="arrowContainer">
                  <i class="fa-solid fa-circle-chevron-left" onClick={()=>handleChevronClick(index, "left")}></i>
                  <i class="fa-solid fa-circle-chevron-right" onClick={()=>handleChevronClick(index, "right")}></i>
                </div>
              </div>
              <div className="infos">
                <h3 className="projectTitle">{project.titre}</h3>
                <div className="projectStacks">{project.stacks}</div>
              </div>
            </div>
            {index < projectData.length - 1 ?<div className="separationBar"></div> : null}
          </>
        ))}
      </div>
    </div>
  );
}

{/* <div className="links">
  <i class="fa-solid fa-globe"></i>
  <i class="fa-brands fa-github"></i>
  <i class="fa-solid fa-info"></i>
</div> */}