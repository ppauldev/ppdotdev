import * as React from "react"

import Logo from "../../header/Logo"

import TechTag from "./TechTag"

import "./post_header.css"

interface IPostHeader {
  keywords: string[],
}

interface ITagsList {
  keywords: string[],
}

const PostHeader: React.FC<IPostHeader> = ({ keywords }): React.ReactElement => {
  return (
    <header className="post-template-header">
      <Logo />
      <TagsList keywords={keywords} />
    </header>
  )
}

const TagsList: React.FC<ITagsList> = ({ keywords }): React.ReactElement => {
  return (
    <div className="post-template-header-keywords">
      <p>Tags:</p>
      {keywords.map((keyword) => {
        return (
          <TechTag key={keyword} keyword={keyword} />
        )
      })}
    </div>
  )
}

export default PostHeader
