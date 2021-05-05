import React from "react"
import { Link } from "gatsby"
import "../styles/projectThumbnail.scss"

function ProjectThumbnail(props) {
  return (
    <Link to={`/${props.slug}/`} className="project-thumbnail-link">
      <div className="project-thumbnail-container">
        <img src={props.img} className="project-thumbnail" alt="Thumbnail"/>
        <p className="project-thumbnail-title">{props.title}</p>
      </div>
    </Link>
  )
}

export default ProjectThumbnail
