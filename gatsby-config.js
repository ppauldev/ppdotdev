const path = require('path')

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
        url: "https://api-eu-central-1.graphcms.com/v2/ckthkvaiu44rx01xq5ffr9yrz/master",
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "components": path.join(__dirname, "src/components"),
        "templates": path.join(__dirname, "src/templates"),
        "src": path.join(__dirname, 'src'),
        "pages": path.join(__dirname, 'src/pages')
      }
    }
  ],
};
