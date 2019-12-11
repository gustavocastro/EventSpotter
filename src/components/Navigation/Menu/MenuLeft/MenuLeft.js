import React from 'react'

import classes from './MenuLeft.css'
import { Home, MusicNote, Fastfood, SportsSoccer } from '@material-ui/icons'

const MenuLeft = () => {
    return (
        <aside className={classes.menuLeft}>
            <ul>
                <li>
                    <Home />
                    <small>Home</small>
                </li>
                <li>
                    <MusicNote />
                    <small>Music</small>
                </li>
                <li>
                    <Fastfood />
                    <small>Food</small>
                </li>
                <li>
                    <SportsSoccer />
                    <small>Sports</small>
                </li>
            </ul>
        </aside>
    )
}

export default MenuLeft
