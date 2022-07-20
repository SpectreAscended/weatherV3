import React, { useRef, useState } from 'react';
import classes from './Input.module.css';

const Input = props => {
  const [query, setQuery] = useState();
  const inputText = useRef();

  const queryHandler = () => {
    const cleanQuery = inputText.current.value.trim().toLowerCase();
    setQuery(cleanQuery);
  };

  const formHandler = e => {
    e.preventDefault();
    if (inputText.current.value.length === 0) return;
    props.queryResult(query);
    inputText.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search city"
        ref={inputText}
        autoFocus
        onChange={queryHandler}
      />
      <button className={classes.btn}>Search</button>
    </form>
  );
};

export default Input;
