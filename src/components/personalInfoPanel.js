import React from "react"
import "../styles/personalInfoPanel.scss"
import ProjectCopyright from "../components/projectCopyright.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function PersonalInfoPanel() {
  return (
    <div className="personal-info-container">
      <div className="personal-info-pic-container">
        <img
          src="images/profile_pic.JPG"
          alt="Profile Picture"
          className="personal-info-pic"
        />
      </div>
      <div>
        <p className="personal-info-name">Carmen Chan</p>
        <div className="personal-info-link">
          <div>
            <a href="mailto:kychan100798@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="personal-info-icon"
              />
            </a>
          </div>
          <div className="left-padding">
            <a href="https://github.com/CarmenChanKaYing" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="personal-info-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="personal-info-skill">
        <p>HTML | CSS | SCSS | JavaScript | ReactJS | jQuery</p>
        <p>PHP | Laravel | SQL</p>
        <p>Android Apps Development (Java)</p>
      </div>
      <div className="personal-info-copyright">
        <ProjectCopyright />
      </div>
    </div>
  )
}

export default PersonalInfoPanel
