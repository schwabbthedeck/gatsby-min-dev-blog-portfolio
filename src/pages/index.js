import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SmallHero from '../components/homehero'
import { Row, Col } from 'react-bootstrap'
import ProjectImage from '../components/image'
import BlogPostCard from '../components/blogpostcard'
import { format } from 'date-fns'

const IndexPage = ({ data }) => {

  return (
    <>
      <SmallHero></SmallHero>
      <Layout>
        <SEO title="Home" />
        <Row>
          <Col sm={4}>
            <ProjectImage></ProjectImage>
          </Col>
          <Col>
            <h1>Current Projects</h1>
            <p>Use this space as a quick showcase for what you're currently working on.</p>
            <p>It could also be used to give a short summary about yourself.</p>
            <p>This starter was built to have all the pieces you may want on your site, but also make it easy to not use any features you may not need.</p>
          </Col>
        </Row>
        <Row style={{ marginTop: '1.5rem' }}>
          <Col>
            <h1>Recent Blog Posts</h1>
          </Col>
        </Row>
        <Row>
          {data.allMdx.nodes.map(
            ({ id, excerpt, frontmatter, fields }) => {
              const date = format(new Date(frontmatter.date), "PPP")
              return (
                <Col md={4}>
                  <BlogPostCard title={frontmatter.title} date={date} fields={fields} excerpt={excerpt} id={id}></BlogPostCard>
                </Col>
              )
            }
          )}
        </Row>
        <Row style={{ marginTop: '1.5rem' }}>
          <Col>
            <h1>Credits</h1>
            <p>Thanks to the following sites for providing illustrations, icons, inspiration, and guidance in building this starter:</p>
            <ul className="credit-list">
              <li><a href="https://illlustrations.co/" target="_blank" rel="noopener noreferrer">Illustrations from illlustrations.co</a></li>
              <li><a href="https://css.gg/" target="_blank" rel="noopener noreferrer">CSS Icons: css.gg</a></li>
              <li><a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">More icons: ICONS8</a></li>
              <li><a href="https://coolors.co" target="_blank" rel="noopener noreferrer">Color scheme generator: coolors.co</a></li>
              <li><a href="https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/copy-to-clipboard.js" target="_blank" rel="noopener noreferrer">Copy to Clipboard Utility</a></li>
              <li><a href="https://scottspence.com/2019/10/31/build-an-mdx-blog/#build-out-blog-post-template" target="_blank" rel="noopener noreferrer">And a huge thanks to Scott Spence's blog post</a></li>
            </ul>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { published: { eq: true } } },
      limit: 3
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