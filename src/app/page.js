'use client'
import * as React from 'react';

import { useRouter } from 'next/navigation';

import BarNavigation from "./components/BarNavigation";
import { Grid2, Button, Typography, IconButton } from "@mui/material";
import { HomeRounded, LocationOn, StarsRounded, Close } from '@mui/icons-material';
import { RideContext } from './components/RideContextSave.js';

import "./css/BarNavigationCss.css";
import "./css/HomePageCss.css";
import RideInfoDisplay from './components/RideInfoDisplay';

export default function HomePage() {
  const router = useRouter(); 
  const { rideInfo } = React.useContext(RideContext);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleClick = () => {
    router.push('/AddRidePage'); 
  };

  const getCalendarDays = () => {
    const today = new Date();
    const days = [];
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        num: date.getDate(),
        day: date.toLocaleDateString('fr-FR', { weekday: 'short' }),
        selected: date.toDateString() === selectedDate.toDateString()
      });
    }
    return days;
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const isRideInfoEmpty = Object.values(rideInfo).every(value => value === '' || (Array.isArray(value) && value.length === 0));

  return (
    <div className="custom-container">
      <div className="home-page">
            <Grid2 className="header">
                <Typography variant="h6">Bonjour Camille,</Typography>
                <Typography variant="subtitle1">Prête à prendre l&apos;air ?</Typography>
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
                  {getCalendarDays().map((item) => (
                    <div 
                      key={item.num} 
                      className={`calendar-day ${item.selected ? 'selected-date' : ''}`}
                      onClick={() => handleDayClick(new Date(new Date().setDate(item.num)))}
                    >
                      <div className="day-number">{item.num}</div>
                      <div className="day-name">{item.day}</div>
                    </div>
                  ))}
                </Grid2>
                <Grid2 className="scheduled-rides">
                    <Typography variant="body2">Mes courses programmées</Typography>
                    {isRideInfoEmpty ? (
                        <Grid2 className="no-rides">
                            <Typography variant="body2">Aucune course prévue aujourd&apos;hui.</Typography>
                            <Typography variant="body2">Vous trouverez ici l&apos;ensemble des informations sur vos trajets.</Typography>
                        </Grid2>
                    ) : (
                      <div>
                        <RideInfoDisplay />
                      </div>
                    )}
                </Grid2>
            </Grid2>
        </div>
        <BarNavigation />
    </div>
  );
}
