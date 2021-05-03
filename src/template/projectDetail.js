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
      <ProjectCarousel photo={pageContext.photo} />
      <div>{pageContext.title}</div>
      <div>
        {pageContext.github === "undefined" ? (
          ""
        ) : (
          <a href={pageContext.github}>GitHub</a>
        )}
        {pageContext.demo === "undefined" ? (
          ""
        ) : (
          <a href={pageContext.demo}>Demo</a>
        )}
      </div>
      <p>{pageContext.languages}</p>
      <div>{pageContext.content}</div>
      {pageContext.description === "undefined" ? (
        ""
      ) : (
        <div>{pageContext.description}</div>
      )}
    </div>
  </div>
)

export default projectDetail
