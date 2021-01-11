import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Carousel from 'react-bootstrap/Carousel'

import styles from './styles/article-preview.module.css'

export default ({ article, year, month }) => (
  <Carousel.Item interval={500}>
    <img
          alt="" fluid={article.heroImage.fluid}
    />
      <Carousel.Caption>
        <h3 className={styles.previewTitle}>
            <Link to={`/archives/${year}/${month}/${article.slug}`}>{article.title}</Link>
        </h3>
        <small>{`${month}/${article.day}/${year}`}</small>
        <p
            dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
            }}
        />
      </Carousel.Caption>
    
  </Carousel.Item>
)
    
    {/*
    <div className={styles.preview}>
      <Img alt="" fluid={article.heroImage.fluid} />
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
    */}
    
    
    
   


  

