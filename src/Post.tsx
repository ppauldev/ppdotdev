import * as React from "react"

import moment from "moment"

import "./styles/post.css"

interface IPost {
  post: IPostProps
}

interface IPostProps {
  slug: string,
  title: string,
  date: Date,
  preview: string,
  body: string,
  type: string,
}

const Post: React.FC<IPost> = ({ post }): React.ReactElement => {
  return (
    <article className="post">
      <div className="post-content">
        <div className="post-content-intro">
          <div className="post-info">{"Phillip Paul"} · {moment(post.date).format("LL")}</div>
          <h1>{post.title}</h1>
        </div>
        <div className="post-content-markdown" dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </article>
  )
}

export default Post
