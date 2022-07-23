import React, { useEffect } from 'react';
import classes from './PreviousSearches.module.css';

const PreviousSearches = ({
  searchList,
  queryResult,
  loaded,
  showNavList,
  showNavListHandler,
}) => {
  const querySearch = city => {
    queryResult(city.target.innerText.toLowerCase());
    showNavListHandler();
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
    if (loaded) {
      queryResult(searchList[0]);
      localStorage.setItem('searchList', JSON.stringify(searchList));
    }
  }, [searchList, loaded, queryResult]);

  //   console.log(content);

  return (
    <>
      <h3 className={classes['heading-previous']}>Previous searches</h3>
      <ul>{content}</ul>
    </>
  );
};

export default PreviousSearches;
