import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{height: "80vh"}}>
      <h1>NOT FOUND</h1>
      <p>This page does not exist</p>
    </div>
  </Layout>
)

export default NotFoundPage
