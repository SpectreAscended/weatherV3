import React, { useRef, useState } from 'react';
import classes from './Input.module.css';

const Input = props => {
  const [query, setQuery] = useState();
  const inputText = useRef();

  const queryHandler = () => {
    setQuery(inputText.current.value);
  };

  const formHandler = e => {
    e.preventDefault();
    console.log(query);
    inputText.current.value = '';
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
