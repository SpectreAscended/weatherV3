import React from 'react';
import classes from './DetectLocation.module.css';

const DetectLocation = detectLocation => {
  const detectLocationHandler = () => {
    detectLocation();
  };

  return (
    <div className={classes['detect-location']} onClick={detectLocationHandler}>
      Detect location
    </div>
  );
};

export default DetectLocation;
