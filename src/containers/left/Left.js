import React from 'react';
import WindDirection from '../../utilities/windDirection/WindDirection';
import classes from './left.module.css';
import Card from '../../components/card/Card';

const Left = ({ weather }) => {
  console.log(weather);
  return (
    <div className={classes.left}>
      <Card>
        <ul>
          <li>{weather.currentCity}</li>
          <li>{weather.currentTemp}°</li>
          <li>{weather.currentTempFeelsLike}°</li>
          <li>{weather.humidity}%</li>
          <li>{weather.pressure} kps</li>
          <li>
            <WindDirection windDir={weather.windDir} /> {weather.windSpeed} kph
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Left;
