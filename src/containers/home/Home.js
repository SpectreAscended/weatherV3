import React, { useState, useEffect } from 'react';
import './home.css';
import Left from '../left/Left';
import Right from '../right/Right';
import Mobile from '../mobile/Mobile';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API;

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  // const [coords, setCoords] = useState(null);

  useEffect(() => {
    const loadedList = JSON.parse(localStorage.getItem('searchList'));
    if (loadedList) {
      setSearchList(loadedList);
      setDataIsLoaded(true);
    }
  }, []);

  const searchCityHandler = async query => {
    try {
      if (query === weatherData.query && !isError) return;
      setIsError(false);
      setIsLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
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
        timezone: data.timezone,
        sunrise: data.sys.sunrise + data.timezone,
        sunset: data.sys.sunset + data.timezone,
      });
      console.log(data);
      searchListHandler(searchList, query);
      setIsLoading(false);
      if (!dataIsLoaded) {
        setDataIsLoaded(true);
      }
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      setDataIsLoaded(false);
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

  // const detectLocationHandler = () => {
  //   const showPosition = position => {
  //     const { latitude: lat, longitude: long } = position.coords;
  //     setCoords({ lat: lat, long: long });
  //   };
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // };
  console.log(weatherData);
  return (
    <>
      <div className="desktop">
        <main className="main">
          <Left
            weather={weatherData}
            loading={isLoading}
            error={isError}
            loaded={dataIsLoaded}
          />
          <Right
            queryResult={searchCityHandler}
            weather={weatherData}
            error={isError}
            searchList={searchList}
            loaded={dataIsLoaded}
            // detectLocation={detectLocationHandler}
          />
        </main>
      </div>
      <div className="mobile">
        <Mobile
          weather={weatherData}
          loading={isLoading}
          loaded={dataIsLoaded}
          error={isError}
          queryResult={searchCityHandler}
          searchList={searchList}
        />
      </div>
    </>
  );
};

export default Home;
