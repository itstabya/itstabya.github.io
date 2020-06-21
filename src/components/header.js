import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.css"

export default function Header({ children }) {
  return (
    <div>
      <header className={headerStyles.container}>
        <title>{data.site.siteMetadata.title}</title>
        <div className={headerStyles.nav}>
          <Link className={headerStyles.navLink} to="/">
            tanya yang
          </Link>
          <Link className={headerStyles.navLink} to="/etc/">
            blog(ish)
          </Link>
          <a
            href="https://tinyletter.com/tanyang"
            className={headerStyles.navLink}
          >
            newsletter
          </a>
          <a href="mailto: tanyang@mit.edu" className={headerStyles.navLink}>
            contact
          </a>
        </div>
      </header>
      {children}
    </div>
  )
}
