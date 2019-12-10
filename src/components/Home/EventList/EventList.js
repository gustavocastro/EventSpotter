import React, { Component } from 'react'

import EventItem from './EventItem/EventItem';
import classes from './EventList.css';

class EventList extends Component {
    render() {
        return (
            <div className={classes.eventList}>
                <EventItem />
                <EventItem />
                <EventItem />
                <EventItem />
                <EventItem />
            </div>
        )
    }
}

export default EventList