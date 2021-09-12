import React, { FC, ReactElement } from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

type SubpageProps = {
  name: string,
  id: number,
  bio?: string
}

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckthkvaiu44rx01xq5ffr9yrz/master',
  cache: new InMemoryCache()
});

const subpage: FC<SubpageProps> = ({ name = "Paul", id = 3, bio = 'Bio empty' }): ReactElement => {
  React.useEffect(() => {
    client
      .query({
        query: gql`
        { 
          posts {
            id
            title
            slug
            date
            preview
            body
          }
        }
      `
      })
      .then(result => console.log(result));
  }, [])

  return (
    <div>
      <h2>Name: {name}, Id: {id}</h2>
      <p>{bio}</p>
    </div>
  )
}

export default subpage