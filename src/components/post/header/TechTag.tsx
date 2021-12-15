import * as React from "react"

import { techTagInfo } from "../../../helper/techTagInfo"

import "../../../styles/tech_tag.css"

interface ITechTag {
  keyword: string,
}

const TechTag: React.FC<ITechTag> = ({ keyword }): React.ReactElement => {
  const normalizedKeyword = keyword.toLowerCase()
  const techTagClassName = `tech-tag ${normalizedKeyword}`
  const techTagUrl = techTagInfo[normalizedKeyword]?.url

  return (
    <a className={techTagClassName} href={techTagUrl} />
  )
}

export default TechTag
