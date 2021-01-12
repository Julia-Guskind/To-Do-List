
import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarPrev from '../components/car-preview'
import { CarouselItem } from 'react-bootstrap'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const category = get(this, 'props.data.allContentfulBlogPost.nodes.category')
  

    return (
      <Layout location={this.props.location} title={siteTitle} category={category}>
        <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
              <Carousel>
                {posts.map(({ node }) => { // map each node (blog post) to a carousel item
                      return (
                        <Carousel.Item interval={1000}>
                          <CarPrev article={node} year={node.year} month={node.month} category={node.category} />
                        </Carousel.Item>
                      )
                      })}
              </Carousel>
          </div>
        </div>
      </Layout>
      
    )
  }
}

// https://react-bootstrap.github.io/components/carousel/

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          year
          month
          day
          publishDate(formatString: "MMMM Do, YYYY")
          tags
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`




{/*

  <Carousel.Item interval={500}>
                        <img
                          alt="" fluid={node.heroImage.fluid}
                        />
                      <Carousel.Caption>
                        <h3 className={styles.previewTitle}>
                            <Link to={`/archives/${node.year}/${node.month}/${node.slug}`}>{node.title}</Link>
                        </h3>
                        <small>{`${node.month}/${node.day}/${node.year}`}</small>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: node.description.childMarkdownRemark.html,
                            }}
                        />
                     </Carousel.Caption>
                  </Carousel.Item>

*/}