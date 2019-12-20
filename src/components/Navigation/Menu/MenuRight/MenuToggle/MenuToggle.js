import React from 'react'
import { Menu } from '@material-ui/core'

import classes from './MenuToggle.css'

const MenuToggle = (props) => {
    return (
        <div 
            className={classes.toggle}
            onClick={props.click}>
                <div></div>
                <div></div>
                <div></div>
        </div>
    )
}

export default MenuToggle
