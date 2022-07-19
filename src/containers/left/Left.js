import React from 'react';
import classes from './left.module.css';

const Left = ({ weather }) => {
  console.log(weather);
  return (
    <div className={classes.left}>
      <ul>
        <li>{weather.currentCity}</li>
        <li>{weather.currentTemp}°</li>
        <li>{weather.currentTempFeelsLike}°</li>
        <li>{weather.humidity}%</li>
        <li>{weather.pressure} kps</li>
        <li>{weather.windDir}</li>
      </ul>
    </div>
  );
};

export default Left;
