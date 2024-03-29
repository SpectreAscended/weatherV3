import React from 'react';
import classes from './Left.module.css';
import MiniDisplay from '../../components/card/MiniDisplay';
import Footer from '../../components/footer/Footer';
import useGetTime from '../../utilities/getTime/useGetTime';

const Left = ({ weather, loading, error, enterCityHandler, loaded }) => {
  const reportTime = useGetTime(weather.time);

  const weatherDetails = () => {
    return (
      <>
        <div className={classes['current-temp']}>
          <h2>{weather.currentTemp}°</h2>
          <p className={classes['feels-like']}>
            Feels like {weather.currentTempFeelsLike}°
          </p>
        </div>
        <div className={classes['current-city']}>
          <h1>{weather.currentCity}</h1>
          <p className={classes['current-description']}>
            {weather.currentDescription}
          </p>
          <p className={classes.time}>{reportTime}</p>
        </div>
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
    content = weatherDetails();
  } else {
    content = <p className={classes.loading}>Please enter a city</p>;
  }

  return (
    <>
      <div className={classes.left}>
        {/* <Logo /> */}
        <MiniDisplay enterCityHandler={enterCityHandler}>{content}</MiniDisplay>
      </div>
      <Footer />
    </>
  );
};

export default Left;
