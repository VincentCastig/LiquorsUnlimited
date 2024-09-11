import { React, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  height: "300px",
  width: "100%",
};

const center = {
  lat: 30.364101,
  lng: -88.548219,
};

const isSafariOniPhone = () => {
  const userAgent = navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isIphone = /iPhone/.test(userAgent);
  return isSafari && isIphone;
};


const MyMapComponent = () => {
  const [isBigIntSupported] = useState(typeof BigInt !== 'undefined');
  const [isSafariIphone, setIsSafariIphone] = useState(isSafariOniPhone);


  useEffect(() => {
    setIsSafariIphone(isSafariOniPhone());
  }, []);


  if (!isBigIntSupported || isSafariIphone) {
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
