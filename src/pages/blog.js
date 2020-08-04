import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>BLOGGG</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
