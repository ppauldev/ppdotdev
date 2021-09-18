import * as React from "react"

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client"
import fetch from "cross-fetch"

import Webview from "../Webview"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(
    { uri: process.env.GATSBY_GRAPH_CMS_API_URL, fetch }
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
