import express from 'express';
import "dotenv/config";
import DBConnection from './config/DBConnection.js';
import weatherRoutes from './routes/weather-routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
    DBConnection();
    console.log(`Server is running on PORT ${PORT}`);
});