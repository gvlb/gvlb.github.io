import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <div className="p-5 mx-auto max-w-6xl">
      <Header />
      <main className="font-lato mt-10">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
