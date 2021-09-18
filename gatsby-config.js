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
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GRAPH_CMS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "graph_cms",
        // Url to query from
        url: process.env.GATSBY_GRAPH_CMS_API_URL,
      },
    }
  ],
}
