import * as React from "react"

import { techTagInfo } from "../../../helper/techTagInfo"

import "./tech_tag.css"

interface ITechTag {
  keyword: string,
}

const TechTag: React.FC<ITechTag> = ({ keyword }): React.ReactElement => {
  const normalizedKeyword = keyword.toLowerCase()
  const techTagClassName = `tech-tag ${normalizedKeyword}`
  const techTagUrl = techTagInfo[normalizedKeyword]?.url
  const techTagSource = techTagInfo[normalizedKeyword]?.imageSource

  return (
    <a className={techTagClassName} href={techTagUrl} data-imagesource={techTagSource} title={techTagUrl} />
  )
}

export default TechTag
