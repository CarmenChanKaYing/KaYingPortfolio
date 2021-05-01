import React from "react"
import "../styles/projectPanel.scss"
import ProjectThumbnail from "./projectThumbnail.js"
import projectData from "../projectDatabase.json"

function ProjectPanel() {
  return (
    <div className="project-panel-container">
      {projectData.map((value) => {
        return (
          <div>
            <ProjectThumbnail img={value.thumbnail} title={value.title} slug={value.slug}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectPanel
