import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { RideContext } from './RideContextSave';
import { Grid2, Button, MenuItem, Select, TextField, Typography, Chip } from '@mui/material';
import '../css/AddRideCss.css';

const ExplainMoreComponent = () => {
    const { rideInfo, setRideInfo } = React.useContext(RideContext);
    const [objective, setObjective] = React.useState('');
    const [walkingPreference, setWalkingPreference] = React.useState('');
    const [childPresence, setChildPresence] = React.useState('');
    const [petPresence, setPetPresence] = React.useState('');
    const [walkingPace, setWalkingPace] = React.useState('');
    const [additionalInfo, setAdditionalInfo] = React.useState([]);
    const navigate = useNavigate();

    const handleNext = () => {
        setRideInfo({
            ...rideInfo,
            objective,
            walkingPreference,
            childPresence,
            petPresence,
            walkingPace,
            additionalInfo
        });
        navigate('/');
    };

    return (
        <Grid2 className="container-explain-more">
            <Typography variant="h6" className="title">Dites-nous en plus</Typography>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Objectif</Typography>
                <TextField 
                    label="Objectif" 
                    variant="outlined" 
                    fullWidth 
                    className="input-field" 
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                />
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Préférences de marche</Typography>
                <Select 
                    label="Préférence" 
                    variant="outlined" 
                    fullWidth 
                    className="input-field"
                    value={walkingPreference}
                    onChange={(e) => setWalkingPreference(e.target.value)}
                >
                    <MenuItem value="Solo">Solo</MenuItem>
                    <MenuItem value="Duo">Duo</MenuItem>
                    <MenuItem value="Groupe">Groupe</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Présence d&apos;enfant</Typography>
                <Select 
                    label="Enfant ?" 
                    variant="outlined" 
                    fullWidth 
                    className="input-field"
                    value={childPresence}
                    onChange={(e) => setChildPresence(e.target.value)}
                >
                    <MenuItem value="Oui">Oui</MenuItem>
                    <MenuItem value="Non">Non</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Présence d&apos;un animal de compagnie</Typography>
                <Select 
                    label="Animaux ?" 
                    variant="outlined" 
                    fullWidth 
                    className="input-field"
                    value={petPresence}
                    onChange={(e) => setPetPresence(e.target.value)}
                >
                    <MenuItem value="Chien">Chien</MenuItem>
                    <MenuItem value="Chat">Chat</MenuItem>
                    <MenuItem value="Autre">Autre</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Rythme de marche</Typography>
                <Select 
                    label="Rythme de marche" 
                    variant="outlined" 
                    fullWidth 
                    className="input-field"
                    value={walkingPace}
                    onChange={(e) => setWalkingPace(e.target.value)}
                >
                    <MenuItem value="Lent">Lent</MenuItem>
                    <MenuItem value="Moyen">Moyen</MenuItem>
                    <MenuItem value="Rapide">Rapide</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Information supplémentaires</Typography>
                <Grid2 className="chip-container">
                    <Chip label="Poussette bébé" className="chip" onClick={() => setAdditionalInfo([...additionalInfo, 'Poussette bébé'])} />
                    <Chip label="Entre filles" className="chip" onClick={() => setAdditionalInfo([...additionalInfo, 'Entre filles'])}/>
                    <Chip label="Valise" className="chip" onClick={() => setAdditionalInfo([...additionalInfo, 'Valise'])}/>
                    <Chip label="Marcher avec de la musique" className="chip" onClick={() => setAdditionalInfo([...additionalInfo, 'Marcher avec de la musique'])}/>
                    <Chip label="Shopping" className="chip" onClick={() => setAdditionalInfo([...additionalInfo, 'Shopping'])}/>
                    <Chip label="Randonnées en nature" className="chip" onClick={() => setAdditionalInfo([...additionalInfo, 'Randonnées en nature'])}/>
                    {/* <Button variant="contained" className="add-button">+</Button> */}
                </Grid2>
            </Grid2>
            
            <Button variant="contained" fullWidth className="submit-button"  onClick={handleNext}>Suivant</Button>
        </Grid2>
    );
};

const App = () => {
    return (
        <Router>
            <ExplainMoreComponent />
        </Router>
    );
};

export default App;