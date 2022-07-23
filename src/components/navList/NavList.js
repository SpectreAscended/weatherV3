import React from 'react';
import classes from './NavList.module.css';
import Input from '../input/Input';
import PreviousSearches from '../previousSearches/PreviousSearches';

const NavList = ({ queryResult, searchList }) => {
  return (
    <>
      <div className={classes['nav-list']}>
        <Input queryResult={queryResult} />
        <PreviousSearches queryResult={queryResult} searchList={searchList} />
      </div>
    </>
  );
};

export default NavList;
