import { gql } from "@apollo/client"

const postsQuery = gql`
    { 
      posts {
        id
        title
        slug
        date
        preview
        body
        type
      }
    }
  `

export default postsQuery