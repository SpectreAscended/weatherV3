import React, { useState } from 'react';
import './home.css';
import Left from '../left/Left';
import Right from '../right/Right';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchCityHandler = async query => {
    try {
      setIsError(false);
      setIsLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d9819c90d382ddc65dcc500f8e98498f&units=metric`
      );

      if (!res.ok)
        throw new Error(
          `Couldn't find your city.  Please check your spelling at try again.`
        );

      const data = await res.json();

      setIsLoading(false);

      console.log(data);

      setWeatherData({
        currentCity: data.name,
        currentTemp: Math.round(data.main.temp),
        currentTempFeelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure / 100,
        windDir: data.wind.deg,
        windSpeed: Math.round(data.wind.speed * 3.6),
        windGust: Math.round(data.wind.gust * 3.6),
        visibility: data.visibility / 1000,
        currentDescription: data.weather[0].description,
        cloudCover: data.clouds.all,
        rain: data?.rain?.['1h'],
        snow: data?.snow?.['1h'] / 10,
        time: data.dt,
      });
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      console.error(err.message);
    }
  };

  console.log(weatherData);

  return (
    <main className="main">
      <Left weather={weatherData} loading={isLoading} error={isError} />
      <Right queryResult={searchCityHandler} />
    </main>
  );
};

export default Home;
