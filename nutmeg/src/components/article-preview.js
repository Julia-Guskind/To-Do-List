import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './styles/article-preview.module.css'


const ArticlePreview= ({ article, year, month, category }) => {
  console.log(category)
  let imagePath = require(`../images/${category}.svg`)

    return (
      <div className={styles.preview}>
        <img
          src={imagePath}
          class="card-img-top"
          alt="..."
        />  
        <h3 className={styles.previewTitle}>
          <Link to={`/archives/${year}/${month}/${article.slug}`}>{article.title}</Link>
        </h3>
        <small>{`${month}/${article.day}/${year}`}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      </div> 
    )
  }

export default ArticlePreview;

/*
export default ({ article, year, month, category }) => (
  imagePath = require(`../images/${category}.svg`

    return (
    <div className={styles.preview}>
      <img
        src={require(`../images/${category}.svg`)}
        class="card-img-top"
        alt="..."
      />  
      <h3 className={styles.previewTitle}>
        <Link to={`/archives/${year}/${month}/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{`${month}/${article.day}/${year}`}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div> 
  )
)
*/



//       <Img alt="" fluid={article.heroImage.fluid} />
