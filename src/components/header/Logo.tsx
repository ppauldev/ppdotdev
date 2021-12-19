import * as React from "react"

import { navigate } from "gatsby-link"

interface ILogo {
  setPostType: (args: string) => void,
}

const Logo: React.FC<ILogo> = ({ setPostType }): React.ReactElement => {
  const handleNavigate = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    navigate("/")
    setPostType("research")
  }

  return (
    <div id="logo-wrapper">
      <div id="logo" onClick={handleNavigate} />
    </div>
  )
}

export default Logo
