import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './EventList.css';
import EventItem from './EventItem/EventItem';
import * as actions from '../../../store/actions/index'

class EventList extends Component {
    componentDidMount() {
        if (!this.props.filtered && !this.props.loading)
            this.props.onGetEvents()
    }

    render() {
        return (
            <div className={classes.eventList}>
                {this.props.events.map(event => (
                    <EventItem
                        key={event.id}
                        header={event.name}
                        images={event.images}
                        date={event.dates.start.localDate}
                        venues={event._embedded.venues} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.filters.events,
        filtered: state.filters.filtered,
        loading: state.filters.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetEvents: () => dispatch(actions.getEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)