import React from 'react';
import { Grid2, Button, MenuItem, Select, TextField, Typography, Chip } from '@mui/material';
import '../css/AddRideCss.css';

const ExplainMoreComponent = () => {
    return (
        <Grid2 className="container">
            <Typography variant="h6" className="title">Dites-nous en plus</Typography>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Objectif</Typography>
                <TextField label="Objectif" variant="outlined" fullWidth className="input-field" />
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Préférences de marche</Typography>
                <Select label="Préférence" variant="outlined" fullWidth className="input-field">
                    <MenuItem value="Solo">Solo</MenuItem>
                    <MenuItem value="Duo">Duo</MenuItem>
                    <MenuItem value="Groupe">Groupe</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Présence d&apos;enfant</Typography>
                <Select label="Enfant ?" variant="outlined" fullWidth className="input-field">
                    <MenuItem value="Oui">Oui</MenuItem>
                    <MenuItem value="Non">Non</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Présence d&apos;un animal de compagnie</Typography>
                <Select label="Animaux ?" variant="outlined" fullWidth className="input-field">
                    <MenuItem value="Chien">Chien</MenuItem>
                    <MenuItem value="Chat">Chat</MenuItem>
                    <MenuItem value="Autre">Autre</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Rythme de marche</Typography>
                <Select label="Rythme de marche" variant="outlined" fullWidth className="input-field">
                    <MenuItem value="Lent">Lent</MenuItem>
                    <MenuItem value="Moyen">Moyen</MenuItem>
                    <MenuItem value="Rapide">Rapide</MenuItem>
                </Select>
            </Grid2>
            
            <Grid2 className="form-group">
                <Typography variant="subtitle1">Information supplémentaires</Typography>
                <Grid2 className="chip-container">
                    <Chip label="Poussette bébé" className="chip" />
                    <Chip label="Entre filles" className="chip" />
                    <Chip label="Valise" className="chip" />
                    <Chip label="Marcher avec de la musique" className="chip" />
                    <Chip label="Shopping" className="chip" />
                    <Button variant="contained" className="add-button">+</Button>
                </Grid2>
            </Grid2>
            
            <Button variant="contained" color="primary" fullWidth className="submit-button">Confirmer</Button>
        </Grid2>
    );
};

export default ExplainMoreComponent;