import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './styles/article-preview.module.css'


const ArticlePreview= ({ article, year, month, category }) => {
  //console.log(article)
  let imagePath = require(`../images/${article.category}.svg`)

  return (
    <Link to={`/archives/${year}/${month}/${article.slug}`}>
        <div class="card">
            <img
                src= {imagePath}
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h4 class="card-title" style={{
                    alignContent: "center",
                }}>{article.title}</h4>
                <p class="card-text">
                {article.description.description}
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
            </div>
        </div>
    </Link>
    )
  }

export default ArticlePreview;
    {/*}  
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
        ) */}
  



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
