import React, { useState } from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link, graphql} from "gatsby"

export default function Blog({data, location}) {
    const [filter, setFilter] = useState("all")

    const posts = data.allMarkdownRemark.nodes
        .filter(post => {
            if (filter === "all") return true
            console.log("name is: ", post.frontmatter.Tags.name)
            console.log("filter is: ", filter)
            return post.frontmatter.Tags[0].name === filter
        })

    const t = new Set (
        data.allNotion.nodes
            .filter(node => node.properties.Tags.value.length !== 0)
            .map(node => node.properties.Tags.value[0].name)
    )

    const tags = [...t.add('all')]

    if (tags.length === 0) {
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
                <div>
                { tags.map((tag, i) =>
                    <span onClick={() => {
                        setFilter(tag)
                    }} className={`mr-3 font-semibold ${(filter === tag) ? "text-red-500" : ""} hover:text-red-500`} key={i}>{tag}</span>
                )}
                </div>
                <ol className="blog" style={{ listStyle: `none` }}>
                {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                    <li key={post.fields.slug}>
                    <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                        <header>
                        <h2>
                            <Link to={post.fields.slug} itemProp="url">
                            <span itemProp="headline">{title}</span>
                            </Link>
                        </h2>
                        <small>{post.frontmatter.date}</small>
                        </header>
                        <section>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                        />
                        </section>
                    </article>
                    </li>
                )
                })}
            </ol>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: {frontmatter: {Status: {name: {eq: "published"}}}}
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          Tags {
              name
          }
        }
      }
    }
    allNotion {
        nodes {
            properties {
                Tags {
                    value {
                        name
                    }
                }
            }
        }
    }
  }
`