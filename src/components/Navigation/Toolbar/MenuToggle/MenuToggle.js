import React from 'react'
import { Menu } from '@material-ui/icons'

import classes from './MenuToggle.css'

const MenuToggle = (props) => {
    return (
        <div 
            className={classes.toggle}
            onClick={props.click}>
                <Menu />
        </div>
    )
}

export default MenuToggle
