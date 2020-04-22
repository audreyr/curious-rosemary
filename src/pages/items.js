import React from "react"
export default ({ data }) => (
    <div>
        <h1>Items List</h1>
        <p>This is a static site, but it's loading items dynamically from GraphQL:</p>
        <ul>
          {data.hasuraSample.hello}
        </ul>
    </div>
)

export const query = graphql`
  query {hasuraSample {
    hello
  }}
`