import React from 'react';
import classes from './MiniDisplay.module.css';

const MiniDisplay = ({ children, enterCityHandler }) => {
  return (
    <>
      <div onClick={enterCityHandler} className={classes['card-container']}>
        <div className={classes.card}>{children}</div>
      </div>
    </>
  );
};

export default MiniDisplay;
