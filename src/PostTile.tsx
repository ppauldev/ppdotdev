import * as React from "react"

import moment from "moment"

import "./styles/post_tile.css"

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
        <div className="post-tile-image" />
        <div className="post-tile-content">
          <div className="post-tile-content-main">
            <h2>{post.title}</h2>
            <h3>{post.preview}</h3>
          </div>
          <p className="post-tile-content-side">{moment(post.date).format("LL")}</p>
        </div>
      </article>
    </a>
  )
}

export default PostTile
