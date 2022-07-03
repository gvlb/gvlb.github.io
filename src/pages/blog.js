import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link, graphql} from "gatsby"

export default function Blog({data, location}) {
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
          <Layout location={location}>
            <Seo title="All posts" />
            <p>
              No blog posts found. :-(
            </p>
          </Layout>
        )
    }

    return (
        <Layout location={location}>
                <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                    <li key={post.fields.slug}>
                    <div
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                        <small>{post.frontmatter.date}</small>
                        <h2>
                            <Link to={post.fields.slug} itemProp="url">
                            <span itemProp="headline">{title}</span>
                            </Link>
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                        />
                    </div>
                    </li>
                )
                })}
            </ol>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
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