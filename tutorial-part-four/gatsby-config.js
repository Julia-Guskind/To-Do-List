/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
let date = new Date();
let today = (date.getMonth() + 1) + '/' + date.getDate() + "/" + date.getFullYear();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Great Title',
    today: today,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {pathToConfigModule: 'src/utils/typography',},
    },
  ],
}
