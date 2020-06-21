import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./features.module.css"
import FeatureLink from "../components/pageTools/featurelink"

const Features = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Features = edges.map(edge => <FeatureLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Features" />
      <div className={style.titleContainer}>
        <h1>Features</h1>
      </div>

      <div className={style.featureContainer}>
        {Features}
      </div>
    </Layout>
  )
}

export default Features;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "feature" } } }
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
            image
          }
        }
      }
    }
  }
`