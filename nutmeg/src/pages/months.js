import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from '../components/styles/blog.module.css'
import Layout from '../components/layout'
import YearPreview from '../components/date-components/year-preview'
import ArticlePreview from '../components/article-preview'

class MonthIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    {/*<YearPreview year={node} category={node.category}/>*/}
                    <ArticlePreview article={node} year={node.year} month={node.month} category={node.category}/>
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

export default MonthIndex

export const pageQuery = graphql`
  query MonthQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          month
          year
          category
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
