/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `rocks`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",     {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Playwrite DE Grund`,
          file: `https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund&display=swap`,
        },
      ],
    },
  },]
  
};