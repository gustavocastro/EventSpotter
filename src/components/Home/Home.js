import React, { Component } from 'react'
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
                        Popular in <label className={classes.label}>Somewhere</label>
                    </h2>

                    <EventList />
                </div>
            )
        }

        return (
            <div>
                {homeContent}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.filters.loading
    }
}

export default connect(mapStateToProps)(Home)
