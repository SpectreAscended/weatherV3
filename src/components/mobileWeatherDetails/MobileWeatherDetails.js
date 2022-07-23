import React from 'react';
import WeatherDetails from '../weatherDetails/WeatherDetails';
import classes from './MobileWeatherDetails.module.css';

const MobileWeatherDetails = ({ weather, loading, error }) => {
  return (
    <div className={classes['mobile-weather-details']}>
      <WeatherDetails weather={weather} loading={loading} error={error} />
    </div>
  );
};

export default MobileWeatherDetails;
