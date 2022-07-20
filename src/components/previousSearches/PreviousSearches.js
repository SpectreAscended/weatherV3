import React from 'react';
import classes from './PreviousSearches.module.css';

const PreviousSearches = props => {
  const prevSearches = [
    'Saskatoon',
    'Regina',
    'Moose Jaw',
    'Edmonton',
    'Calgary',
  ];

  const getName = name => {
    console.log(name.target.innerText);
  };

  const content = prevSearches.map((name, index) => {
    return (
      <li key={index} onClick={getName}>
        {name}
      </li>
    );
  });

  console.log(content);

  return <ul>{content}</ul>;
};

export default PreviousSearches;
