import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Card from '../card'
import styles from '../styles/article-preview.module.css'

export default ({ date, name, month, category }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Card title={date} name={name} month={ month } category={category}></Card>
      {/*<Link to="#">{ year }</Link>*/}
    </h3>
  </div>
)