import * as React from "react"
import { useQuery } from "@apollo/client"
import postsQuery from "./queries/postsQuery"
import PostTile from "./postTile"
import "./posts_wrapper.css"

interface PostsProps {
  postType: string,
}

interface PostType {
  type: string,
  title: string,
  body: string,
  date: Date,
  slug: string,
}

const PostsWrapper: React.FC<PostsProps> = ({ postType = "research" }): React.ReactElement => {
  const { loading, error, data } = useQuery(postsQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const postsToRender = data.posts.filter((post: PostType) => post.type === postType)
  const posts = postsToRender.map((postToRender: PostType) => {
    return <PostTile key={postToRender.slug} title={postToRender.title} body={postToRender.body} date={postToRender.date} slug={postToRender.slug} />
  })

  return (<section>{posts}</section>)
}

export default PostsWrapper
