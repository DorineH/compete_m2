'use client'
import * as React from 'react';
import "../css/AddRideCss.css";
import AddressSearchComponent from '../components/AdressSearchComponent';
import ExplainMoreComponent from '../components/ExplainMoreComponent';
import DisplayDataComponent from '../components/DisplayDataComponent'; // Import the new component

import { motion } from "framer-motion";
import { Grid2, IconButton, TextField, Typography, Box, Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PlaceIcon from '@mui/icons-material/Place';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import dayjs from "dayjs";


export default function AddRidePage() {    
    const [date, setDate] = React.useState(dayjs());
    const [time, setTime] = React.useState(dayjs());
    const [departure, setDeparture] = React.useState('');
    const [arrival, setArrival] = React.useState('');
    const [showDepartureSearch, setShowDepartureSearch] = React.useState(false);
    const [showArrivalSearch, setShowArrivalSearch] = React.useState(false);
    const [showExplainMore, setShowExplainMore] = React.useState(false); // Nouvel état pour afficher ExplainMoreComponent
    const [showDisplayData, setShowDisplayData] = React.useState(false); // Nouvel état pour afficher DisplayDataComponent

    // Fonction pour échanger les valeurs départ / arrivée
    const swapLocations = () => {
        console.log('swapLocation !!');
        setDeparture(arrival);
        setArrival(departure);
    };

    // Gestion des clics sur les champs
    const handleDepartureClick = () => {
        setShowDepartureSearch(true);
    };

    const handleArrivalClick = () => {
        setShowArrivalSearch(true);
    };

    // Retour de la recherche d'adresse
    const handleBackFromSearch = () => {
        setShowDepartureSearch(false);
        setShowArrivalSearch(false);
    };

     // Gestion de la sélection d'un lieu dans la recherche
     const handleSelectDeparture = (locationName) => {
        setDeparture(locationName);
        setShowDepartureSearch(false);
    };
    
    const handleSelectArrival = (locationName) => {
        setArrival(locationName);
        setShowArrivalSearch(false);
    };

    const handleClickSuivant = () => {
        setShowExplainMore(true);
    };

    const handleConfirm = () => {
        setShowExplainMore(false);
        setShowDisplayData(true);
    };
    
    // Si on affiche la recherche d'adresse
    if (showDepartureSearch) {
        return <AddressSearchComponent 
            onBackClick={handleBackFromSearch} 
            onSelectLocation={handleSelectDeparture}
            type="Départ"
            // query={departure} 
        />;
    }

    if (showArrivalSearch) {
        return <AddressSearchComponent 
            onBackClick={handleBackFromSearch} 
            onSelectLocation={handleSelectArrival}
            type="Arrivée" 
            // query={arrival} 
        />;            
    }

    // Si on doit afficher DisplayDataComponent
    if (showDisplayData) {
        return <DisplayDataComponent 
                    date={date} 
                    time={time} 
                    departure={departure} 
                    arrival={arrival} 
                    // objectif={}
                    // walkPreference={}
                    // kids={}
                    // animals={}
                    // rythme={}
                    // supp={}
                />;
    }

    // Si on doit afficher ExplainMoreComponent
    if (showExplainMore) {
        return (
            <>
                <ExplainMoreComponent />
                <Button onClick={handleConfirm}>Confirmer</Button>
            </>
        );
    }

    return (
        <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="flex flex-col items-center justify-center min-h-screen"
        >
            {/* Header avec flèche de retour et indicateur de progression */}
            <Box className="header">
                <ArrowBackIosNewIcon className="back-arrow" />
                <Box className="progress-container">
                    <Box className="progress-bar">
                        <Box className="progress-filled"></Box>
                    </Box>
                    <Typography className="progress-text">1/5</Typography>
                </Box>
            </Box>

            <Grid2 className="container">
                <h2 className="title">Où allez-vous ?</h2>

                {/* Date et Heure */}
                <Grid2 className="date-time-container">
                    <Box className="date-field">
                        <Typography className="field-label">Date de départ</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                className='input date-picker'
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                renderInput={(params) => (
                                    <TextField 
                                        {...params} 
                                        fullWidth 
                                        variant="outlined"
                                        InputProps={{
                                            ...params.InputProps,
                                            sx: { border: 'none', outline: 'none' },
                                            disableUnderline: true
                                        }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </Box>
                    
                    <Box className="time-field">
                        <Typography className="field-label">Heure de départ</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker 
                                className='input time-picker'
                                value={time}
                                onChange={(newValue) => setTime(newValue)}
                                ampm={false}
                                renderInput={(params) => (
                                    <TextField 
                                        {...params} 
                                        fullWidth 
                                        variant="outlined"
                                        InputProps={{
                                            ...params.InputProps,
                                            sx: { border: 'none', outline: 'none' },
                                            disableUnderline: true
                                        }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid2>
            
                {/* Départ & Arrivée */}
                <Grid2 className="location-container">
                    {/* Départ */}
                    <Grid2 className="location-field">
                        <Typography className="field-label">Départ</Typography>
                        <div 
                            className="location-input-wrapper"
                            onClick={handleDepartureClick}
                        >
                            <PlaceIcon className='location-icon' />
                            <TextField 
                                className="location-input" 
                                variant="standard" 
                                fullWidth
                                value={departure}
                                placeholder="Choisissez votre lieu de départ"
                                onChange={(e) => setDeparture(e.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    readOnly: true
                                }}
                            />
                        </div>
                    </Grid2>

                    {/* Bouton d'échange */}
                    <IconButton className='swap-icon' onClick={swapLocations}>
                        <SwapVertIcon />
                    </IconButton>

                    {/* Arrivée */}
                    <Grid2 className="location-field">
                        <Typography className="field-label">Arrivée</Typography>
                        <div 
                            className="location-input-wrapper"
                            onClick={handleArrivalClick}
                        >
                            <FmdGoodIcon className='location-icon' />
                            <TextField 
                                className="location-input" 
                                variant="standard" 
                                fullWidth 
                                value={arrival}
                                placeholder="Choisissez votre lieu d'arrivée"
                                onChange={(e) => setArrival(e.target.value)}
                                InputProps={{
                                    disableUnderline: true,
                                    readOnly: true
                                }}
                            />
                        </div>
                    </Grid2>
                </Grid2>
                {arrival && (
                    <Button 
                        variant="contained" 
                        className='btn-suivant'
                        onClick={handleClickSuivant}
                    >
                        Suivant
                    </Button>
                )}
            </Grid2>
        </motion.div>
    );
}