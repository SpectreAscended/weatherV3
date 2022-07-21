import React from 'react';

const WindDirection = props => {
  const getWindDirection = function (dir) {
    let windDirectionAlpha;
    if (dir >= 337.5 || dir < 22.5) windDirectionAlpha = 'N';
    if (dir >= 22.5 && dir < 67.5) windDirectionAlpha = 'NE';
    if (dir >= 67.5 && dir < 112.5) windDirectionAlpha = 'E';
    if (dir >= 112.5 && dir < 157.5) windDirectionAlpha = 'SE';
    if (dir >= 157.5 && dir < 202.5) windDirectionAlpha = 'S';
    if (dir >= 202.5 && dir < 247.5) windDirectionAlpha = 'SW';
    if (dir >= 247.5 && dir < 292.5) windDirectionAlpha = 'W';
    if (dir >= 292.5 && dir < 337.5) windDirectionAlpha = 'NW';
    return windDirectionAlpha;
  };
  return <>{getWindDirection(props.windDir)}</>;
};

export default WindDirection;
