import React from "react"
import { Link } from "gatsby"
import MainNavbar from "../components/navbar"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  /*
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/" style={{display: "block"}}>{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  } */

  // added OurNavbar to page layout
  return (
    <div>
        <MainNavbar title={title}></MainNavbar>
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
    </div>
  )
}

export default Layout
