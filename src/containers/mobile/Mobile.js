import React, { useState } from 'react';
import NavBar from '../../components/navbar/NavBar';
import classes from './Mobile.module.css';
import Left from '../left/Left';
import NavList from '../../components/navList/NavList';
import Card from '../../components/card/Card';
import MobileWeatherDetails from '../../components/mobileWeatherDetails/MobileWeatherDetails';

const Mobile = ({ weather, loading, error, queryResult, searchList }) => {
  const [showNavList, setShowNavList] = useState(false);

  const showNavListHandler = () => {
    setShowNavList(prevShowNavList => (prevShowNavList = !prevShowNavList));
  };

  return (
    <>
      <NavBar showNavListHandler={showNavListHandler} />
      <section className={classes['section-mobile']}>
        {showNavList ? (
          <NavList
            queryResult={queryResult}
            searchList={searchList}
            showNavList={showNavList}
            showNavListHandler={showNavListHandler}
          />
        ) : (
          <Left weather={weather} loading={loading} error={error} />
        )}
        <MobileWeatherDetails
          weather={weather}
          loading={loading}
          error={error}
        />
      </section>
    </>
  );
};

export default Mobile;
