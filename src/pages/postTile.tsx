import * as React from "react"
import "./post_tile.css"

interface PostProps {
  title: string,
  body: string,
  date: Date,
}

const PostTile: React.FC<PostProps> = ({ title, body, date }): React.ReactElement => {
  return (
    <article className="post">
      <div>Date: {date}</div>
      <div>Title: {title}</div>
      <div>Body: {body}</div>
    </article>
  )
}

export default PostTile
