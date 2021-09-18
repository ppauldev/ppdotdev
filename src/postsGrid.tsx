import * as React from "react"

import { gql, useQuery } from "@apollo/client"

import PostTile from "./PostTile"

import "./posts_wrapper.css"

interface PostsProps {
  postType: string,
}

interface PostType {
  type: string,
  title: string,
  preview: string,
  date: Date,
  slug: string,
}

const PostsGrid: React.FC<PostsProps> = ({ postType = "research" }): React.ReactElement => {
  const { loading, error, data } = useQuery(gql`
    {
      posts {
        id
        title
        slug
        date
        preview
        type
      }
    }
  `)

  if (loading) { return <p>Loading...</p> }
  if (error) { return <p>Error :(</p> }

  const postsToRender = data.posts.filter((post: PostType) => post.type === postType)
  const posts = postsToRender.map((postToRender: PostType) => {
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
