import React from "react"
import { Link } from "react-router-dom"

export default props => (
  <div className="excerpt">
    <h1>
      <Link to={`/${props.id}`}>{props.title}</Link>
    </h1>
    <p>{props.date}</p>
    <br />
    <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
    <hr />
  </div>
)
