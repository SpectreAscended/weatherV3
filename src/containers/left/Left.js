import React from 'react';
import getTime from '../../utilities/getTime/getTime';
import classes from './left.module.css';
import MiniDisplay from '../../components/card/MiniDisplay';

const Left = ({ weather, loading, error }) => {
  const weatherObject = () => {
    return (
      <>
        <h2>{weather.currentTemp}°</h2>
        <div className={classes['current-city']}>
          <h1>{weather.currentCity}</h1>
          <p className={classes['current-description']}>
            {weather.currentDescription}
          </p>
        </div>
        <p className={classes['feels-like']}>
          Feels like {weather.currentTempFeelsLike}°
        </p>
        <p className={classes.time}>{getTime(weather.time)}</p>
      </>
    );
  };

  let content;

  if (loading) {
    content = <p className={classes.loading}>Loading...</p>;
  } else if (error) {
    content = (
      <p className={classes.loading}>
        City not found. Please check your spelling and try again.
      </p>
    );
  } else if (weather.currentCity) {
    content = weatherObject();
  } else {
    content = <p className={classes.loading}>Please enter a city</p>;
  }

  return (
    <div className={classes.left}>
      <MiniDisplay>{content}</MiniDisplay>
    </div>
  );
};

export default Left;
