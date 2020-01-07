import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import If from '../../hoc/If'

import classes from './Event.css'
import Banner from '../../components/Banner/Banner'
import EventMap from './Map/Map'
import checkObject from '../../utilities/checkObject'
import * as actions from '../../store/actions/index'

class Event extends Component {
    componentDidMount() {
        let id = this.props.match.params.id

        if ((!this.props.loading && !this.props.eventFetched) || 
            (this.props.event.id !== id && this.props.eventFetched)) {
            this.props.onLoadEvent(id)
        }
    }

    handleInfoDisplay = () => {
        let accessibility = ''

        let venues = this.props.event._embedded.venues.map(venue => (
            <div key={venue.id}>
                <h4>{venue.name}</h4>
                
                {venue.generalInfo ? (
                    <Fragment>
                        <p>{venue.generalInfo.generalRule}</p>
                        <p>{venue.generalInfo.childRule}</p>
                    </Fragment>
                ) : null}

                {venue.parkingDetail ? (
                    <Fragment>
                        <h4>Parking</h4>
                        <p>{venue.parkingDetail}</p>
                    </Fragment>
                ) : null}
            </div>
        ))
        
        if (this.props.event.accessibility) {
            accessibility = (
                <Fragment>
                    <h4>Accessibility</h4>
                    <p>{this.props.event.accessibility.info}</p>
                </Fragment>
            )
        }

        let info = (
            <Fragment>
                {venues}
                {accessibility}
            </Fragment>
        )

        return info
    }

    render() {
        let info = ''
        if (checkObject(this.props.event))
            info = this.handleInfoDisplay()
        
        let location = { latitude: '', longitude: '' }
        if (this.props.event._embedded)
            location = this.props.event._embedded.venues[0].location

        return (
            <div className={classes.event}>
                <If condition={checkObject(this.props.event)}>
                    <Banner 
                        title={this.props.event.name}
                        images={this.props.event.images}
                        dates={this.props.event.dates}
                        details={this.props.event._embedded}
                        tickets={this.props.event.url} />
                </If>

                <div className={classes.content}>
                    <h3>Event Info</h3>
                    {info}
                    <EventMap
                        lat={+location.latitude}
                        lng={+location.longitude} />
                </div>
            </div>
        )
    }    
}

const mapStateToProps = state => {
    return {
        event: state.event.eventDetails,
        loading: state.event.loading,
        eventFetched: state.event.eventFetched
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadEvent: (id) => dispatch(actions.getEventDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
