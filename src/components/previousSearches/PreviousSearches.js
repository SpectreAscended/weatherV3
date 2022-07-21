import React from 'react';
import classes from './PreviousSearches.module.css';

const PreviousSearches = ({ searchList, queryResult }) => {
  const querySearch = name => {
    queryResult(name.target.innerText.toLowerCase());
  };

  const content = searchList.map((name, index) => {
    return (
      <li key={index} onClick={querySearch}>
        {name}
      </li>
    );
  });

  //   console.log(content);

  return (
    <>
      <h3 className={classes['heading-previous']}>Previous searches</h3>
      <ul>{content}</ul>
    </>
  );
};

export default PreviousSearches;
