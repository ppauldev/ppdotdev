import * as React from "react"

import TechTag from "./TechTag"

import "./styles/post_header.css"

interface IPostHeader {
  keywords: string[],
}

const PostHeader: React.FC<IPostHeader> = ({ keywords }): React.ReactElement => {
  return (
    <header className="post-template-header">
      <div id="logo-wrapper">
        <div id="logo" />
      </div>
      <div className="post-template-header-keywords">
        <p>Tags:</p>
        {keywords.map((keyword) => {
          return (
            <TechTag key={keyword} keyword={keyword} />
          )
        })}
      </div>
    </header>
  )
}

export default PostHeader
