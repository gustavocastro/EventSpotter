import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Event, Place, Map } from '@material-ui/icons';

import classes from './EventItem.css'
import imageFilter from '../../../../utilities/imageFilter'

const iconStyle = {
    fontSize: '1.2em',
    marginRight: '4px'
}

const EventItem = (props) => {
    let image = imageFilter(props.images, '3_2', 640)

    return (
        <Link to={'/event/'+props.id} className={classes.card}>
            <div className={classes.cardImg}>
                <img src={image.url} alt={props.header} />
            </div>
            <div className={classes.cardContent}>
                <h3>{props.header}</h3>
                <p>
                    <Event style={iconStyle} />
                    <span>{props.date}</span>
                </p>
                {props.venues.map(venue => (
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
        </Link>
    )
}

export default EventItem
