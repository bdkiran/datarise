module.exports = {
  siteMetadata: {
    title: `Data Reference`,
    description: `Your Reference Guide for the Future`,
    author: `@datareference`,
    siteUrl: `https://www.datareference.net`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `definitions`,
        path: `${__dirname}/src/pages/markdown-pages/definitions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `definitions`,
        path: `${__dirname}/src/pages/markdown-pages/features`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Data Reference`,
        short_name: `Data`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: process.env.GATSBY_GA_KEY,
      },
    },
  ],
  
}
