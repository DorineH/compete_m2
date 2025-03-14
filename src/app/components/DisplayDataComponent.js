import dayjs from 'dayjs';
import React from 'react';

const DisplayDataComponent = ({ date, time, departure, arrival }) => {
    return (
        <div>
            <h2>Résumé des données</h2>
            <p>Date: {dayjs(date).format('DD/MM/YYYY')}</p>
            <p>Time: {dayjs(time).format('HH:mm')}</p>
            <p>Departure: {departure}</p>
            <p>Arrival: {arrival}</p>
        </div>
    );
};

export default DisplayDataComponent;
