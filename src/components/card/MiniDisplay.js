import React from 'react';
import classes from './MiniDisplay.module.css';

const MiniDisplay = props => {
  return <div className={classes.card}>{props.children}</div>;
};

export default MiniDisplay;
