module.exports = {
  siteMetadata: {
    title: `James Byrne — Front End Developer in London`,
    description: `A London-based front end web developer with a passion for crafting beautiful experiences on the web.`,
    author: `James Byrne`,
    introSection: {
      headline: `Hello. I'm James, a frontend developer based in London.`,
      blurb: `I love crafting beautiful, functional experiences on the web, with accessibility and security baked in from the start. My toolbox includes a range of technologies across HTML, CSS and Javascript, but the tech stack is always secondary to the needs of the user.`,
    },
    social: {
      twitter: `https://twitter.com/james_byrne`,
      linkedin: `https://uk.linkedin.com/in/jamestbyrne89`,
      github: `https://github.com/jamesbyrne89`,
      medium: `https://medium.com/@james_byrne`,
    },
  },

  plugins: [
    `gatsby-plugin-typescript`,
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
