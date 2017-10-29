import React, { Component } from 'react';

class GoogleMaps extends Component{
  componentDidMount() {
    // create a new embebed google map
    // finds an html element and render the map there
    new google.maps.Map(this.refs.map, {
      // an options object
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render () {
    return (
      <div ref="map" />
    ) 
  }
}

export default GoogleMaps;