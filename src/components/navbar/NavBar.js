import React from 'react';
import SearchButton from '../button/SearchButton';
import classes from './NavBar.module.css';

const NavBar = props => {
  return (
    <nav>
      <div className={classes['nav-settings']}>
        <span>Settings</span>
      </div>
      <div className={classes['nav-drop-down']}>
        <span>Search</span>
      </div>
      <SearchButton />
    </nav>
  );
};

export default NavBar;
