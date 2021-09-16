import * as React from "react"
import PostsWrapper from "./PostsWrapper"
import "./content.css"

type ContentProps = {
  postType: string
}

const Content: React.FC<ContentProps> = ({ postType }): React.ReactElement => {
  return (
    <React.Suspense fallback={<div>Page is loading ..</div>}>
      <main>
        <PostsWrapper postType={postType} />
      </main>
    </React.Suspense>
  )
}

export default Content