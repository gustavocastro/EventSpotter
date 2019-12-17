import React from 'react'

import classes from './About.css'

const About = () => {
    return (
        <div className={classes.about}>
            <h2>The Project</h2>
            <p>
                This project was created using React 16.12.0. It is a way of practicing my 
                studies with the library, which means no commercial purposes are applied.
            </p>
            <p>
                Its basic idea is to find events around the world, having the option to filter
                them based on their location, dates and category. For this, I used help
                from an API as listed below.
            </p>

            <h2>API</h2>
            <p>
                Ticketmaster API is a discovery API for finding events globally. Check out
                their documentation: 
                <a
                    href="https://developer.ticketmaster.com/products-and-docs/apis/getting-started/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ticketmaster API
                </a>
            </p>
        </div>
    )
}

export default About
