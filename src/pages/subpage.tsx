import React, { FC, ReactElement } from 'react'
import { gql, useQuery } from "@apollo/client"

type SubpageProps = {
  name: string,
  id: number,
  bio?: string
}

const postsQuery = gql`
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

const subpage: FC<SubpageProps> = ({ name = "Paul", id = 3, bio = 'Bio empty' }): ReactElement => {
  const { loading, error, data } = useQuery(postsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Name: {name}, Id: {id}</h2>
      <p>{bio}</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default subpage