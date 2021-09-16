import * as React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import Webview from "./webview"

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckthkvaiu44rx01xq5ffr9yrz/master',
  cache: new InMemoryCache()
});

// Reserved for top level utilities
const App: React.FC = (): React.ReactElement => {
  return (
    <ApolloProvider client={client}>
      <Webview />
    </ApolloProvider>
  )
}

export default App
