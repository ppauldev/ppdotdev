import * as React from "react"

const Content = ({ view }) => {
  const DynamicComponent = React.lazy(() => import(`./${view}`))

  return (
    <React.Suspense fallback={<div>Page is loading ..</div>}>
      <DynamicComponent name="Phillip" id={5} />
    </React.Suspense>
  )
}

export default Content