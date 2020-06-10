module.exports = {
  siteMetadata: {
    title: `Kasper Birch`,
    description: `kb-develop`,
    author: `@kb-develop`,
    slogan: 'kb-develop',

    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'Portfolio',
        link: '/portfolio'
      },
      {
        name: 'contact',
        link: '/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `264210305`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u66rzwqlb36r`,
        accessToken: "SCB_qChWQnOD4CZWFanur3kYWJB9C2Psj06WaG8w8NY",
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cambay\:400,700`, `arvo\:400,700`, `ubuntu mono\:400,700`, `Metal Mania\:400,700`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
