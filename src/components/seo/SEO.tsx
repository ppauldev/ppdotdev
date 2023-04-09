import * as React from "react"

import { Helmet } from "react-helmet"

interface ISEO { metaDescription: string; metaKeywords: string[]; title: string; };

export const SEO = ({ metaDescription, metaKeywords, title }: ISEO) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription.replace(/^(.{152}[^\s]*).*/, "$1")} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={metaKeywords.join(", ")} />
      <title>{title}</title>
    </Helmet>
  )
}
