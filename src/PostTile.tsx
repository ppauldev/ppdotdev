import * as React from "react"

import "./post_tile.css"

interface IPostTile {
  post: IPostTileProps
}

interface IPostTileProps {
  slug: string,
  title: string,
  date: Date,
  preview: string,
  body: string,
  type: string,
}

const PostTile: React.FC<IPostTile> = ({ post }): React.ReactElement => {
  return (
    <a href={post.slug} className="post-tile-slug">
      <article className="post-tile">
        <div className="post-tile-image">Image</div>
        <div className="post-tile-content">
          <h2>Title: {post.title}</h2>
          <div>Date: {post.date}</div>
          <div>Preview: {post.preview}</div>
        </div>
      </article>
    </a>
  )
}

export default PostTile
