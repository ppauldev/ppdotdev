const path = require("path")

exports.createPages = async function ({ actions, graphql, reporter }) {
  const { data } = await graphql(`
    {
      graph_cms {
        posts {
          id
          title
          date
          body
          slug
          type
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  data.graph_cms.posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: path.resolve("./src/templates/Post.tsx"),
      context: { post: post },
    })
  })
}