import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetchWeatherData from '../services/weather-service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const citiesPath = path.join(__dirname, '../data/cities.json');
const citiesData = JSON.parse(readFileSync(citiesPath));
const cityCodes = citiesData.List.map(city => city.CityCode).join(',');

export const getWeather = async (req, res) => {
    try {
        const data = await fetchWeatherData(cityCodes);
        const result = data.list.map(city => ({
            name: city.name,
            description: city.weather[0].main,
            temp: city.main.temp
        }));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};