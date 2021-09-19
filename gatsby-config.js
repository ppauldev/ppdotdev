require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.phillippaul.dev",
    title: "ppdotdev",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GRAPH_CMS", // Custom remote schema query type
        fieldName: "graph_cms", // Custom temote schema query field
        url: process.env.GATSBY_GRAPH_CMS_API_URL,
      },
    },
  ],
}
