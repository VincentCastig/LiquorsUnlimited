

import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "300px",
  width: "100%",
};

const center = {
  lat: 30.364101,
  lng: -88.548219,
};

const MyMapComponent = ({ onMarkerClick, isMarkerShown }) => {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={16}
      center={center}
    >
      {isMarkerShown && (
        <div id="map">
          <script
            type="text/javascript"
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
          ></script>
        </div>
      )}
    </GoogleMap>
  );
};

const Map = () => {
  const [isMarkerShown, setIsMarkerShown] = useState(true);

  console.log('process.env.GOOGLE_MAPS_KEY', process.env.REACT_APP_GOOGLE_MAPS_KEY);

  const handleMarkerClick = useCallback(() => {
    setIsMarkerShown(false);
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    libraries: ["geometry", "drawing", "places"],
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <MyMapComponent
      onMarkerClick={handleMarkerClick}
      isMarkerShown={isMarkerShown}
    />
  );
};

export default Map;
