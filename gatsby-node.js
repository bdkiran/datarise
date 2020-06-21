/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const featureTemplate = require.resolve(`./src/templates/featureTemplate.js`)
    const defTemplate = require.resolve(`./src/templates/definitionTemplate.js`)
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
                category
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if(node.frontmatter.category == 'definition'){
        createPage({
          path: node.frontmatter.slug,
          component: defTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        });
      }
      else {
        createPage({
          path: node.frontmatter.slug,
          component: featureTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        });
      }
    });
  }