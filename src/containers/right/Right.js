import React from 'react';
import Input from '../../components/input/Input';
import classes from './Right.module.css';

const Right = props => {
  return (
    <section className={classes['section-right']}>
      <Input queryResult={props.queryResult} />
    </section>
  );
};

export default Right;
