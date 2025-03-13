"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const geoapifyApiKey = "4ee6951edec24760bc82ddde1b29950a"; // Remplacez par votre clé API Geoapify

  return (
    <MapContainer
      center={[48.8566, 2.3522]} // Coordonnées de départ (Paris ici)
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url={`https://maps.geoapify.com/v1/tile/walk/{z}/{x}/{y}.png?apiKey=${geoapifyApiKey}`}
        attribution='&copy; <a href="https://www.geoapify.com/">Geoapify</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;
