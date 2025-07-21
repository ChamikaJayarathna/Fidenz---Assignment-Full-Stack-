import Card from '../components/Card';
import cardData from '../assets/data.json';
import { useEffect, useState } from 'react';
import apiRequest from '../lib/apiRequest';

const Home = () => {

  const [weatherDate, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    try {
    
      const response = await apiRequest.get('/weather/get-weather');
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  },[]);

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-md lg:max-w-5xl mx-auto mt-10 mb-20">
      {cardData.map((data, index) => (
        <Card key={index} {...data}/>
      ))}
    </div>
  );
}

export default Home;