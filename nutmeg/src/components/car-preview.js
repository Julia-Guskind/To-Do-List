import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Carousel from 'react-bootstrap/Carousel'

import styles from './styles/article-preview.module.css'

const CarPrev = ({ article, year, month, category }) => {
  let imagePath = require(`../images/${article.category}.svg`)

  return (

  <div className={styles.preview}>
    <Link to={`/archives/${year}/${month}/${article.slug}`}>
    <img
          src={imagePath}
          class="card-img-top"
          alt="..."
    />
    <Carousel.Caption>
      
        {article.title}
      
      <p>{`${month}/${article.day}/${year}`}</p>
      <p
          dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </ Carousel.Caption>
    </Link>
  </div>  
  )
}

export default CarPrev;

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
    
    
    
   


  

