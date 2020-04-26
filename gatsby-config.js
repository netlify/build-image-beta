module.exports = {
  siteMetadata: {
    title: `Netlify Build Image Beta Opt-In`,
    description: `Beta test new features on the build image before everyone else`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/build-images`,
      },
    },
  ],
}
