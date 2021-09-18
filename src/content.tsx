import * as React from "react"
import PostsGrid from "./postsGrid"
import "./content.css"

interface ContentProps {
  postType: string,
}

const Content: React.FC<ContentProps> = ({ postType }): React.ReactElement => {
  return (
    <main>
      <PostsGrid postType={postType} />
    </main>
  )
}

export default Content
