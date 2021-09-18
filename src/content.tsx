import * as React from "react"
import PostsGrid from "./postsGrid"
import "./content.css"

interface ContentProps {
  postType: string,
}

const Content: React.FC<ContentProps> = ({ postType }): React.ReactElement => {
  return (
    <React.Suspense fallback={<div>Page is loading ..</div>}>
      <main>
        <PostsGrid postType={postType} />
      </main>
    </React.Suspense>
  )
}

export default Content
