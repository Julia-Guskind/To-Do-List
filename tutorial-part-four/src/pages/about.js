import React from "react"
import Layout from "../components/layout"

export default function About({ data }) {
    return (
        <Layout>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio rerum ex ducimus provident ad nulla sint porro repellat rem quasi.
            </p>
        </Layout>      
          
    )
}

// This is a graphql query:
// We make the query outside of our About component
export const query = graphql` query {
    site {
        siteMetadata {
            title
            }
        }
    }
`