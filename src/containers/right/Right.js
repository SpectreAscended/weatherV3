import React from 'react';
import Input from '../../components/input/Input';
import classes from './Right.module.css';
import WeatherDetails from '../../components/weatherDetails/WeatherDetails';

const Right = props => {
  return (
    <section className={classes['section__right']}>
      <Input queryResult={props.queryResult} />
      <div className={classes['section__right-container']}>
        <WeatherDetails weather={props.weather} error={props.error} />
      </div>
    </section>
  );
};

export default Right;
