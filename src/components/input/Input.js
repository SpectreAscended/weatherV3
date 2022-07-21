import React, { useRef, useState } from 'react';
import classes from './Input.module.css';
import search from '../../assets/Magnefying glass - black.svg';

const Input = props => {
  const [query, setQuery] = useState();
  const inputText = useRef();

  const queryHandler = () => {
    const cleanQuery = inputText.current.value.trim().toLowerCase();
    setQuery(cleanQuery);
  };

  const formHandler = e => {
    e.preventDefault();
    if (inputText.current.value.trim().length === 0) {
      inputText.current.value = '';
      return;
    }
    props.queryResult(query);
    inputText.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <input
        className={classes.input}
        type="text"
        ref={inputText}
        autoFocus
        onChange={queryHandler}
      />
      <button className={classes.btn}>
        <img src={search} alt="Search" />
      </button>
    </form>
  );
};

export default Input;
