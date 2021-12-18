import * as React from "react"

import Footer from "../footer/Footer"

import Navigation from "../header/Navigation"

import Content from "../main/Content"
import EmailForm from "../main/EmailForm"

import "./webview.css"

const Webview: React.FC = (): React.ReactElement => {
  const [postType, setPostType] = React.useState("")

  return (
    <div className="webview">
      <Navigation postType={postType} setPostType={setPostType} />
      {postType !== "email"
        ? <Content postType={postType} />
        : <EmailForm />
      }
      <Footer setPostType={setPostType} />
    </div>
  )
}

export default Webview
