import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/layout'
import { Row, Col } from 'react-bootstrap'
import { format } from 'date-fns'

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  const date = format(new Date(frontmatter.date), "PPP")

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p className="date-subheading">{date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      <Row style={{ paddingTop: '4rem' }}>
        <Col>
          {previous === false ? null : (
            <>
              {previous && (
                <Link to={previous.fields.slug}>
                  <p>Previous post: {previous.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
        </Col>
        <Col style={{ textAlign: 'right' }}>
          {next === false ? null : (
            <>
              {next && (
                <Link to={next.fields.slug}>
                  <p>Next post: {next.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`