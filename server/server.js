const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const connectToDatabase = require('./Apatheia');
import "dotenv/config"
// const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Middleware that logs requests
const logger = (req, res, next) => {
    const time = new Date();

    console.log(
    `${time.toLocaleTimeString()}`
    );
    console.log(`Request was made at${req.method} ${req.url}`);
    console.log(1);
    next();
};

app.use((req, res, next) => {
    // Set a very permissive CSP header
    res.setHeader('Content-Security-Policy', 'default-src *');
    next();
});
app.use(express.urlencoded({ extended: true }));

app.get('/api/pokemonPeople', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('pokemonPeople');
        const pokemonPeople = await collection.find().toArray();
        console.log('Fetched PokemonPeople:', pokemonPeople);
        res.json(pokemonPeople);
    } catch (error) {
        console.error('Error fetching PokemonPeople:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});






    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
