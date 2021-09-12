import React, { FC, ReactElement } from 'react'

type SubpageProps = {
    name: string,
    id: number,
    bio?: string
}

const subpage: FC<SubpageProps> = ({ name = "Paul", id = 3, bio = 'Bio empty' }): ReactElement => {
    return (
        <div>
            <h2>Name: {name}, Id: {id}</h2>
            <p>{bio}</p>
        </div>
    )
}

export default subpage