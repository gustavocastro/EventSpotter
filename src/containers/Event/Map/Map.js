import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Place } from '@material-ui/icons'
 
class EventMap extends Component {
  state = {
    center: {
      lat: this.props.lat,
      lng: this.props.lng
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ language: 'en', region: 'en' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Place
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default EventMap