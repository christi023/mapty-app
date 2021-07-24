import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useGeoLocation from '../../hooks/useGeoLocation';
import './Map.css';

const Map = () => {
  const location = useGeoLocation();
  console.log(location);

  return (
    <MapContainer center={[55.609477, 13.0428911]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[55.609477, 13.0428911]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
/* {location.loaded ? JSON.stringify(location) : 'Location data not available yet'}*/
