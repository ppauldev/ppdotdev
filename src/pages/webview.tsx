import * as React from "react"
import Navigation from "./navigation"
import Content from "./content"
import Footer from "./footer"

const WebView = () => {
  const [view, setView] = React.useState(null)

  return (
    <div>
      <Navigation setView={setView} />
      <Content view={view} />
      <Footer />
    </div>
  )
}

export default WebView