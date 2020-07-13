import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo";
import style from "./definitionTemp.module.css";

import Layout from "../components/layout"

export default function definitionTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className={style.definitionContainer}>
      <div className={style.title}>
        <h1>{frontmatter.title}</h1>
        <h5>Updated: {frontmatter.date}</h5>
      </div>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      </div>
    </Layout>
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
