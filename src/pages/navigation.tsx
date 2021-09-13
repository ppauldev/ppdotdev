import * as React from "react"

const Navigation = ({ setView }) => {
  React.useEffect(() => {
    setView("subpage")
  }, [])

  return (
    <div>Navigation area</div>
  )
}

export default Navigation