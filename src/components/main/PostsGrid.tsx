import * as React from "react"
import ContentLoader from "react-content-loader"

import { graphql, useStaticQuery } from "gatsby"

import PostTile from "./PostTile"

import "./posts_grid.css"

interface IPostsGrid {
  postType: string,
}

interface IPostTileProps {
  slug: string,
  title: string,
  date: Date,
  preview: string,
  body: string,
  type: string,
  image: { url: string },
  imageSource: string,
  imageLicense: string,
}

const GRAPH_CMS_GRID_QUERY = graphql`
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
        image {
          url(
            transformation: {
              image: {resize: {width: 600, height: 400, fit: clip}}
            }
          )
        }
        imageSource
        imageLicense
      }
    }
  }
`

const PreviewItem = (props: any) => {
  const [loaderWidth, setLoaderWidth] = React.useState(0)

  React.useEffect(() => {
    if (!window) return;

    if (window.innerWidth >= 320 && window.innerWidth < 428) setLoaderWidth(260);
    if (window.innerWidth >= 428 && window.innerWidth < 600) setLoaderWidth(320);
    if (window.innerWidth >= 600 && window.innerWidth < 1140) setLoaderWidth(390);
    if (window.innerWidth >= 1140 && window.innerWidth < 1268) setLoaderWidth(340);
    if (window.innerWidth >= 1268) setLoaderWidth(390);
  }, []) // Note: Avoiding resize listener, because of minor use case

  return (
    <ContentLoader
      viewBox={`0 0 ${loaderWidth} 500`}
      height={500}
      width={loaderWidth}
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width={loaderWidth} height="200" />
      <rect x="4" y="230" rx="0" ry="0" width={loaderWidth - 40} height="40" />
      <rect x="4" y="290" rx="0" ry="0" width={loaderWidth - 121} height="20" />
      <rect x="4" y="320" rx="0" ry="0" width={loaderWidth - 86} height="20" />
    </ContentLoader>
  )
}

const PostsGrid: React.FC<IPostsGrid> = ({ postType = "research" }): React.ReactElement => {
  const queryData = useStaticQuery(GRAPH_CMS_GRID_QUERY)
  const postsToRender = queryData.graph_cms.posts.filter((post: IPostTileProps) => post.type === postType)

  return (
    <section>
      {!queryData.graph_cms.posts || queryData.graph_cms.posts.length === 0 && (
        <PreviewItem backgroundColor="lightgray" />
      )}
      {postsToRender.map((postToRender: IPostTileProps) => {
        return (
          <PostTile
            key={postToRender.slug}
            post={postToRender}
          />
        )
      })}
    </section>
  )
}

export default PostsGrid
