import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'

import classes from './EventList.css';
import EventItem from './EventItem/EventItem';
import * as actions from '../../../store/actions/index'

class EventList extends Component {
    componentDidMount() {
        if (!this.props.filtered && !this.props.loading && !this.props.event)
            this.props.onGetEvents(this.props.filters, this.props.currentPage)
    }

    handlePageChange = (page) => {
        if (this.props.currentPage !== page)
            this.props.onGetEvents(this.props.filters, page)
    }

    render() {
        return (
            <Fragment>
                <div className={classes.eventList}>
                    {this.props.events.map(event => (
                        <EventItem
                            key={event.id}
                            id={event.id}
                            header={event.name}
                            images={event.images}
                            date={event.dates.start.localDate}
                            venues={event._embedded.venues} />
                    ))}
                </div>

                <div className={classes.pagination}>
                    <ReactPaginate
                        initialPage={this.props.currentPage}
                        pageCount={this.props.totalPages}
                        onPageChange={(data) => this.handlePageChange(data.selected)}
                        disabledClassName={classes.disabled}
                        activeClassName={classes.active} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.filters.events,
        filters: state.filters.filters,
        filtered: state.filters.filtered,
        loading: state.filters.loading,
        currentPage: state.filters.currentPage,
        totalPages: state.filters.totalPages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetEvents: (filters, page) => dispatch(actions.getEvents(filters, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)