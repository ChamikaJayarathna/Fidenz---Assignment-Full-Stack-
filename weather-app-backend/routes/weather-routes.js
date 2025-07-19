import express from "express";
import { getWeather } from "../controller/weather-controller.js";

const router = express.Router();

router.get('/get-weather', getWeather);

export default router;