import React from "react"
import "../styles/projectTag.scss"

function ProjectTag(props) {
return <div className="project-tag">{`#${props.language}`}</div>

}

export default ProjectTag
