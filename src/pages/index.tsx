import * as React from "react"
import { Helmet } from "react-helmet"

import fetch from "cross-fetch"

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"

import Webview from "../components/start/Webview"

import "@fontsource/roboto"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(
    { uri: process.env.GATSBY_GRAPH_CMS_API_URL, fetch },
  ),
})

// Reserved for top level utilities
const App: React.FC = (): React.ReactElement => {
  return (
    <ApolloProvider client={client}>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta name="description" content={"This is the personal blog of Phillip Paul, a React/TypeScript developer from Berlin, Germany. The content is partially created by ChatGPT-4 to showcase and test the latest developments in generative AI."} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={"Software development, react, gatsby, graphql, graph cms, blog, typescript, javascript, python, clean code, testing, research, RPA, robotic process automation"} />
        <title>{"phillippaul.dev | React, TypeScript, Clean Code"}</title>
      </Helmet>
      <Webview />
    </ApolloProvider>
  )
}

export default App
