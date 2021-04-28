import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../styles/index.scss"
import PersonalInfoPanel from "../components/personalInfoPanel.js"

function MainPage() {
  return (
    <Container className="index-container" fluid>
      <Row>
        <Col xl={3} className="test">
          <PersonalInfoPanel />
        </Col>
        <Col xl={9}>456</Col>
      </Row>
    </Container>
  )
}

export default MainPage
