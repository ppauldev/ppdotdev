import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

import PostTile from "./PostTile"

import "./posts_grid.css"

interface IPostsGrid {
  postType: string,
}

interface IPostTileProps {
  slug: string,
  title: string,
  date: Date,
  preview: string,
  body: string,
  type: string,
  image: { url: string },
  imageSource: string,
  imageLicense: string,
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
        image {
          url(
            transformation: {
              image: {resize: {width: 600, height: 400, fit: clip}}
            }
          )
        }
        imageSource
        imageLicense
      }
    }
  }
`

const PostsGrid: React.FC<IPostsGrid> = ({ postType = "research" }): React.ReactElement => {
  const queryData = useStaticQuery(GRAPH_CMS_GRID_QUERY)
  const postsToRender = queryData.graph_cms.posts.filter((post: IPostTileProps) => post.type === postType)

  return (
    <section>
      {postsToRender.map((postToRender: IPostTileProps) => {
        return (
          <PostTile
            key={postToRender.slug}
            post={postToRender}
          />
        )
      })}
    </section>
  )
}

export default PostsGrid
