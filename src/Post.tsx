import * as React from "react"

import moment from "moment"

import { RichText } from "@graphcms/rich-text-react-renderer"
import { RichTextContent } from "@graphcms/rich-text-types"

import "./styles/post.css"

interface IPost {
  post: IPostProps
}

interface IPostProps {
  author: string,
  title: string,
  date: Date,
  rtBody: { raw: RichTextContent },
}

interface IPostIntroProps {
  author: string,
  title: string,
  date: Date,
}

interface IPostMarkdownProps {
  rtBodyRaw: RichTextContent,
}

const Post: React.FC<IPost> = ({ post }): React.ReactElement => {
  return (
    <article className="post">
      <div className="post-content">
        <PostIntro author={post.author} date={post.date} title={post.title} />
        <PostMarkdown rtBodyRaw={post.rtBody.raw} />
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

const PostMarkdown: React.FC<IPostMarkdownProps> = ({ rtBodyRaw }): React.ReactElement => {
  return (
    <RichText content={rtBodyRaw} />
  )
}

export default Post
