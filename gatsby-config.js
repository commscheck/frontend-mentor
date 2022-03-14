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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        lang: "en-AU",
        dir: "ltr",
        name: "Frontend Mentor Challenges",
        short_name: "FM",
        description:
          "An iOS engineer's attempt at learning CSS and Javascript.",
        start_url: "/",
        theme_color: "#f7c948",
        background_color: "#f7f7f7",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
