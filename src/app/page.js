'use client'
import * as React from 'react';

import { useRouter } from 'next/navigation';

import BarNavigation from "./components/BarNavigation";
import { Grid2, Button, Typography, IconButton } from "@mui/material";
import { HomeRounded, LocationOn, StarsRounded, Close } from '@mui/icons-material';

import "./css/BarNavigationCss.css";
import "./css/HomePageCss.css";

export default function HomePage() {
  const router = useRouter(); 

  const handleClick = () => {
    router.push('/AddRidePage'); 
  };

  return (
    <div className="custom-container">
      <div className="home-page">
            <Grid2 className="header">
                <Typography variant="h6">Bonjour Camille,</Typography>
                <Typography variant="subtitle1">Prêt à prendre l&apos;air ?</Typography>
            </Grid2>

            <Grid2 className="main-content">
                <Grid2 
                  variant="contained" 
                  className="main-button"
                  onClick={() => handleClick()}
                  >
                    {/* <CalendarToday className="button-icon" /> */}
                    <LocationOn sx={{marginRight:'10px'}}/>
                    Où allez-vous ?
                </Grid2>
                <Grid2 className="secondary-buttons">
                    <Button variant="outlined" className="secondary-button" startIcon={<HomeRounded />}>Revenir à la maison</Button>
                    <Button variant="outlined" className="secondary-button" startIcon={<StarsRounded />}>Trajets favoris</Button>
                </Grid2>
                <Grid2 className="calendar">
                    {/* <Typography variant="body1">18 Lu</Typography>
                    <Typography variant="body1">19 Ma</Typography>
                    <Typography variant="body1">20 Me</Typography>
                    <Typography variant="body1" className="selected-date">21 Je</Typography>
                    <Typography variant="body1">22 Ve</Typography>
                    <Typography variant="body1">23 Sa</Typography>
                    <Typography variant="body1">24 Di</Typography> */}

                {[
                  { num: 18, day: 'Lu' },
                  { num: 19, day: 'Ma' },
                  { num: 20, day: 'Me' },
                  { num: 21, day: 'Je', selected: true },
                  { num: 22, day: 'Ve' },
                  { num: 23, day: 'Sa' },
                  { num: 24, day: 'Di' }
                ].map((item) => (
                  <div key={item.num} className={`calendar-day ${item.selected ? 'selected-date' : ''}`}>
                    <div className="day-number">{item.num}</div>
                    <div className="day-name">{item.day}</div>
                  </div>
                ))}
                </Grid2>
                <Grid2 className="scheduled-rides">
                    <Typography variant="body2">Mes courses programmées</Typography>
                    <Grid2 className="no-rides">
                        <Typography variant="body2">Aucune course prévue aujourd&apos;hui.</Typography>
                        <Typography variant="body2">Vous trouverez ici l&apos;ensemble des informations sur vos trajets.</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
        </div>
        <BarNavigation />
    </div>
  );
}
