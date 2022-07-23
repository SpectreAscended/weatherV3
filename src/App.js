import React, { useState } from 'react';
import Home from './containers/home/Home';
import Mobile from './containers/mobile/Mobile';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  // const [showMobile, setShowMobile] = useState();

  // useEffect(() => {
  //   const handleResize = () => {
  //     const getWindowWidth = () => {
  //       let width = window.innerWidth;
  //       return width;
  //     };
  //     setShowMobile(getWindowWidth());
  //   };
  //   window.addEventListener('resize', handleResize);
  // }, []);

  // console.log(showMobile);

  return (
    <>
      {/* {showMobile < 650 ? <Mobile /> : <Home />} */}
      <div className="desktop">
        <Home />
      </div>
      <div className="mobile">
        <Mobile />
      </div>
    </>
  );
};

export default App;
