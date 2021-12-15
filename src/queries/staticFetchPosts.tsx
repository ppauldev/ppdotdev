import { graphql, useStaticQuery } from "gatsby"

const GRAPH_CMS_GRID_QUERY_ALL = graphql`
  {
    graph_cms {
      posts {
        id
        title
        date
        body
        preview
        slug
        type
      }
    }
  }
`

const GRAPH_CMS_GRID_QUERY_BOOKSCOFFEE = graphql`
  {
    graph_cms {
      posts(where: {type: "bookscoffee"}) {
        id
        title
        date
        body
        preview
        slug
        type
      }
    }
  }
`

const GRAPH_CMS_GRID_QUERY_CLEANCODE = graphql`
  {
    graph_cms {
      posts(where: {type: "cleancode"}) {
        id
        title
        date
        body
        preview
        slug
        type
      }
    }
  }
`

const GRAPH_CMS_GRID_QUERY_PROTOCOLS = graphql`
  {
    graph_cms {
      posts(where: {type: "protocols"}) {
        id
        title
        date
        body
        preview
        slug
        type
      }
    }
  }
`

const GRAPH_CMS_GRID_QUERY_RESEARCH = graphql`
  {
    graph_cms {
      posts(where: {type: "research"}) {
        id
        title
        date
        body
        preview
        slug
        type
      }
    }
  }
`

const GRAPH_CMS_GRID_QUERY_TESTING = graphql`
  {
    graph_cms {
      posts(where: {type: "testing"}) {
        id
        title
        date
        body
        preview
        slug
        type
      }
    }
  }
`
