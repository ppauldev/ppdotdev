import * as React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import WebView from "./webview"

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckthkvaiu44rx01xq5ffr9yrz/master',
  cache: new InMemoryCache()
});

// Reserved for top level utilities
const App = () => {
  return (
    <ApolloProvider client={client}>
      <WebView />
    </ApolloProvider>
  )
}

export default App
