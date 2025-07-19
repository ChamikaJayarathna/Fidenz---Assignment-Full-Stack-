import axios from "axios";
import weatherCache from "../schema/WeatherSchema.js";

const CACHE_DURATION = 5 * 60 * 1000;

const fetchWeatherData = async (cityCodesKey) => {
  try {
    const cached = await weatherCache.findOne({ cityCodesKey });
    const now = Date.now();

    if (cached && now - cached.timestamp < CACHE_DURATION) {
      console.log("Serving weather data from cache");
      return cached.data;
    }

    // const response = await axios.get(`http://api.openweathermap.org/data/2.5/group?id=${cityCodesKey}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);
    const url = `http://api.openweathermap.org/data/2.5/group?id=${cityCodesKey}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`;
    console.log("Requesting URL:", url);
    const response = await axios.get(url);

    const weatherData = response.data;

    await weatherCache.findOneAndUpdate(
      { cityCodesKey },
      {
        data: weatherData,
        timestamp: now
      },
      { upsert: true }
    );

    console.log("Fetched fresh weather data from API");
    return weatherData;

  } catch (error) {
    console.log("Error fetching weather data:", error.message);
    throw new Error("Failed to fetch weather data");
  }
};

export default fetchWeatherData;
