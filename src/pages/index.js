import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      
      <Seo title="All posts" />
      <p> Hi, this is my space for personal projects and thoughts I don't completely hate.<br />
      So, not much. </p>
      
    </Layout>
  )
}

export default BlogIndex