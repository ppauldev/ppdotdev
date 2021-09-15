import * as React from "react"
import Navigation from "./Navigation"
import Content from "./Content"
import Footer from "./Footer"

const Webview = () => {
  const [postType, setPostType] = React.useState("")

  React.useEffect(() => {
    console.log("posttype: ", postType)
  }, [postType])

  return (
    <div>
      <Navigation setPostType={setPostType} />
      <Content postType={postType} />
      <Footer />
    </div>
  )
}

export default Webview