import React from "react"
import containerStyles from "./container.module.css"
import { Link } from "gatsby"

export default function Footer({}) {
  return (
    <div className={containerStyles.container} style={{ paddingBottom: 50 }}>
      You can go back to my posts <Link to="../etc"> here</Link>.
    </div>
  )
}
