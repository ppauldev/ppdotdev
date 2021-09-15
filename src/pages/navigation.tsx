import * as React from "react"

type NavigationProps = {
  setPostType: Function
}

const Navigation: React.FC<NavigationProps> = ({ setPostType }): React.ReactElement => {
  React.useEffect(() => {
    setPostType("research")
  }, [])

  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li onClick={() => setPostType("research")}>Research</li>
          <li onClick={() => setPostType("clean_code")}>Clean code</li>
          <li onClick={() => setPostType("testing")}>Testing</li>
          <li onClick={() => setPostType("protocols")}>Protocols</li>
          <li onClick={() => setPostType("bookscoffee")}>Books+Coffee</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation