import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {

  return (
    <Layout location={location}>
      
      <Seo title="All posts" />
      <p> Hi, I will add here projects and thoughts I don't completely hate.<br />So not much. </p>
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        limit: 3
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description 
        }
      }
    }
  }
`