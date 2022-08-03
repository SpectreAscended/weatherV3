import React, { useState, useCallback } from 'react';
import classes from './Windy.module.css';

const Windy = props => {
  const [webcams, setWebcams] = useState();

  const API_KEY = process.env.REACT_APP_WINDY_API;

  const webcamHandler = data => {
    setWebcams(data);
  };

  const getWindyMaps = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.windy.com/api/webcams/v2/list/nearby=52.137166118,-106.68499726,250?show=webcams:url,player`,
        {
          headers: {
            'x-windy-key': API_KEY,
          },
        }
      );

      if (!res.ok) throw new Error('Windy maps has encountered a problem.');

      const data = await res.json();
      console.log(data.result.webcams);

      webcamHandler(data.result.webcams[1].url.current.desktop);

      //   setWebcams(data.result.webcams);
      // console.log(webcams);
    } catch (err) {
      console.error(err.message);
    }
  }, [API_KEY]);

  getWindyMaps();

  return (
    <div>
      <a className={classes['weather-link']} href={webcams}>
        Webcam
      </a>
    </div>
  );
};

export default Windy;
