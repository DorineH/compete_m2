'use client'
import * as React from 'react';
import { motion } from "framer-motion";
import { 
  IconButton, 
  TextField, 
  Typography, 
  Box, 
  List, 
  ListItem, 
  ListItemText,
  Switch,
  InputAdornment,
  Modal
} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MapIcon from '@mui/icons-material/Map';
import CloseIcon from '@mui/icons-material/Close';
import '../css/AdressSearchCss.css'
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import("../../../public/MapComponent"), {
    ssr: false,
  });

export default function AddressSearchComponent({ onBackClick, onSelectLocation, type = "Départ" }) {
  const [searchText, setSearchText] = React.useState("");
  const [isPublic, setIsPublic] = React.useState(true);
  const [address, setAddress] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState('');

  const handleSelectLocation = (address) => {
    setSelectedAddress(address);
    onSelectLocation(address); // Appeler la fonction de rappel avec l'adresse sélectionnée
    setShowMap(false);
  };

  const handlePublicToggle = () => {
    setIsPublic(!isPublic);
  };

  const handleMapClick = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  // Debounce effect (évite d'appeler l'API à chaque frappe)
  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.trim() !== "") {
        setQuery(searchText);
      }
    }, 500); // Attends 500ms après la dernière frappe

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  React.useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(`/api/adresse?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) => setAddress(data.features || []))
      .catch((error) => console.error("Erreur:", error))
      .finally(() => setLoading(false));
  }, [query]);

  // Gestion de la sélection d'un lieu
  const handleLocationSelect = (location) => {
    // Appel de la fonction passée en prop avec le lieu sélectionné
    onSelectLocation(location.properties.label);
    setSelectedAddress(location.properties.label);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="address-search-container"
      >
        {/* Header avec flèche de retour et indicateur de progression */}
        <Box className="address-search-header">
          <IconButton className="back-button" onClick={onBackClick}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box className="progress-container">
            <Box className="progress-bar">
              <Box className="progress-filled"></Box>
            </Box>
            <Typography className="progress-text">1/3</Typography>
          </Box>
        </Box>

        {/* Toggle Public/Privé */}
        <Box className="public-toggle">
          <Typography>Public</Typography>
          <Switch 
            checked={isPublic}
            onChange={handlePublicToggle}
            color="primary"
            size="small"
          />
        </Box>

        {/* Titre */}
        <Typography variant="h6" className="search-title">
          {type}
        </Typography>

        {/* Champ de recherche */}
        <TextField
          fullWidth
          placeholder="Recherchez une adresse"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PlaceIcon className="search-icon" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleMapClick}>
                  <MapIcon className="map-icon" />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {/* Actions rapides */}
        <Box className="quick-actions">
          <Box className="action-button recent">
            <AccessTimeIcon fontSize="small" />
            <Typography>Lieu récents</Typography>
          </Box>
          <Box className="action-button favorites">
            <StarBorderIcon fontSize="small" />
            <Typography>Favoris</Typography>
          </Box>
        </Box>

        {/* Position actuelle */}
        <Box className="current-location">
          <MyLocationIcon color="primary" />
          <Typography color="primary">Utiliser ma position actuelle</Typography>
        </Box>

        {/* Affichage des résultats */}
        {loading && <p>Chargement...</p>}
        {address.length > 0 && (
          <List>
            {address.map((address, index) => (
              <ListItem key={index} button={true.toString()} onClick={() => handleLocationSelect(address)}>
                <ListItemText primary={address.properties.label} />
              </ListItem>
            ))}
          </List>
        )}
      </motion.div>

      {/* Map Modal */}
      <Modal open={showMap} onClose={handleCloseMap}>
        <Box className="map-modal">
          <IconButton className="close-map-button" onClick={handleCloseMap}>
            <CloseIcon />
          </IconButton>
          {/* <MapComponent onSelectLocation={handleSelectLocation} /> */}
          <div>
            <button onClick={onBackClick}>Retour</button>
            <h2>Recherche d&apos;adresse ({type})</h2>
            <MapComponent onSelectLocation={handleSelectLocation} />
            <input
              type="text"
              value={selectedAddress}
              readOnly
              placeholder="Adresse sélectionnée"
            />
          </div>
        </Box>
      </Modal>
    </>
  );
}