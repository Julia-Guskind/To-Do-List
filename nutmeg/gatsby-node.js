const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const yearList = path.resolve('./src/templates/year.js')
    const monthList = path.resolve('./src/templates/month.js')
    
    {/*

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
      */}

///////////////////////////////////////////////////////////////////////
// NEW BLOG POST //

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(filter: {month: {}, day: {}, year: {}}) {
              edges {
                node {
                  title
                  id
                  slug
                  year
                  month
                  day
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/archives/${post.node.year}/${post.node.month}/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )

    /////////////////////////////////////
    /// Years ///
  
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
              distinct(field: year)
              }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const years = result.data.allContentfulBlogPost.distinct
        years.forEach(year => {
          createPage({
            path: `/archives/${year}/`,
            component: yearList,
            context: {
              slug: year,
            },
          })
        })
      })
    )

    /////////////////////////////////////
    /// Months ///
  
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
              distinct(field: year)
              }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        //const months = result.data.allContentfulBlogPost.distinct
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const years = result.data.allContentfulBlogPost.distinct

        years.forEach(year => {
          months.forEach(month => {
            createPage({
              path: `/archives/${year}/${month}/`,
              component: monthList,
              context: {
                slug: month,
              },
            })
          })
        })
      })
    )



  })
} 
