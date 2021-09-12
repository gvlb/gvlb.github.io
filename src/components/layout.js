import * as React from "react"
import Header from "./header"

const Layout = ({ location, title, children }) => {

  return (
    <div className="p-5 mx-auto max-w-5xl">
      <Header />
      <main className="font-lato">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
