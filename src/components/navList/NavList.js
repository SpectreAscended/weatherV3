import React from 'react';
import classes from './NavList.module.css';
import Input from '../input/Input';
import PreviousSearches from '../previousSearches/PreviousSearches';

const NavList = ({
  queryResult,
  searchList,
  showNavList,
  showNavListHandler,
}) => {
  return (
    <>
      <div className={classes['nav-list']}>
        <Input queryResult={queryResult} />
        <PreviousSearches
          queryResult={queryResult}
          searchList={searchList}
          showNavList={showNavList}
          showNavListHandler={showNavListHandler}
        />
      </div>
    </>
  );
};

export default NavList;
