import React from "react"
export default ({ data }) => (
    <div>
        <h1>Items List {data.site.siteMetadata.title}</h1>
        <p>This is a static site, but it's loading items dynamically from GraphQL:</p>
        <ul>
          {data.site.siteMetadata.header.nav_links.map(x=> <li>{x.label}</li>)}
        </ul>
    </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        header {
          nav_links {
            label
          }
        }
      }
    }
  }
`