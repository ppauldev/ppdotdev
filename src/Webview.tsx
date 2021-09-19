import * as React from "react"

import Content from "./Content"
import Footer from "./Footer"
import Navigation from "./Navigation"

import "./styles/webview.css"

const Webview: React.FC = (): React.ReactElement => {
  const [postType, setPostType] = React.useState("")

  return (
    <div>
      <Navigation setPostType={setPostType} />
      <Content postType={postType} />
      <Footer />
    </div>
  )
}

export default Webview
