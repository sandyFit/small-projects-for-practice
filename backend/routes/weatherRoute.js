import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
const router = express.Router();

dotenv.config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

router.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`);
        const data = await response.json();

        if (data.error) {
            return res.status(404).json({ error: data.error.message });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

export default router;
