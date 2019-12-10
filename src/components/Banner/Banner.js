import React from 'react'

import bannerImg from '../../assets/images/banner.jpg'
import classes from './Banner.css'

const Banner = () => {
    let style = {
        backgroundImage: `url('${bannerImg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    return (
        <div className={classes.banner} style={style}>
            <div className={classes.content}>
                <h1>Music, etc.</h1>
                <h3>Lorem ipsum dolor</h3>
                <h3>sit amet continues</h3>
            </div>
        </div>
    )
}

export default Banner
