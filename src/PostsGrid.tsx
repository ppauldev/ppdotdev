import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

import PostTile from "./PostTile"

import "./posts_wrapper.css"

interface IPostsGrid {
  postType: string,
}

interface IPostGridProps {
  type: string,
  title: string,
  preview: string,
  date: Date,
  slug: string,
}

const GRAPH_CMS_GRID_QUERY = graphql`
  {
    graph_cms {
      posts {
        id
        title
        date
        body
        preview
        slug
        type
      }
    }
  }
`

const PostsGrid: React.FC<IPostsGrid> = ({ postType = "research" }): React.ReactElement => {
  const queryData = useStaticQuery(GRAPH_CMS_GRID_QUERY)

  const postsToRender = queryData.graph_cms.posts.filter((post: IPostGridProps) => post.type === postType)
  const posts = postsToRender.map((postToRender: IPostGridProps) => {
    return (
      <PostTile
        key={postToRender.slug}
        title={postToRender.title}
        preview={postToRender.preview}
        date={postToRender.date}
        slug={postToRender.slug}
      />
    )
  })

  return (<section>{posts}</section>)
}

export default PostsGrid
