# Fidenz Technologies - Asimat Full Stack

A modern **MERN stack** full stack Weather web application built using:

- **MongoDB** for database  
- **Express.js** & **Node.js** for backend REST API  
- **React** with Vite for frontend UI  
- Integration with **OpenWeatherMap API** (currently disabled due to external API issues)  

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation & Setup](#installation--setup)  
- [Environment Variables](#environment-variables)  
- [Running the Application](#running-the-application)  
- [API Notes](#api-notes)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## Project Overview

This project demonstrates a fully functional MERN stack weather web app. The frontend React app runs separately with Vite development server, while the backend Node.js Express server handles API requests and database operations. The frontend consumes backend APIs and integrates with external services like OpenWeatherMap for weather data.

> ⚠️ **Note:** The OpenWeatherMap API is currently unavailable due to external service issues. For now, the frontend loads data using mock/dummy weather data.

---

## Features

- Responsive React frontend with clean UI  
- RESTful backend API built with Express  
- MongoDB database integration  
- Environment-based configuration for API keys  
- Dummy data fallback for OpenWeatherMap API issues  
- Separate development servers for frontend and backend  

---

## Prerequisites

- Node.js v14+ and npm  
- MongoDB instance (cloud)  
- OpenWeatherMap API key 

---

## Installation & Setup

1. **Download or clone the repo**
2. **Frontend dependencies**
    cd weather-app-frontend
    npm install
3. **Backend dependencies**
    cd weather-app-backend
    npm install
4. **Set up environment variables**
5. Run the Frontend on "npm run dev" and Backend on "node server.js"
