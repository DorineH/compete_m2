'use client';

import React, { createContext, useState, useEffect } from 'react';

export const RideContext = createContext();

const fetchRideInfo = async () => {
    const response = await fetch('/api/rideInfo');
    if (!response.ok) {
        throw new Error('Failed to fetch ride info');
    }
    return response.json();
};

const saveRideInfo = async (rideInfo) => {
    try {
        const response = await fetch('/api/rideInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rideInfo)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Failed to save ride info:', errorText);
            throw new Error('Failed to save ride info');
        }
    } catch (error) {
        console.error('Error saving ride info:', error);
        throw error;
    }
};

export const RideProvider = ({ children }) => {
    const [rideInfo, setRideInfo] = useState({
        date: '',
        time: '',
        departure: '',
        arrival: '',
        objective: '',
        walkingPreference: '',
        childPresence: '',
        petPresence: '',
        walkingPace: '',
        additionalInfo: []
    });

    useEffect(() => {
        const loadRideInfo = async () => {
            try {
                const data = await fetchRideInfo();
                setRideInfo(data);
            } catch (error) {
                console.error(error);
            }
        };
        loadRideInfo();
    }, []);

    useEffect(() => {
        const saveData = async () => {
            try {
                await saveRideInfo(rideInfo);
            } catch (error) {
                console.error(error);
            }
        };
        saveData();
    }, [rideInfo]);

    return (
        <RideContext.Provider value={{ rideInfo, setRideInfo }}>
            {children}
        </RideContext.Provider>
    );
};