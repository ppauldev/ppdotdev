import * as React from "react"

import { RichTextContent } from "@graphcms/rich-text-types"

import PostHeader from "../PostHeader"

import Post from "../Post"

import "../styles/post_template.css"

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
}

export default ({ pageContext }: IPageContext): React.ReactElement => {
  const { post } = pageContext

  return (
    <div className="post-template">
      <PostHeader keywords={["JavaScript", "TypeScript"]} />
      <Post post={post} />
    </div>
  )
}
