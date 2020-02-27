module.exports = {
  siteMetadata: {
    title: 'Front-End Developer',
    titleTemplate: '%s · Front-End Developer',
    description: 'Personal website built and designed by Eric Jae-Min Joo - Front-End Developer',
    url: 'https://ericjaeminjoo.com/',
    image: 'images/ericjaeminjoo.png',
    twitterUsername: '@ericjaeminjoo',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'TiemposHeadline-300, Graphik-300-Light, Graphik-400-Regular, Graphik-600-Semibold, Arnhem-Bold, Arnhem-Normal, Arnhem-Blond, Arnhem-Black',
          ],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
  ],
};
