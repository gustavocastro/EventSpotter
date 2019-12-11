import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import classes from './Home.css'
import EventList from './EventList/EventList'
import Spinner from '../UI/Spinner/Spinner'

class Home extends Component {
    render() {
        let homeContent = <Spinner />

        if (!this.props.loading) {
            homeContent = (
                <div>
                    <h2>
                        Popular events <label className={classes.label}>anywhere</label>
                    </h2>

                    <EventList />
                </div>
            )
        }

        return (
            <Fragment>
                {homeContent}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.filters.loading
    }
}

export default connect(mapStateToProps)(Home)
