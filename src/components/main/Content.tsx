import * as React from "react"

import EmailForm from "./EmailForm"

import PostsGrid from "./PostsGrid"

import "./content.css"

interface IContent {
  postType: string,
}

const Content: React.FC<IContent> = ({ postType }): React.ReactElement => {
  return (
    <main>
      {postType !== "email"
        ? <PostsGrid postType={postType} />
        : null
      }
      {postType === "email"
        ? <EmailForm />
        : null
      }
    </main>
  )
}

export default Content
