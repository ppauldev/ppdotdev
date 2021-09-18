import * as React from "react"

interface IPageContext {
  pageContext: IPost,
}

interface IPost {
  post: IPostProps,
}

interface IPostProps {
  title: string,
  body: string,
  date: Date,
}

export default ({ pageContext }: IPageContext): React.ReactElement => {
  const { post } = pageContext

  return (
    <article className="post">
      <div>Title: {post.title}</div>
      <div>Body: {post.body}</div>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
      <div>Date: {post.date}</div>
    </article>
  )
}
