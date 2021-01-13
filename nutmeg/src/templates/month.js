import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Card from '../components/card'
import ArticlePreview from '../components/article-preview'

import heroStyles from '../components/styles/hero.module.css'

class MonthTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const allPosts = get(this, 'props.data.allContentfulBlogPost.edges')
    const posts = allPosts.filter(post => post.node.title)
    //const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    /*
    let currentURL = this.props.location.href
    currentURL = currentURL.split('/')
    
    const month = currentURL.pop()
    const year = currentURL.pop()
    
    currentURL = "/" + year + "/" + month 

    posts.map(({ node }) => {
      if (node.year == year && node.month == month) {
          foundPost = true;
      }}) */
    
    // need to know: year and month --> display relevant blog posts
    const monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const yearNum = [2017, 2020, 2021]

    let foundPost = false;
    
    let nodeArr = []
    
    function showPosts() {
      for (let yearIndex = 0; yearIndex < yearNum.length; ++yearIndex) {
        for (let monthIndex = 0; monthIndex < monthNum.length; ++monthIndex) {
          posts.map(({ node }) => {
            if (node.year == yearNum[yearIndex] && node.month == monthNum[monthIndex]) {
              nodeArr.push(node)    
            }
          })
        
      }}
      }

      showPosts()
      

    for (let yearIndex = 0; yearIndex < yearNum.length; ++yearIndex) {
      for (let monthIndex = 0; monthIndex < monthNum.length; ++monthIndex) {
        posts.map(({ node }) => {
          if (node.year == yearNum[yearIndex] && node.month == monthNum[monthIndex]) {
              foundPost = true;
          }})
      }
    }
    
console.log(nodeArr)
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

                
                 {nodeArr.map(( node ) => {
                   console.log(node)
                   return (
                    <li key={node.slug}>
                    <ArticlePreview article={node} year={node.year} month={node.month} />
                    </li>
                  )
                 })}
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





{/*posts.map(({ node }) => {
                    if (node.year == year && node.month == month) {
                        foundPost = true;
                        return (
                            <li key={node.slug}>
                            <ArticlePreview article={node} year={year} month={month} />
                            </li>
                        )}
                    })
                } */}