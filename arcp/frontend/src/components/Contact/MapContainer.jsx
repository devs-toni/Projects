import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const MapContainer = ( { styles } ) => {
  
  const center = {
    lat: 38.374184900789324, 
    lng: -0.42844970205660116
  };
  
  const position = {
    lat: 38.374184900789324, 
    lng: -0.42844970205660116
  }
  
  const onLoad = Marker => {
/*     console.log('marker: ', Marker)
 */  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBUDlqIAx7vEQvVeWLW_EU-MXSJhUsJQ6Y"
    >
      <GoogleMap
        mapContainerClassName={styles}
        center={center}
        zoom={7}
      >
        <Marker
          onLoad={onLoad}
          position={position}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;