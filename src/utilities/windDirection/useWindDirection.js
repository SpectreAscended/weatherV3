const useWindDirection = dir => {
  let windDirection;
  if (dir >= 337.5 || dir < 22.5) windDirection = 'N';
  else if (dir >= 22.5 && dir < 67.5) windDirection = 'NE';
  else if (dir >= 67.5 && dir < 112.5) windDirection = 'E';
  else if (dir >= 112.5 && dir < 157.5) windDirection = 'SE';
  else if (dir >= 157.5 && dir < 202.5) windDirection = 'S';
  else if (dir >= 202.5 && dir < 247.5) windDirection = 'SW';
  else if (dir >= 247.5 && dir < 292.5) windDirection = 'W';
  else if (dir >= 292.5 && dir < 337.5) windDirection = 'NW';
  return windDirection;
};

export default useWindDirection;
