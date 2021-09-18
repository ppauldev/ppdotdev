import * as React from "react"
import "./post_tile.css"

interface PostProps {
  title: string,
  preview: string,
  date: Date,
  slug: string,
}

const PostTile: React.FC<PostProps> = ({ title, preview, date, slug }): React.ReactElement => {
  return (
    <a href={slug} className="post-tile-slug">
      <article className="post-tile">
        <div>Date: {date}</div>
        <div>Title: {title}</div>
        <div>Preview: {preview}</div>
      </article>
    </a>
  )
}

export default PostTile
