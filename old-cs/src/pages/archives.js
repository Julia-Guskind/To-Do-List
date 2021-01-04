import React from "react"
import { Link, graphql } from "gatsby"
import ArchiveDropdown from "../components/dropdown"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Archives = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <div>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
      </div>
    )
  }

  return (
    <div>
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
         
          return (
            
            <li key={post.fields.slug}>
            <ArchiveDropdown title={title}></ArchiveDropdown>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
    </div>
  )
}

export default Archives

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___month], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          year
          title
          description
        }
      }
    }
  }
`