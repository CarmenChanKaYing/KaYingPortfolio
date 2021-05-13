import React, { useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../styles/index.scss"
import PersonalInfoPanel from "../components/personalInfoPanel.js"
import ProjectPanel from "../components/projectPanel.js"

function MainPage() {
  useEffect(() => {
    document.title = "Ka Ying Portfolio";
  });

  return (
    <Container className="index-container" fluid>
      <Row>
        <Col xl={3} lg={4} className="personal-info-background">
          <PersonalInfoPanel />
        </Col>
        <Col xl={9} lg={8} className="project-background">
          <ProjectPanel />
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage
