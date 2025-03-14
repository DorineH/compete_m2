import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'data', 'rideInfo.json');

    if (req.method === 'POST') {
        const newRide = req.body;

        let existingData = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                existingData = JSON.parse(fileContent);
                if (!Array.isArray(existingData)) {
                    existingData = []; // S'assurer que c'est un tableau
                }
            } catch (error) {
                console.error('Erreur de lecture JSON:', error);
                existingData = []; // En cas d'erreur, on part d'un tableau vide
            }
        }

        
        // Vérifier si la dernière entrée est incomplète et la mettre à jour
        if (existingData.length > 0) {
            let lastRide = existingData[existingData.length - 1];

            // Vérifier si la dernière entrée a déjà toutes les informations
            const hasFullInfo = lastRide.objective && lastRide.walkingPreference;

            if (!hasFullInfo) {
                existingData[existingData.length - 1] = { ...lastRide, ...newRide };
            } else {
                existingData.push(newRide); // Si la dernière entrée est complète, on ajoute une nouvelle
            }
        } else {
            existingData.push(newRide); // Si aucune entrée existante, on ajoute la première
        }

        // Sauvegarde dans le fichier JSON
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

        res.status(200).json({ message: 'Ride info saved successfully' });

    } else if (req.method === 'GET') {
        // if (fs.existsSync(filePath)) {
        //     const data = fs.readFileSync(filePath, 'utf-8').trim();
        //     try {
        //         const parsedData = JSON.parse(data);
        //         res.status(200).json(Array.isArray(parsedData) ? parsedData : []);
        //     } catch (error) {
        //         console.error('Erreur de parsing JSON:', error);
        //         res.status(200).json([]); // Retourne un tableau vide en cas d'erreur
        //     }
        // } else {
        //     res.status(200).json([]);
        // }

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8').trim(); // Supprime les espaces inutiles
        
            if (data) { // Vérifie si le fichier contient quelque chose
                try {
                    const parsedData = JSON.parse(data);
                    res.status(200).json(Array.isArray(parsedData) ? parsedData : []);
                } catch (error) {
                    console.error('Erreur de parsing JSON:', error);
                    res.status(200).json([]); // Retourne un tableau vide si parsing échoue
                }
            } else {
                console.warn("Fichier JSON vide, renvoi d'un tableau vide.");
                res.status(200).json([]); // Retourne un tableau vide si le fichier est vide
            }
        } else {
            res.status(200).json([]); // Retourne un tableau vide si le fichier n'existe pas
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
