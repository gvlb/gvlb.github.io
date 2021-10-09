import * as React from "react"
import Header from "./header"

const Layout = ({ location, children }) => {

  return (
    <div className="p-5 mx-auto max-w-3xl">
      <Header location={location} />
      <main className="font-merri mt-10">{children}</main>
    </div>
  )
}

export default Layout
