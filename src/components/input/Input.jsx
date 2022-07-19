import React, { useRef, useState } from 'react';
import classes from './Input.module.css';

const Input = props => {
  const [query, setQuery] = useState();
  const inputText = useRef();

  const queryHandler = e => {
    if (inputText.current.value.length === 0) return;
    const cleanText = inputText.current.value.toLowerCase();
    setQuery(cleanText);
  };

  const formHandler = e => {
    e.preventDefault();
    console.log(query);
    inputText.current.value = '';
    props.queryResult(query);
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search city"
        ref={inputText}
        onChange={queryHandler}
      />
      <button className={classes.btn}>Search</button>
    </form>
  );
};

export default Input;
