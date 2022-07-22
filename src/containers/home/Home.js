import React, { useState, useEffect } from 'react';
import './home.css';
import Left from '../left/Left';
import Right from '../right/Right';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [savedDataIsLoaded, setSavedDataIsLoaded] = useState(false);

  useEffect(() => {
    const loadedList = JSON.parse(localStorage.getItem('searchList'));
    if (loadedList) {
      setSearchList(loadedList);
      setSavedDataIsLoaded(true);
    }
  }, []);

  const searchCityHandler = async query => {
    try {
      if (query === weatherData.query && !isError) return;
      setIsError(false);
      setIsLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d9819c90d382ddc65dcc500f8e98498f&units=metric`
      );

      if (!res.ok)
        throw new Error(
          `Couldn't find your city.  Please check your spelling and try again.`
        );

      const data = await res.json();

      setWeatherData({
        query: query,
        currentCity: data.name,
        currentTemp: Math.round(data.main.temp),
        currentTempFeelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure / 10,
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

      searchListHandler(searchList, query);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      console.error(err.message);
    }
  };

  const searchListHandler = (list, query) => {
    const [...queryList] = [...list];
    if (queryList.includes(query)) {
      const index = queryList.indexOf(query);
      queryList.splice(index, 1);
    }
    if (queryList.length > 4) {
      queryList.pop();
    }
    setSearchList([query, ...queryList]);
  };

  return (
    <main className="main">
      <Left weather={weatherData} loading={isLoading} error={isError} />
      <Right
        queryResult={searchCityHandler}
        weather={weatherData}
        error={isError}
        searchList={searchList}
        loaded={savedDataIsLoaded}
      />
    </main>
  );
};

export default Home;
