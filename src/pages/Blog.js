import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/Globals/PostCard"
import "../components/style/post.scss"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <div className="content">
        {posts.map(({ node }, index) => {
          const title = node.title || node.slug
          return (
            <li key={index} style={{ listStyle: "none" }}>
              <PostCard
                image={node.image.fluid}
                title={title}
                subtitle={node.subtitle}
                slug={node.slug}
              />
            </li>
          )
        })}
      </div>
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
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
