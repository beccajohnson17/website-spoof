module.exports = {
  siteMetadata: {
    title: "LinkedOut",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Lato, Dank Mono"],
          urls: ["/fonts/fonts.css"],
        },
      },    
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
};
