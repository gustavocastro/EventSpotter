import React from 'react'
import { Link } from 'react-router-dom'
import { Close, Home, Info, GitHub } from '@material-ui/icons'

const Links = (props) => {
    return (
        <div className={props.style.links}>
            <div className={props.style.linksClose}>
                <Close onClick={props.toggleMenu} />
            </div>

            <div className={props.style.linksList}>
                <ul>
                    <li>
                        <Link 
                            to={{pathname: '/', state: {from: window.location.pathname}}}>
                                <Home />
                                <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to={{pathname: '/about', state: {from: window.location.pathname}}}>
                                <Info />
                                <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/gustavocastro/EventSpotter" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <GitHub />
                                <span>GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Links