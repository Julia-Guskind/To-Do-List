import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from '../components/styles/blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import YearPreview from '../components/date-components/year-preview'
import Years from '../components/date-components/years'


class Archives extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const years = get(this, 'props.data.allContentfulBlogPost.distinct') // array of years "YYYY"

    return (
      
      <Layout location={this.props.location} title={siteTitle}>

        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Lookup by date</h2>
            <ul className="year-list">
              {years.map((year) => {
                return (
                  <li key={year}>
                    <YearPreview date={ year }/>
                  </li>
                )
              })}
            </ul>
            {/*}
            <ul className="article-list">
              {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                })}
              </ul> */}
          </div>
        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Layout>
    )
  }
}

export default Archives

export const pageQuery = graphql`
  query ArchiveQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      distinct(field: year)
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
              ...GatsbyContentfulFluid
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
