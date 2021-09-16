import * as React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { GRAPH_CMS_API_URL } from "../api/apiConfig"
import Webview from "./webview"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPH_CMS_API_URL,
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
