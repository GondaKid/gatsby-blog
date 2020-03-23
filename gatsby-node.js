const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const posts = result.data.allContentfulPost.edges
  posts.forEach(({ node }, index) => {
    const path = node.slug
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        slug: path,
        prev: index === 0 ? null : posts[index - 1].node,
        nextPost: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}
