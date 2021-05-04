import React from "react"
import { Link } from "gatsby"
import ProjectCarousel from "../components/projectCarousel.js"
import ProjectTag from "../components/projectTag.js"
import ProjectCopyright from "../components/projectCopyright.js"
import "../styles/projectDetail.scss"

const projectDetail = ({ pageContext }) => (
  <div className="project-detail-container">
    <div className="project-detail-heading">
      <Link to="/" className="project-detail-heading-text">
        Carmen Chan
      </Link>
    </div>
    <div className="project-detail-content-container">
      <ProjectCarousel photo={pageContext.photo} />
      <div className="project-detail-title">{pageContext.title}</div>
      <div className="project-detail-link-container">
        {pageContext.github === undefined ? (
          ""
        ) : (
          <a href={pageContext.github} className="project-detail-link">
            GitHub
          </a>
        )}
        {pageContext.demo === undefined ? (
          ""
        ) : (
          <a href={pageContext.demo} className="project-detail-link">
            Demo
          </a>
        )}
      </div>
      <div className="project-detail-languages-container">
        {pageContext.languages.map(function (value) {
          return <ProjectTag language={value} />
        })}
      </div>
      {pageContext.description === undefined ? (
        ""
      ) : (
        <div className="project-detail-description">
          {pageContext.description}
        </div>
      )}
      <div className="project-detail-content">{pageContext.content}</div>
      <div className="project-detail-coyright">
        <ProjectCopyright />
      </div>
    </div>
  </div>
)

export default projectDetail
