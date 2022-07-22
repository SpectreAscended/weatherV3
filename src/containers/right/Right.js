import React from 'react';
import Input from '../../components/input/Input';
import classes from './Right.module.css';
import WeatherDetails from '../../components/weatherDetails/WeatherDetails';
import PreviousSearches from '../../components/previousSearches/PreviousSearches';

const Right = props => {
  return (
    <section className={classes['section__right']}>
      <Input queryResult={props.queryResult} />
      <div className={classes['section__right-container']}>
        <PreviousSearches
          searchList={props.searchList}
          queryResult={props.queryResult}
          loaded={props.loaded}
        />
        <WeatherDetails weather={props.weather} error={props.error} />
      </div>
    </section>
  );
};

export default Right;
