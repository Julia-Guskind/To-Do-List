import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Card from '../components/card'
import ArticlePreview from '../components/article-preview'
import heroStyles from '../components/styles/hero.module.css'

/*
function MonthTemplate() {
  const siteTitle = get(this.props, 'data.site.siteMetadata.title')
  const allPosts = get(this, 'props.data.allContentfulBlogPost.edges')
  const posts = allPosts.filter(post => post.node.title)

  useEffect(() => {
      let currentURL = this.props.location.href
      currentURL = currentURL.split('/')
      const month = currentURL.pop()
      const year = currentURL.pop()

      currentURL = "/" + year + "/" + month
      let foundPost = false;
        
      posts.map(({ node }) => {
      if (node.year == year && node.month == month) {
            foundPost = true;
        }})
    
        if (! foundPost) {
          return (
              <Layout location={this.props.location} title={siteTitle}>
                <h1> NO POSTS </h1> 
              </Layout>
          )
        }
  })
  
}

export default MonthTemplate
*/


class MonthTemplate extends React.Component {
  
  render() {
        // need to know: year and month --> display relevant blog posts
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        const allPosts = get(this, 'props.data.allContentfulBlogPost.edges')
        const posts = allPosts.filter(post => post.node.title)
        //const posts = get(this, 'props.data.allContentfulBlogPost.edges')

        //console.log("PROPS!", this.props)
        //console.log("PATH", this.props.path)
        let currentURL = this.props.path
        currentURL = currentURL.split('/')
        //console.log(currentURL)

        const month = currentURL[3]
        const year = currentURL[2]

        //console.log(month, year)

        currentURL = "/" + year + "/" + month
        //console.log(currentURL)

        let foundPost = false;
        
        posts.map(({ node }) => {
            //console.log(node)
            if (node.year == year && node.month == month) {
                foundPost = true;
            }})

        // No posts found for given month and year
        if (! foundPost) {
            return (
                <Layout location={this.props.location} title={siteTitle}>
                  <h1> NO POSTS </h1> 
                </Layout>
            )
        }
        
        // Display blog posts found for given month and year
        else {
            return (
              <Layout location={this.props.location} title={siteTitle}>
                    <ul className="article-list">
                    {posts.map(({ node }) => {
                        if (node.year == year && node.month == month) {
                            foundPost = true;
                            return (
                                <li key={node.slug}>
                                <ArticlePreview article={node} year={year} month={month} />
                                </li>
                            )}
                        })
                    }
                    </ul>
              </Layout>
            )
        }
    }

  }

export default MonthTemplate



// filter query based on year and month
export const pageQuery = graphql`
  query DayQuery($month: Int, $year: Int) {
    
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: {month: {eq: $month}, year: {eq: $year}}, sort: { fields: [publishDate], order: ASC }) {
      edges {
        node {
          title
          category
          slug
          year
          month
          day
          publishDate(formatString: "YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            description
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`