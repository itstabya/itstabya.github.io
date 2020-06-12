import React from "react"
import { Link } from "gatsby"
import postLinkStyles from "./post-link.module.css"

const PostLink = ({ post }) => (
  <div style={{ paddingBottom: 12 }}>
    <Link to={post.frontmatter.path} className={postLinkStyles.post}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
