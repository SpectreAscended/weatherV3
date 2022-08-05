import React, { useRef, useState } from 'react';
import classes from './Input.module.css';
import searchImg from '../../assets/Magnefying glass - black.svg';

const Input = ({ queryResult, showNavList, showNavListHandler }) => {
  const [query, setQuery] = useState();
  const inputText = useRef();

  const queryHandler = () => {
    const cleanQuery = inputText.current.value.toLowerCase();
    setQuery(cleanQuery);
  };

  const formHandler = e => {
    e.preventDefault();
    if (inputText.current.value.trim().length === 0) {
      setQuery('');
      return;
    }
    queryResult(query);
    setQuery('');
    if (showNavList) {
      showNavListHandler();
    }
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <input
        placeholder="Search City"
        className={classes.input}
        type="text"
        ref={inputText}
        autoFocus
        onChange={queryHandler}
        value={query}
      />
      <button className={classes.btn}>
        <img src={searchImg} alt="Search" />
      </button>
    </form>
  );
};

export default Input;
