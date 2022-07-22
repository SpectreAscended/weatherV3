import React from 'react';
import classes from './SearchButton.module.css';
import searchBtnIcon from '../../assets/Magnefying glass - black.svg';

const SearchButton = () => {
  return (
    <button className={classes['search-button']}>
      <img
        className={classes['search-button-icon']}
        src={searchBtnIcon}
        alt="search"
      />
    </button>
  );
};

export default SearchButton;
