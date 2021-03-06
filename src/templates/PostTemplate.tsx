import * as React from "react"

import { RichTextContent } from "@graphcms/rich-text-types"

import PostHeader from "../components/post/header/PostHeader"

import Post from "../components/post/main/Post"

import "./post_template.css"

interface IPageContext {
  pageContext: IPost,
}

interface IPost {
  post: IPostProps,
}

interface IPostProps {
  author: string,
  slug: string,
  title: string,
  date: Date,
  preview: string,
  body: string,
  rtBody: { raw: RichTextContent },
  type: string,
  tags: string[]
}

export default ({ pageContext }: IPageContext): React.ReactElement => {
  const { post } = pageContext

  return (
    <div className="post-template">
      <PostHeader keywords={post.tags} />
      <Post post={post} />
    </div>
  )
}
