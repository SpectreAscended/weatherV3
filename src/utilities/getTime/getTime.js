import React from 'react';

const getTime = epoch => {
  const date = new Date(epoch * 1000);
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  const output = `${date.toLocaleTimeString()} - ${date.toLocaleDateString(
    'us-EN',
    options
  )} `;
  return <>{output}</>;
};

export default getTime;
