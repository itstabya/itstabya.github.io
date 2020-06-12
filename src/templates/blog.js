import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Header>
      <Container>
        <div className="blog-post-container">
          <div className="blog-post">
            <h2>{frontmatter.title}</h2>
            <h5>{frontmatter.date}</h5>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Container>
    </Header>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
