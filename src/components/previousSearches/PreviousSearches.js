import React, { useEffect } from 'react';
import classes from './PreviousSearches.module.css';

const PreviousSearches = ({ searchList, queryResult }) => {
  const querySearch = city => {
    queryResult(city.target.innerText.toLowerCase());
  };

  const content = searchList.map((city, index) => {
    return (
      <li
        className={classes['previous-search__list--item']}
        key={index}
        onClick={querySearch}
      >
        {city}
      </li>
    );
  });

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('queryList', JSON.stringify(searchList));
  }, [searchList]);

  //   console.log(content);

  return (
    <>
      <h3 className={classes['heading-previous']}>Previous searches</h3>
      <ul>{content}</ul>
    </>
  );
};

export default PreviousSearches;
