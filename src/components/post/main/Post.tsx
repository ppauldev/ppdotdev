import * as React from "react"

import moment from "moment"

// See: https://github.com/GraphCMS/rich-text/tree/main/packages/react-renderer#code-blocks-with-prismjs
import Prism from "prismjs"
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import { RichText } from "@graphcms/rich-text-react-renderer"
import { RichTextContent } from "@graphcms/rich-text-types"

import "./custom-prism-vsc-dark-plus.css"

import "./post.css"

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
  rtBody: { raw: RichTextContent },
}

const Post: React.FC<IPost> = ({ post }): React.ReactElement => {
  return (
    <article className="post">
      <div className="post-content">
        <PostIntro author={post.author} date={post.date} title={post.title} />
        <PostMarkdown rtBody={post.rtBody} />
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

const PostMarkdown: React.FC<IPostMarkdownProps> = ({ rtBody }): React.ReactElement => {
  if (!rtBody) {
    return (<NoContent />)
  }

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <RichText
      content={rtBody?.raw}
      renderers={{
        code_block: ({ children }) => {
          return (
            <pre className="line-numbers language-javascript">
              <code>{children}</code>
            </pre>
          );
        },
        img: ({ src, altText }) => {
          return (
            <div className="post-image-wrapper">
              <img src={src} alt={altText} width="100%" />
            </div>
          )
        },
        // a: ({ children, className, href, openInNewTab, title }) => {
        //   return (
        //     <a href={href} title={title} className={className} target={openInNewTab ? "_blank" : "_self"} >{children}</a>
        //   )
        // }
      }}
    />
  )
}

const NoContent: React.FC = (): React.ReactElement => {
  return (
    <p>No content published yet.</p>
  )
}

export default Post
