import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardLink from "../components/pageTools/cardlink"
import style from "./index.module.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const size = 4

  const Definitions = edges
    .filter(edge => edge.node.frontmatter.category === "definition") //filter based on some criteria
    .slice(0, size) //Return only the first four
    .map(edge => <CardLink key={edge.node.id} post={edge.node} />)

  const Features = edges
    .filter(edge => edge.node.frontmatter.category === "feature") //filter based on some criteria
    .slice(0, size) //Return only the first four
    .map(edge => <CardLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={style.headContainer}>
        <h1>Data is dominating our world</h1>
        <h2>A hub for data related topics. All in one place.</h2>
      </div>
      <div className={style.sectionHeading}>
        <h2>Recent Features</h2>
      </div>
      <div className={style.cardContainer}>{Features}</div>
      <div className={style.sectionHeading}>
        <h2>Top Definitions</h2>
      </div>
      <div className={style.cardContainer}>{Definitions}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
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
