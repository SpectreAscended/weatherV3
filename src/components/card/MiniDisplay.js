import React from 'react';
import classes from './MiniDisplay.module.css';

const MiniDisplay = props => {
  return (
    <>
      <div className={classes['card-container']}>
        <div className={classes.card}>{props.children}</div>
        <div className={classes['card-btn']}>More Info</div>
      </div>
    </>
  );
};

export default MiniDisplay;
