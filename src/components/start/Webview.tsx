import * as React from "react"

import Footer from "../footer/Footer"

import Navigation from "../header/Navigation"

import Content from "../main/Content"

import "./webview.css"

const Webview: React.FC = (): React.ReactElement => {
  const [postType, setPostType] = React.useState("")

  return (
    <div className="webview">
      <Navigation setPostType={setPostType} />
      <Content postType={postType} />
      <Footer setPostType={setPostType} />
    </div>
  )
}

export default Webview
