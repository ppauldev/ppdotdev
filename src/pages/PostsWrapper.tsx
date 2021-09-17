import * as React from "react"
import { useQuery } from "@apollo/client"
import postsQuery from './queries/postsQuery'
import Post from "./post"
import "./posts_wrapper.css"

type PostsProps = {
  postType: string
}

type PostType = {
  type: string,
  title: string,
  body: string,
  date: Date
}

const PostsWrapper: React.FC<PostsProps> = ({ postType = "research" }): React.ReactElement => {
  const { loading, error, data } = useQuery(postsQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const postsToRender = data.posts.filter((post: PostType) => post.type === postType)
  const posts = postsToRender.map((postToRender: PostType) => {
    return <Post title={postToRender.title} body={postToRender.body} date={postToRender.date} />
  })

  return (<section>{posts}</section>)
}

export default PostsWrapper
