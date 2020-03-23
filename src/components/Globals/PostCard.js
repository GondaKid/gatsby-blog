import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import "../style/PostCard.scss"

const PostCard = ({ image, title, subtitle, slug }) => {
  return (
    <div className="card text-center" style={{ width: 18 + "rem" }}>
      <Img className="card-img-top" fluid={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subtitle}</p>
        <Link to={slug}>
          <div className="btn btn-primary">Read More</div>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
