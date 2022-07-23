import React, { useState, useEffect } from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear(2022);
    setFullYear(year);
  }, []);

  return (
    <footer className={classes.footer}>
      <p>
        Created by{' '}
        <a href="https://spectreascended.github.io/personalhomepage/">
          Cory Pollard
        </a>{' '}
        &copy; {fullYear}
      </p>
    </footer>
  );
};

export default Footer;
