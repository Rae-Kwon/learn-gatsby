import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby!</h1>
      <p>The start of Gatsby development</p>
      <img src="https://images.unsplash.com/photo-1590493139659-9601ac3ba0bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Sunset"/>
    </div>
  )
}
