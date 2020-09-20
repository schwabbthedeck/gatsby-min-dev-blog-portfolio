import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
// import Dump from "../components/dump";

const IndexWrapper = styled.main``
const PostWrapper = styled.div``

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <IndexWrapper>
      {data.allMdx.nodes.map(
        ({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        )
      )}
    </IndexWrapper>
  </Layout>
)
export default IndexPage

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
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