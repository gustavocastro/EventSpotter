import React from 'react'
import { Link } from 'react-router-dom'

import classes from './MenuLeft.css'
import { Home, Info, GitHub } from '@material-ui/icons'

const MenuLeft = () => {
    return (
        <aside className={classes.menuLeft}>
            <ul>
                <li>
                    <Link to="/">
                        <Home />
                        <small>Home</small>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <Info />
                        <small>About</small>
                    </Link>
                </li>
                <li>
                    <a 
                        href="https://github.com/gustavocastro/EventSpotter" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <GitHub />
                            <small>GitHub</small>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default MenuLeft
