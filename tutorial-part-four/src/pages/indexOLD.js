import React from "react"
import Layout from "../components/layout"

export default function Home({ data }) {
  return ( 
    <Layout>
      <h1>{data.site.siteMetadata.today}</h1>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Empty-frame.png"
          alt="Missing something"
        />
      </div>
    </Layout>
  )
}

export const query = graphql` query {
  site {
    siteMetadata {
      today
    }
  }
} `