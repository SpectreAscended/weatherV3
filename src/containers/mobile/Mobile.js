import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import classes from './Mobile.module.css';
import Left from '../left/Left';
import NavList from '../../components/navList/NavList';

const Mobile = ({ weather, loading, error, queryResult, searchList }) => {
  return (
    <>
      <NavBar />
      <section className={classes['section-mobile']}>
        {/* <Left weather={weather} loading={loading} error={error} /> */}
        <NavList queryResult={queryResult} searchList={searchList} />
      </section>
    </>
  );
};

export default Mobile;
