import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Card from '../components/card'
import YearPreview from '../components/date-components/year-preview'

import heroStyles from '../components/styles/hero.module.css'

class YearTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    //const months = get(this, 'props.data.allContentfulBlogPost.distinct') // array of years "YYYY"
    const monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const months = ["January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"]

    return (
      <Layout location={this.props.location} title={siteTitle}>

        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Lookup by date</h2>
            <ul className="year-list">
              {monthNum.map((month) => {
                return (
                  <li key={month}>
                    <YearPreview date={ month } name={ months[month - 1] } month={ true } />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Layout>
    )
  }
}

export default YearTemplate

export const pageQuery = graphql`
  query YearQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      distinct(field: month)
      edges {
        node {
          title
          slug
          year
          month
          day
          publishDate(formatString: "YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`


/*

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

*/
