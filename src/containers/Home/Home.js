import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import classes from './Home.css'
import EventList from './EventList/EventList'

class Home extends Component {
    render() {        
        return (
            <Fragment>
                <div>
                    <h2>
                        Popular events {this.props.location.value ? (
                            <label className={classes.label}>
                                in <span className={classes.span}>
                                    {this.props.location.value}
                                </span>
                            </label>
                        ) : 
                        <span className={classes.span}>anywhere</span>}
                    </h2>

                    <EventList />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        location: state.filters.filters.location 
    }
}

export default connect(mapStateToProps)(Home)
