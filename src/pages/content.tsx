import * as React from "react"
import Posts from "./Posts"

type ContentProps = {
  postType: string
}

const Content: React.FC<ContentProps> = ({ postType }): React.ReactElement => {
  return (
    <React.Suspense fallback={<div>Page is loading ..</div>}>
      <Posts postType={postType} />
    </React.Suspense>
  )
}

export default Content