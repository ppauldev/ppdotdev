const path = require("path")
const fetch = require(`node-fetch`)

const GRAPH_CMS_PAGE_QUERY_RAW = `
  {
    graph_cms {
      posts {
        id
        author
        title
        date
        body
        rtBody { raw }
        slug
        type
        tags
        image {
          url
        }
        imageSource
        imageLicense
      }
    }
  }
`

const GRAPH_CMS_GRID_QUERY_RAW = `
  {
    posts {
      id
      title
      date
      body
      rtBody { raw }
      preview
      slug
      type
      tags
      image {
        url
      }
      imageSource
      imageLicense
    }
  }
`

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const result = await fetch(process.env.GATSBY_GRAPH_CMS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: GRAPH_CMS_GRID_QUERY_RAW
    })
  })

  actions.createNode({
    posts: result,
    id: `graph_cms_posts`,
    parent: null,
    children: [],
    internal: {
      type: `graph_cms_posts_node`,
      contentDigest: createContentDigest(result),
    },
  })
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(GRAPH_CMS_PAGE_QUERY_RAW)

  data.graph_cms.posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: path.resolve("./src/templates/PostTemplate.tsx"),
      context: { post: post },
    })
  })
}