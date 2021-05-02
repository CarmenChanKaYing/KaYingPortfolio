import React from "react"
import { Link } from "gatsby"
import ProjectCarousel from "../components/projectCarousel.js"
import "../styles/projectDetail.scss"

const projectDetail = ({ pageContext }) => (
  <div className="project-detail-container">
    <div className="project-detail-heading">
      <Link to="/" className="project-detail-heading-text">
        Carmen Chan
      </Link>
    </div>
    <div className="project-detail-content">
      <div>
        <ProjectCarousel photo={pageContext.photo}/>
      </div>
      <p>{pageContext.title}</p>
      <p>{pageContext.demo}</p>
      <p>{pageContext.languages}</p>
    </div>
  </div>
)

export default projectDetail
