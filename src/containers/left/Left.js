import React from 'react';
import WindDirection from '../../utilities/windDirection/WindDirection';
import getTime from '../../utilities/getTime/getTime';
import classes from './left.module.css';
import Card from '../../components/card/Card';

const Left = ({ weather, loading, error }) => {
  console.log(weather);

  const weatherObject = () => {
    return (
      <ul>
        <li>{weather.currentCity}</li>
        <li>{weather.currentTemp}°</li>
        <li>Feels like {weather.currentTempFeelsLike}°</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Pressure: {weather.pressure} kps</li>
        <li>
          Wind speed: &nbsp;
          <WindDirection windDir={weather.windDir} /> {weather.windSpeed} kph
        </li>
        {weather.windGust ? <li>Gusting: {weather.windGust} kph</li> : ''}
        <li>{getTime(weather.time)}</li>
      </ul>
    );
  };

  let content;

  if (loading) content = <p>Loading...</p>;
  else if (error)
    content = (
      <p>Cannot find city. Please check your spelling and try again.</p>
    );
  else if (weather.currentCity) {
    content = weatherObject();
  } else {
    content = <p>Please enter a city</p>;
  }

  return (
    <div className={classes.left}>
      <Card>{content}</Card>
    </div>
  );
};

export default Left;
