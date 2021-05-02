import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { useEffect } from "react"
import "../styles/projectCarousel.scss"

function ProjectCarousel(props) {
  function startTouch() {
    console.log("startTouch")
  }

  function endTouch() {
    console.log("endTouch")
  }

  useEffect(() => {
    document.getElementById("test").addEventListener("touchstart", startTouch)
    document.getElementById("test").addEventListener("touchend", endTouch)
  }, [])

  return (
    <Carousel touch={true}>
      {props.photo.map(function (value) {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 test"
              src={`/${value.photoPath}`}
              alt={value.description}
            />
            <Carousel.Caption>
              <p>{value.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default ProjectCarousel
