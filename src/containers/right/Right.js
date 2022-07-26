import React from 'react';
import Input from '../../components/input/Input';
import classes from './Right.module.css';
import WeatherDetails from '../../components/weatherDetails/WeatherDetails';
import PreviousSearches from '../../components/previousSearches/PreviousSearches';
// import DetectLocation from '../../components/detectlocation/DetectLocation';

const Right = ({
  searchList,
  queryResult,
  loaded,
  weather,
  error,
  detectLocation,
}) => {
  return (
    <section className={classes['section__right']}>
      <Input queryResult={queryResult} />
      <div className={classes['section__right-container']}>
        {/* <DetectLocation detectLocation={detectLocation} /> */}
        <PreviousSearches
          searchList={searchList}
          queryResult={queryResult}
          loaded={loaded}
        />
        <WeatherDetails weather={weather} error={error} />
      </div>
    </section>
  );
};

export default Right;
