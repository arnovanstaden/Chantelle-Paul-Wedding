module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
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
        name: "Art by Jaret",
        short_name: "Art by Jaret",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icon: "src/assets/images/logos/favicon.png"
      },
    },
  ],
  siteMetadata: {
    title: "Chantelle & Paul",
    author: "Webdacity",
    siteUrl: `https://webdacity.dev`,
  }
}
