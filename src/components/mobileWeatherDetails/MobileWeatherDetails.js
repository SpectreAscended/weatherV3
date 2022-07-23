import React from 'react';
import WeatherDetails from '../weatherDetails/WeatherDetails';
import classes from './MobileWeatherDetails.module.css';

const MobileWeatherDetails = ({ weather, loading, error }) => {
  return (
    <div className={classes['mobile-weather-details']}>
      <h3>Weather Details</h3>
      <WeatherDetails weather={weather} loading={loading} error={error} />
    </div>
  );
};

export default MobileWeatherDetails;
