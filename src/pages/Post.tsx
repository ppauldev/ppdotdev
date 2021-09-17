import * as React from "react"
import "./post.css"

type PostProps = {
  title: string,
  body: string,
  date: Date
}

const Post: React.FC<PostProps> = ({ title, body, date }): React.ReactElement => {
  return (
    <article className="post">
      <div>Date: {date}</div>
      <div>Title: {title}</div>
      <div>Body: {body}</div>
    </article>
  )
}

export default Post
