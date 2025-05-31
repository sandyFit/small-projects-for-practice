import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import weatherRoute from './routes/weatherRoute.js';
import cryptoRoute from './routes/cryptoRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so frontend (localhost:5500) can access backend
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(cors()); // ✅ Enable CORS for all origins

app.get('/weather', weatherRoute);
app.get('/getData', cryptoRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
