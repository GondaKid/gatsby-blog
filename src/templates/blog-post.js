import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../components/style/layout.scss"

//rendering contenful richtext
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout title={siteTitle}>
        <SEO title={post.title} description={post.subtitle} />
        <Img fluid={post.image.fluid} className="full" />
        <div className="content">
          <h1> {post.title}</h1>
          <div>{documentToReactComponents(post.content.json)}</div>

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.slug} rel="prev">
                    ← {previous.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.slug} rel="next">
                    {next.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Layout>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostbySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      author
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        json
      }
    }
  }
`
