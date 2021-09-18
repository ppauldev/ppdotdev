import * as React from "react"

import fetch from "cross-fetch"

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"

import Webview from "../Webview"

import "@fontsource/lato"

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
      <Webview />
    </ApolloProvider>
  )
}

export default App
