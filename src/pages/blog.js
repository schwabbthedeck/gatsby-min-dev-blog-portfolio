import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPostCard from '../components/blogpostcard'
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
              <BlogPostCard title={frontmatter.title} date={date} fields={fields} excerpt={excerpt} id={id}></BlogPostCard>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query SITE_BLOG_INDEX_QUERY {
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
