import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const containerStyle = {
  height: "300px",
  width: "100%",
};

const center = {
  lat: 30.364101,
  lng: -88.548219,
};

const MyMapComponent = () => {
  const mapContainerRef = useRef(null);
  const [isBigIntSupported] = useState(typeof BigInt !== 'undefined');

  if (!isBigIntSupported) {
    return <div>Error Loading Map</div>;  // Display a loading message
  }

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
      version: "weekly",
    });

    let map;

    loader.importLibrary('maps').then(() => {
      if (typeof BigInt === 'undefined') {
        // Handle BigInt unsupported scenario
        console.error('BigInt is not supported in this environment.');
        return;
      }

      map = new window.google.maps.Map(mapContainerRef.current, {
        center: center,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: center,
        map: map,
      });
    }).catch(err => {
      console.error('Error loading Google Maps API:', err);
    });

    return () => {
      if (map) {
        map = null; // Clean up map instance on unmount
      }
    };
  }, []);

  return <div ref={mapContainerRef} style={containerStyle} />;
}

export default MyMapComponent;
