import React from 'react';
import WeatherDetails from '../weatherDetails/WeatherDetails';
import classes from './MobileWeatherDetails.module.css';

const MobileWeatherDetails = ({ weather, loading, error, loaded }) => {
  return (
    <div className={classes['mobile-weather-details']}>
      <WeatherDetails
        weather={weather}
        loading={loading}
        loaded={loaded}
        error={error}
      />
    </div>
  );
};

export default MobileWeatherDetails;
