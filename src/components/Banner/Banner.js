import React, { Fragment } from 'react'
import { Event, Place, Map, LocalOffer } from '@material-ui/icons'
import Moment from 'react-moment'

import classes from './Banner.css'
import imageFilter from '../../utilities/imageFilter'

const iconStyle = {
    fontSize: '1.2em',
    marginRight: '4px'
}

const Banner = (props) => {
    let image = imageFilter(props.images, '3_2', 305)

    return (
        <div className={classes.banner}>
            <img src={image.url} alt={props.title} />

            <div className={classes.info}>
                <h3>{props.title}</h3>
                <p>
                    <Event style={iconStyle} />
                    <span>
                        <Moment format="ddd [&#8226;] ll">
                            {props.dates.start.localDate}
                        </Moment>
                    </span>
                </p>
                {props.details.venues.map(venue => (
                    <Fragment key={venue.id}>
                        <p>
                            <Place style={iconStyle} />
                            <span>{venue.name}</span>
                        </p>
                        <p>
                            <Map style={iconStyle} />
                            <span>{venue.city.name}, {venue.country.countryCode}</span>
                        </p>
                    </Fragment>
                ))}
            </div>

            <div className={classes.ticketButton}>
                <a
                    href={props.tickets}
                    target="_blank"
                    rel="noopener noreferrer">
                        <LocalOffer style={{marginRight: '2px'}} />
                        Buy Tickets
                    </a>
            </div>
        </div>
    )
}

export default Banner
