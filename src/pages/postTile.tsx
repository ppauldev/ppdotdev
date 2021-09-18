import * as React from "react"
import "./post_tile.css"

interface PostProps {
  title: string,
  body: string,
  date: Date,
  slug: string,
}

const PostTile: React.FC<PostProps> = ({ title, body, date, slug }): React.ReactElement => {
  return (
    <a href={slug} className="post-tile-slug">
      <article className="post-tile">
        <div>Date: {date}</div>
        <div>Title: {title}</div>
        <div>Body: {body}</div>
      </article>
    </a>
  )
}

export default PostTile
