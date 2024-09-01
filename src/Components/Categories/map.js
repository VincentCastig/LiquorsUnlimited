import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 30.364101,
  lng: -88.548219,
};

const MyMapComponent = ({ onMarkerClick }) => {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={17}
      center={center}
    >
      <Marker 
        position={{ lat: 30.364141, lng: -88.548214 }} 
        onClick={onMarkerClick} 
      />
    </GoogleMap>
  );
};

const Map = () => {
  const [isMarkerShown, setIsMarkerShown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  const handleMarkerClick = useCallback(() => {
    setIsMarkerShown(false);
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCsOYvglu2KQN0XGTFPwG79v8BSdJ_eCFA",
    libraries: ["geometry", "drawing", "places"],
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <MyMapComponent
      onMarkerClick={handleMarkerClick}
    />
  );
};

export default Map;
