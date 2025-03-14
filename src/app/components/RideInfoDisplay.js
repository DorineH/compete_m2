import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const RideInfoDisplay = () => {
    const [rideInfo, setRideInfo] = useState([]);
// Version une seul donnée dans le json
    // useEffect(() => {
    //     const fetchRideInfo = async () => {
    //         try {
    //             const response = await fetch('/api/rideInfo');
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 console.log('Fetched data:', data);
    //                 setRideInfo(data);
    //             } else {
    //                 console.error('Failed to fetch ride info');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching ride info:', error);
    //         }
    //     };

    //     fetchRideInfo();
    // }, []);
    useEffect(() => {
        fetch('/api/rideInfo')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRides(data); // Mettre à jour le state avec plusieurs trajets
                }
            })
            .catch(error => console.error('Error fetching ride info:', error));
    }, []);
    
    const data = rideInfo;

    return (
        <Paper
            elevation={1}
            sx={{
                p: 2,
                borderRadius: 3,
                bgcolor: '#f8f9fc',
                maxWidth: 400,
                mx: 'auto'
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 2.5
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {/* Départ */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 500, mr: 1 }}>
                                {data?.time}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 1 }}>
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        bgcolor: '#5468ff',
                                        mb: 0.5
                                    }}
                                />
                                <Box
                                    sx={{
                                        width: 2,
                                        height: 30,
                                        bgcolor: '#5468ff'
                                    }}
                                />
                            </Box>
                            <Typography sx={{ fontWeight: 600 }}>
                                {data?.departure}
                            </Typography>
                        </Box>

                        {/* Arrivée */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 500, mr: 1 }}>
                                12:40
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 1 }}>
                                <Box
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        bgcolor: '#5468ff'
                                    }}
                                />
                            </Box>
                            <Typography sx={{ fontWeight: 600 }}>
                                {data?.arrival}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Informations de trajet */}
                    <Box sx={{ textAlign: 'right', color: '#454545' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 0.5 }}>
                            {data?.objective}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
                            {data?.walkingPreference}
                        </Typography>
                    </Box>
                </Box>

                {/* Additional Info */}
                <Box sx={{ mt: 2 }}>
                    <Typography sx={{ fontWeight: 600, mb: 1 }}>
                        Information:
                    </Typography>
                    {data?.additionalInfo?.map((info, index) => (
                        <Typography key={index} sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
                            {info}
                        </Typography>
                    ))}
                </Box>

                {/* Boutons d'action */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2
                    }}
                >
                    {[MenuBookIcon, ChatBubbleOutlineIcon, ShareIcon, LightbulbOutlinedIcon].map(
                        (IconComponent, index) => (
                            <Box
                                key={index}
                                sx={{
                                    bgcolor: '#e0e4ff',
                                    color: '#5468ff',
                                    width: '22%',
                                    height: 40,
                                    borderRadius: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s',
                                    '&:hover': {
                                        bgcolor: '#d0d6ff'
                                    }
                                }}
                            >
                                <IconComponent />
                            </Box>
                        )
                    )}
                </Box>
            </Box>
        </Paper>
    );
};

export default RideInfoDisplay;