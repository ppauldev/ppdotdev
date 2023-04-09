import * as React from "react"

import { RichTextContent } from "@graphcms/rich-text-types"

import PostHeader from "../components/post/header/PostHeader"
import Post from "../components/post/main/Post"
import { SEO } from "../components/seo/SEO"

import "./post_template.css"

interface IPageContext {
  pageContext: IPost,
}

interface IPost {
  post: IPostProps,
}

interface IPostProps {
  author: string,
  body: string,
  date: Date,
  metadescription: string,
  metakeywords: string[],
  preview: string,
  rtBody: { raw: RichTextContent },
  slug: string,
  title: string,
  type: string,
  tags: string[]
}

export default ({ pageContext }: IPageContext): React.ReactElement => {
  const { post } = pageContext

  return (
    <div className="post-template">
      <SEO metaDescription={post.metadescription} metaKeywords={post.metakeywords} title={post.title} />
      <PostHeader keywords={post.tags} />
      <Post post={post} />
    </div>
  )
}
