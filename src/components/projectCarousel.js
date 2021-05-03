import React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "../styles/projectCarousel.scss"

function ProjectCarousel(props) {
  let photoData = props.photo
  const [activeindex, setActiveIndex] = useState(0)

  let dot = []
  let image = []
  for (let i = 0; i < photoData.length; i++) {
    dot.push(
      <div>
        <FontAwesomeIcon
          icon={faCircle}
          className={
            i === activeindex
              ? "project-carousel-dot-active"
              : "project-carousel-dot"
          }
          onClick={() => updateDotActiveIndex(i)}
        />
      </div>
    )

    image.push(
      <img
        className={i === activeindex ? "project-carousel-picture" : "hide"}
        src={photoData[i].photoPath}
        alt={photoData[i].description}
      />
    )
  }

  const [dotArr, setDotArr] = useState(dot)
  const [imageArr, setImageArr] = useState(image)

  function updateElement(currentIndex, newIndex) {
    let tempArr = [...dotArr]
    let tempImgArr = [...imageArr]

    tempArr[currentIndex] = (
      <div>
        <FontAwesomeIcon
          icon={faCircle}
          className="project-carousel-dot"
          onClick={() => updateDotActiveIndex(currentIndex)}
        />
      </div>
    )

    tempArr[newIndex] = (
      <div>
        <FontAwesomeIcon
          icon={faCircle}
          className="project-carousel-dot-active"
          onClick={() => updateDotActiveIndex(newIndex)}
        />
      </div>
    )

    tempImgArr[currentIndex] = (
      <img
        className="hide"
        src={photoData[currentIndex].photoPath}
        alt={photoData[currentIndex].description}
      />
    )

    tempImgArr[newIndex] = (
      <img
        className="project-carousel-picture"
        src={photoData[newIndex].photoPath}
        alt={photoData[newIndex].description}
      />
    )

    setActiveIndex(newIndex)
    setDotArr(tempArr)
    setImageArr(tempImgArr)
  }

  function updateDotActiveIndex(newIndex) {
    updateElement(activeindex, newIndex)
  }

  function decrementActiveIndex() {
    if (activeindex === 0) {
      updateElement(activeindex, photoData.length - 1)
    }

    updateElement(activeindex, activeindex - 1)
  }

  function incrementActiveIndex() {
    if (activeindex + 1 === photoData.length) {
      updateElement(activeindex, 0)
    } else {
      updateElement(activeindex, activeindex + 1)
    }
  }

  return (
    <div className="project-carousel-container">
      <div>{imageArr}</div>
      <div className="project-carousel-description">
        {photoData[activeindex].description}
      </div>
      <div className="project-carousel-control-container">
        <div className="project-carousel-arrow" onClick={decrementActiveIndex}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="project-carousel-dot-container">{dotArr}</div>
        <div className="project-carousel-arrow" onClick={incrementActiveIndex}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
