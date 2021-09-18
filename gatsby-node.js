const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      graph_cms {
        posts {
          id
          title
          slug
          date
          preview
          body
          type
        }
      }
    }
  `)
  const postTemplate =
    data.graph_cms.posts.forEach(node => {
      const slug = node.slug
      actions.createPage({
        path: slug,
        component: path.resolve("./src/templates/post.tsx"),
        context: { slug: slug },
      })
    })

  actions.createPage({
    path: "/",
    component: path.resolve("./src/pages/index.tsx"),
    context: { "index": "/" }
  })
}