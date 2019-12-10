import React from 'react'

import classes from './Spinner.css'

const Spinner = () => {
    return (
        <div class={classes.ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner
