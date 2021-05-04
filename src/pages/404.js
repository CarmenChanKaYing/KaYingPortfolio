import React from "react"
import { Link } from "gatsby"

function NotFoundPage() {
  const containerStyle = {
    height: "100%",
    width: "100%",
    backgroundColor: "#ecefec",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  const msgStyle = {
    fontSize: "28px",
    padding: "25px 0",
  }

  const linkStyle = {
    fontSize: "20px",
  }

  return (
    <div style={containerStyle}>
      <div style={msgStyle}>404 Not Found</div>
      <div style={linkStyle}>
        <Link to="/">
          Back
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
