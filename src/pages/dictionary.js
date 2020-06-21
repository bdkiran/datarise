import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import DefLink from "../components/pageTools/deflink"
import style from "./dictionary.module.css"

const Dictionary = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Definitions = edges.map(edge => <DefLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Dictionary" />
      <div className={style.titleContainer}>
        <h1>Dictionary</h1>
      </div>
      <h2>All Terms</h2>

      <ol className={style.termContianer}>
        {Definitions}
      </ol>
    </Layout>
  )
}

export default Dictionary;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "definition" } } }
      )  {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            category
          }
        }
      }
    }
  }
`
