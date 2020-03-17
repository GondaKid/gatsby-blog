const dotenv = require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Untold Diaries`,
    description: `Memories holder`,
    author: `Gonn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Untold Diaries`,
        short_name: `Diaries`,
        start_url: `/`,
        background_color: `#e1f4f3`,
        theme_color: `#e1f4f3`,
        display: `minimal-ui`,
        icon: `src/images/fav.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
  ],
}
