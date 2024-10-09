import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import './style.css';
const CountComponent = () => {
   const [count, setCount] = useState(0);

   const plus = e => {
      setCount(count => count + 1);
   };
   const minus = e => {
      setCount(count => count - 1);
   };

   const reset = e => {
      setCount(0);
   };

   return (
      <>
         <div className="main">
            <div className="top">
               <span>
                  <FontAwesomeIcon icon={faHandPointUp} />
               </span>
               <span>React Clicker</span>
            </div>
            <div className="container">
               <div className="number-container">
                  <span className="number">{count}</span>
               </div>
               <div className="control-wrapper">
                  <div className="plus-btn">
                     <button onClick={e => plus(e)}>+</button>
                  </div>
                  <div className="reset-btn">
                     <button onClick={e => reset(e)}>
                        <FontAwesomeIcon icon={faRotate} />
                     </button>
                  </div>
                  <div className="minus-btn">
                     <button onClick={e => minus(e)}>-</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CountComponent;
