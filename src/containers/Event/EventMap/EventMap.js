import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import { LocationOn } from '@material-ui/icons'

class EventMap extends Component {
  state = {
    viewport: {
      mapboxApiAccessToken: this.props.token,
      latitude: this.props.lat,
      longitude: this.props.lng,
      zoom: 12,
      mapStyle: 'mapbox://styles/mapbox/dark-v10',
      width: '100%',
      height: 400
    }
  }

  render() {
    return (
      <ReactMapGL 
        {...this.state.viewport}
        onViewportChange={(viewport) => {
          for (let key in viewport) {
            let updatedViewport = { ...this.state.viewport }
            updatedViewport[key] = viewport[key]
            this.setState({ ...this.state, viewport: updatedViewport })
          }
        }} >
          <Marker 
            latitude={this.props.lat} 
            longitude={this.props.lng} 
            offsetLeft={-20} 
            offsetTop={-10}>
              <LocationOn style={{color: "#EF2D56"}} />
          </Marker>
      </ReactMapGL>
    );
  }
}

export default EventMap