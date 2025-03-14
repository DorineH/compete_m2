import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'data', 'rideInfo.json');

    if (req.method === 'POST') {
        // const rideInfo = req.body;
        // // Ensure the 'data' directory exists
        // if (!fs.existsSync(path.dirname(filePath))) {
        //     fs.mkdirSync(path.dirname(filePath), { recursive: true });
        // }
        // // Save the data to the JSON file
        // fs.writeFileSync(filePath, JSON.stringify(rideInfo, null, 2));
        // res.status(200).json({ message: 'Ride info saved successfully' });

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
            }
        }

        // Ajouter la nouvelle course au tableau
        existingData.push(newRide);

        // Sauvegarde dans le fichier JSON
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

        res.status(200).json({ message: 'Ride info saved successfully' });

    } else if (req.method === 'GET') {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath);
            res.status(200).json(JSON.parse(data));
        } else {
            // res.status(200).json({
            //     date: '',
            //     time: '',
            //     departure: '',
            //     arrival: '',
            //     objective: '',
            //     walkingPreference: '',
            //     childPresence: '',
            //     petPresence: '',
            //     walkingPace: '',
            //     additionalInfo: []
            // });
            res.status(200).json([]);
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
