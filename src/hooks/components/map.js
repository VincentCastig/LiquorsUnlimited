import { React, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  height: "300px",
  width: "100%",
};

const center = {
  lat: 30.364101,
  lng: -88.548219,
};


const MyMapComponent = () => {
  const [isBigIntSupported] = useState(typeof BigInt !== 'undefined');

  if (!isBigIntSupported) {
    return <div>Error Loading Map</div>;  // Display a loading message
  }


  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker 
        position={center} 
      />
    </GoogleMap> )
    : <></>;

}

export default MyMapComponent;
