'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';

import "../css/BarNavigationCss.css";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function BarNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); 

  // Fonction pour gérer la navigation
  const handlePlusClick = () => {
    router.push('/AddRidePage'); 
  };

  return (
    <Box className="NavBox">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="bottom-navigation"
      >
        <BottomNavigationAction className="nav-icon" label="Accueil" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction className="nav-icon" label="Trajet" icon={<LocationOnOutlinedIcon />} />
        <BottomNavigationAction className='main-nav-icon' onClick={handlePlusClick} icon={<AddCircleOutlineOutlinedIcon />} />
        <BottomNavigationAction className="nav-icon" label="Chat" icon={<ChatOutlinedIcon />} />
        <BottomNavigationAction className="nav-icon" label="Compte" icon={<InsertEmoticonOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}