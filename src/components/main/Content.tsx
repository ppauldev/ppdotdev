import * as React from "react"

import PostsGrid from "./PostsGrid"

import "../../styles/content.css"

interface IContent {
  postType: string,
}

const Content: React.FC<IContent> = ({ postType }): React.ReactElement => {
  return (
    <main>
      <PostsGrid postType={postType} />
    </main>
  )
}

export default Content
