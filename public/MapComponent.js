// "use client";

// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const MapComponent = () => {
//   const geoapifyApiKey = "4ee6951edec24760bc82ddde1b29950a"; // Remplacez par votre clé API Geoapify

//   return (
//     <MapContainer
//       center={[48.8566, 2.3522]} // Coordonnées de départ (Paris ici)
//       zoom={14}
//       style={{ height: "100vh", width: "100%" }}
//     >
//       <TileLayer
//         url={`https://maps.geoapify.com/v1/tile/walk/{z}/{x}/{y}.png?apiKey=${geoapifyApiKey}`}
//         attribution='&copy; <a href="https://www.geoapify.com/">Geoapify</a> contributors'
//       />
//     </MapContainer>
//   );
// };

// export default MapComponent;

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Icône personnalisée pour corriger l'affichage
const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png", // Assurez-vous d'avoir ce fichier dans public/
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const [position, setPosition] = useState([48.8566, 2.3522]); // Paris par défaut
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Chargement de la carte...</p>;

  // Fonction appelée lorsque le marqueur est déplacé
  const handleMarkerDrag = (event) => {
    const { lat, lng } = event.target.getLatLng();
    setPosition([lat, lng]);
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={position}
        icon={customIcon}
        draggable={true} // Permet de déplacer le marqueur
        eventHandlers={{ dragend: handleMarkerDrag }}
      >
        <Popup>
          Position actuelle : {position[0].toFixed(5)}, {position[1].toFixed(5)}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;


// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { useEffect, useState } from "react";

// // Icône personnalisée
// const customIcon = new L.Icon({
//   iconUrl: "/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const MapComponent = ({ onSelectLocation }) => {
//   const [position, setPosition] = useState([48.8566, 2.3522]); // Paris par défaut
//   const [address, setAddress] = useState("Adresse inconnue");
//   const [tempAddress, setTempAddress] = useState("Adresse inconnue");

//   useEffect(() => {
//     fetchAddress(position[0], position[1]);
//   }, [position]);

//   // Fonction pour récupérer l'adresse depuis l'API Nominatim
//   const fetchAddress = async (lat, lon) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
//       );
//       const data = await response.json();
//       if (data.display_name) {
//         setTempAddress(data.display_name);
//         onSelectLocation(data.display_name);
        
//       } else {
//         setTempAddress("Adresse non trouvée");
//       }
//     } catch (error) {
//       console.error("Erreur lors de la récupération de l'adresse :", error);
//       setTempAddress("Erreur lors de la récupération de l'adresse");
//     }
//   };

//   // Fonction appelée lorsque le marqueur est déplacé
//   const handleMarkerDrag = async (event) => {
//     const { lat, lng } = event.target.getLatLng();
//     setPosition([lat, lng]);
//     await fetchAddress(lat, lng); // Récupérer l'adresse après le déplacement
//   };

//   // Fonction pour confirmer l'adresse sélectionnée
//   const handleConfirmAddress = () => {
//     setAddress(tempAddress);
//     onSelectLocation(tempAddress);
//   };

//   return (
//     <div>
//       <MapContainer
//         center={position}
//         zoom={13}
//         style={{ height: "500px", width: "100%" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker
//           position={position}
//           icon={customIcon}
//           draggable={true}
//           eventHandlers={{ dragend: handleMarkerDrag }}
//         >
//           <Popup>
//             <strong>Coordonnées :</strong> {position[0].toFixed(5)}, {position[1].toFixed(5)}
//             <br />
//             <strong>Adresse :</strong> {tempAddress}
//           </Popup>
//         </Marker>
//       </MapContainer>
//       <button onClick={handleConfirmAddress}>Confirmer l&apos;adresse</button>
//     </div>
//   );
// };

// export default MapComponent;


