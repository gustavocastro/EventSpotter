import React from 'react'

import classes from './MenuLeft.css'
import Links from '../../Links/Links'

const MenuLeft = () => {
    return (
        <aside className={classes.menuLeft}>
            <Links style={classes} />
        </aside>
    )
}

export default MenuLeft
