import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './Home.css'
import EventList from './EventList/EventList'
import capitalize from '../../utilities/capitalize';

class Home extends Component {
    render() {        
        return (
            <div className={classes.home}>
                <h2>
                    Popular events {this.props.location.value ? (
                        <label className={classes.label}>
                            in <span className={classes.span}>
                                {capitalize(this.props.location.value)}
                            </span>
                        </label>
                    ) :
                        <span className={classes.span}>anywhere</span>}
                </h2>

                <EventList />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        location: state.filters.filters.location 
    }
}

export default connect(mapStateToProps)(Home)
