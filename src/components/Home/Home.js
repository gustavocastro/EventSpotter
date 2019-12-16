import React, { Component, Fragment } from 'react'

import classes from './Home.css'
import EventList from './EventList/EventList'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <h2>
                        Popular events <label className={classes.label}>anywhere</label>
                    </h2>

                    <EventList />
                </div>
            </Fragment>
        )
    }
}

export default Home
