import * as React from "react"
import { useQuery } from "@apollo/client"
import postsQuery from './queries/postsQuery'

type PostsProps = {
  postType: string
}

type PostType = {
  type: string,
  title: string,
  body: string,
  date: Date
}

const Posts: React.FC<PostsProps> = ({ postType = "research" }): React.ReactElement => {
  const { loading, error, data } = useQuery(postsQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const postsToRender = data.posts.filter((post: PostType) => post.type === postType)
  const content = postsToRender.map((postToRender: PostType) => {
    return (
      <div>
        <div>Date: {postToRender.date}</div>
        <div>Title: {postToRender.title}</div>
        <div>Body: {postToRender.body}</div>
      </div>
    )
  })

  return (
    <div>{content}</div>
  )
}

export default Posts