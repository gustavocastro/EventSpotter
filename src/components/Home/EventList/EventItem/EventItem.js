import React from 'react'

import classes from './EventItem.css'

const EventItem = () => {
    return (
        <div className={classes.card}>
            <div className={classes.cardImg}>

            </div>
            <div className={classes.cardContent}>
                <span>01/01/2001</span>
                <h3>Header</h3>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}

export default EventItem
