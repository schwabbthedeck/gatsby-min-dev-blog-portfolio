import React from 'react'
import { Link } from 'gatsby'

const BlogPostCard = (props) => {
  return (
    <div className="blog-post-list-item card" key={props.id}>
      <div className="card-body">
        <Link to={props.fields.slug}>
          <h2 className="card-title">{props.title}</h2>
        </Link>
        <p className="date-subheading">{props.date}</p>
        <p className="card-text">{props.excerpt}</p>
        <Link to={props.fields.slug}>
          <button className="btn btn-primary">Read more</button>
        </Link>
      </div>
    </div>
  )
}

export default BlogPostCard