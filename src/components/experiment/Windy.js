import React, { useState } from 'react';
import './Windy.module.css';

const Windy = props => {
  const [webcams, setWebcams] = useState();

  const webcamHandler = data => {
    setWebcams(data);
  };

  const getWindyMaps = async () => {
    try {
      const res = await fetch(
        'https://api.windy.com/api/webcams/v2/list/nearby=52.137166118,-106.68499726,250?show=webcams:url',
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'x-windy-key': 'GgwI0LZYhsiyvFUFdbQA7gKc7B77dkwm',
          },
        }
      );

      if (!res.ok) throw new Error('Windy maps has encountered a problem.');

      const data = await res.json();
      console.log(data.result.webcams[0].url.current.desktop);

      webcamHandler(data.result.webcams[1].url.current.desktop);

      //   setWebcams(data.result.webcams);
      // console.log(webcams);
    } catch (err) {
      console.error(err.message);
    }
  };

  getWindyMaps();

  return (
    <div>
      WINDY
      <a href={webcams}>Webcam</a>
    </div>
  );
};

export default Windy;
