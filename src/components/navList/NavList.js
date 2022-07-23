import React from 'react';
import classes from './NavList.module.css';
import Input from '../input/Input';

const NavList = props => {
  return (
    <>
      <div className={classes['nav-list']}>
        <Input />
        <h3>Previous Searches</h3>
        <ul>
          <li>Saskatoon</li>
          <li>Calgary</li>
          <li>Winnipeg</li>
          <li>Edmonton</li>
          <li>Vancouver</li>
        </ul>
      </div>
    </>
  );
};

export default NavList;
