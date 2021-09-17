import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
      <Router>
        <Switch>
          <Route path="/">
            <Webview />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
