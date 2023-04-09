import * as React from "react"

import { OutboundLink } from "gatsby-plugin-gtag"

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
    <OutboundLink className={techTagClassName} href={techTagUrl} data-imagesource={techTagSource} />
  )
}

export default TechTag
