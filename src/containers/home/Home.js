import React, { useState } from 'react';
import './home.css';
import Left from '../left/Left';

import Input from '../../components/input/Input';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});

  const searchCityHandler = async query => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d9819c90d382ddc65dcc500f8e98498f&units=metric`
      );

      if (!res.ok)
        throw new Error(
          `Couldn't find your city.  Please check your spelling at try again.`
        );

      const data = await res.json();

      console.log(data);

      setWeatherData({
        currentCity: data.name,
        currentTemp: data.main.temp,
        currentTempFeelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure / 100,
        windDir: data.wind.deg,
        windSpeed: Math.round(data.wind.speed * 3.2),
        windGust: Math.round(data.wind.gust * 3.2),
        visibility: data.visibility / 1000,
        currentDescription: data.weather[0].description,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(weatherData);

  return (
    <main className="main">
      <Input queryResult={searchCityHandler} />
      <Left weather={weatherData} />
    </main>
  );
};

export default Home;
