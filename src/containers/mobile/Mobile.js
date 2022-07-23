import React, { useState } from 'react';
import NavBar from '../../components/navbar/NavBar';
import classes from './Mobile.module.css';
import Left from '../left/Left';
import NavList from '../../components/navList/NavList';

const Mobile = ({ weather, loading, error, queryResult, searchList }) => {
  const [showNavList, setShowNavList] = useState(false);

  const showNavListHandler = () => {
    console.log('yo');
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
      </section>
    </>
  );
};

export default Mobile;
