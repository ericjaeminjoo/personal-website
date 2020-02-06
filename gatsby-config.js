module.exports = {
  siteMetadata: {
    title: `Portfolio Website with Gatsby, TailwindCSS,Styled-Components, & Storybook Starter`,
    description: `Eric Jae-Min Joo's Portfolio Website.`,
    author: `@ericjaeminjoo`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
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
          families: ['Freight Text Pro'],
          urls: ['./src/fonts/fonts.css'],
        },
      },
    },
  ],
};
