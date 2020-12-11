module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Chantelle & Paul",
        short_name: "Chantelle & Paul",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icon: "src/assets/images/icons/favicon.png"
      },
    },
  ],
  siteMetadata: {
    title: "Chantelle & Paul",
    author: "Webdacity",
    siteUrl: `https://webdacity.dev`,
  }
}
