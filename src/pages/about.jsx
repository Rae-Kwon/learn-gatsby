import React from 'react'
import Header from '../components/Header'

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Header headerText="About" />
            <Header headerText="This is a second header" />
            <p>This is an about page</p>
        </div>
    )
}
