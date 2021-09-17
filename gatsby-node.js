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
  data.graph_cms.posts.forEach(node => {
    const slug = node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/post.tsx`),
      context: { slug: slug },
    })
  })
}