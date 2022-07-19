import React from 'react';
import './home.css';
import Input from '../../components/input/Input';

import Left from '../left/Left';

const home = () => {
  const searchCityHandler = query => {
    console.log(query);
  };

  return (
    <main className="main">
      <Input formData={searchCityHandler} />
      <Left />
    </main>
  );
};

export default home;
