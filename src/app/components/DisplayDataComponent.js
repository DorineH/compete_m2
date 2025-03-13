import React from 'react';

const DisplayDataComponent = ({ date, time, departure, arrival, objectif, walkPreference, kids, animals, rythme, supp }) => {
    return (
        <div>
            <h2>Résumé des données</h2>
            <p>Date: {date.format('DD/MM/YYYY')}</p>
            <p>Heure: {time.format('HH:mm')}</p>
            <p>Départ: {departure}</p>
            <p>Arrivée: {arrival}</p>
        </div>
    );
};

export default DisplayDataComponent;
