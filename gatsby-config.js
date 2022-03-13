/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Frontend Mentor Challenges`,
    siteUrl: `https://www.crankygoblin.net/fm`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-vanilla-extract",
    "gatsby-transformer-sharp",
  ],
};
