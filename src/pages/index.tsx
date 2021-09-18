import * as React from "react"

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import Webview from "../Webview"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.GATSBY_GRAPH_CMS_API_URL,
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
