import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectCarousel from "../components/projectCarousel.js"
import ProjectTag from "../components/projectTag.js"
import ProjectCopyright from "../components/projectCopyright.js"
import "../styles/projectDetail.scss"

function ProjectDetail({ pageContext }) {
  return (
    <div className="project-detail-container">
      <Helmet>
        <title>{pageContext.title}</title>
      </Helmet>
      <div className="project-detail-content-container">
        <div className="project-detail-heading">
          <Link to="/" className="project-detail-heading-text">
            Carmen Chan
        </Link>
        </div>

        <ProjectCarousel photo={pageContext.photo} />
        <div className="project-detail-title">{pageContext.title}</div>
        <div className="project-detail-link-container">
          {pageContext.github === undefined ? (
            ""
          ) : (
            <a
              href={pageContext.github}
              className="project-detail-link"
              target="_blank"
            >
              GitHub
            </a>
          )}
          {pageContext.demo === undefined ? (
            ""
          ) : (
            <a
              href={pageContext.demo}
              className="project-detail-link"
              target="_blank"
            >
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
  );
}


export default ProjectDetail
