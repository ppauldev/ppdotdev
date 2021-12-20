import * as React from "react"

import { navigate } from "gatsby-link"

const Logo: React.FC = (): React.ReactElement => {
  const handleNavigate = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    navigate("/")
  }

  return (
    <div id="logo-wrapper">
      <div id="logo" onClick={handleNavigate} />
    </div>
  )
}

export default Logo
