import React from 'react';
import classes from './Logo.module.css';
import logo from '../../assets/weather-spec-logo.png';

const Logo = () => {
  return (
    <div className={classes['logo__box']}>
      <img src={logo} alt="WeatherSpec" />
    </div>
  );
};

export default Logo;
