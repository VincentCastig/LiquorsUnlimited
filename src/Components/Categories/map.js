import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCsOYvglu2KQN0XGTFPwG79v8BSdJ_eCFA&v=3.exp&libraries=geometry,drawing,places",


    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 30.364101, lng: -88.548219 }}
  >
    <Marker 
      position={{ lat: 30.364141, lng: -88.548214 }} 
      onClick={props.onMarkerClick} 
      
    />
  </GoogleMap>
)

class Map extends Component {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        
      />
    )
  }
}

export default Map;