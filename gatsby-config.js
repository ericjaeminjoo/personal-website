module.exports = {
  siteMetadata: {
    title: `Front-End Developer`,
    siteUrl: `https://ericjaeminjoo.com/`,
    description: `New Portfolio Page Build and Designed by Eric Jae-Min Joo`,
    author: `@ericjaeminjoo`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.js`),
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
};
