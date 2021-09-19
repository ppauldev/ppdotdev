import * as React from "react"

import "./styles/tech_tag.css"

interface ITechTag {
  keyword: string,
}

const TechTag: React.FC<ITechTag> = ({ keyword }): React.ReactElement => {
  return (
    <button className="tech-tag">{keyword}</button>
  )
}

export default TechTag