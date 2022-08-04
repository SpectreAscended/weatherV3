import React from 'react';
import classes from './WeatherDetails.module.css';
import useWindDirection from '../../utilities/windDirection/useWindDirection';

const WeatherDetails = ({ weather, loaded, error }) => {
  const windDirection = useWindDirection(weather.windDir);
  const displayWeatherDetails = () => {
    return (
      <ul className={classes.list}>
        <li>
          <span>Current temp:</span> <span>{weather.currentTemp}°</span>
        </li>
        <li>
          <span>Feels like:</span> <span>{weather.currentTempFeelsLike}°</span>
        </li>
        <li>
          <span>Humidity:</span>
          <span>{weather.humidity}%</span>
        </li>
        <li>
          <span>Pressure:</span>
          <span>{weather.pressure} kPa</span>
        </li>
        <li>
          <span>Wind: </span>
          <span className={classes['wind-dir']}>
            <span style={{ fontWeight: '700' }}> {windDirection} </span>
            &nbsp;
            {weather.windSpeed} km/h
          </span>
        </li>
        {weather.windGust ? (
          <li>
            <span>Gusting:</span>
            <span>{weather.windGust} km/h</span>
          </li>
        ) : (
          ''
        )}
        {weather.rain ? (
          <li>
            <span>Rain:</span>
            <span>{weather.rain}mm</span>
          </li>
        ) : (
          ''
        )}
        {weather.snow ? (
          <li>
            <span>Snow:</span>
            <span>{weather.rain}cm</span>
          </li>
        ) : (
          ''
        )}
        <li>
          <span>Visiblity:</span>
          <span>{weather.visibility} km</span>
        </li>
        <li>
          <span>Cloud cover:</span>
          <span>{weather.cloudCover} %</span>
        </li>
      </ul>
    );
  };

  let content;

  if (error) content = '';
  else if (loaded) {
    content = displayWeatherDetails();
  } else {
    content = '';
  }

  return (
    <section className={classes['section__weather-details']}>
      <div className={classes['weather-details--container']}>
        <h3 className={classes['heading-current-weather']}>Current weather</h3>
        {content}
      </div>
    </section>
  );
};

export default WeatherDetails;
