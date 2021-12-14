import * as React from "react"

import moment from "moment"

import "./styles/post.css"

interface IPost {
  post: IPostProps
}

interface IPostProps {
  author: string,
  title: string,
  date: Date,
  body: string,
}

interface IPostIntroProps {
  author: string,
  title: string,
  date: Date,
}

interface IPostMarkdownProps {
  rtbody: string,
}

const Post: React.FC<IPost> = ({ post }): React.ReactElement => {
  return (
    <article className="post">
      <div className="post-content">
        <PostIntro author={post.author} date={post.date} title={post.title} />
        <PostMarkdown rtbody={post.body} />
      </div>
    </article>
  )
}

const PostIntro: React.FC<IPostIntroProps> = ({ author, date, title }): React.ReactElement => {
  return (
    <div className="post-content-intro">
      <div className="post-info">{author} · {moment(date).format("LL")}</div>
      <h1>{title}</h1>
    </div>
  )
}

const PostMarkdown: React.FC<IPostMarkdownProps> = ({ rtbody }): React.ReactElement => {
  return (
    <div className="post-content-markdown" dangerouslySetInnerHTML={{ __html: rtbody }} />
  )
}

export default Post
