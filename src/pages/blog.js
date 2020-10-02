import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { format } from 'date-fns'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <h3>I sometimes write things.</h3>
      <div className="">
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => {
            const date = format(new Date(frontmatter.date), "PPP")
            return (
              <div className="blog-post-list-item card" key={id}>

                <div className="card-body">
                  <Link to={fields.slug}>
                    <h2 className="card-title">{frontmatter.title}</h2>
                  </Link>
                  <p className="date-subheading">{date}</p>
                  <p className="card-text">{excerpt}</p>
                  <Link to={fields.slug}>
                    <button className="btn btn-primary">Read more</button>
                  </Link>
                </div>

              </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { published: { eq: true } } },
      limit: 200
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
