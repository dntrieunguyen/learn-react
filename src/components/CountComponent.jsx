import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import './style.css';
const CountComponent = () => {
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
                  <span className="number">0</span>
               </div>
               <div className="control-wrapper">
                  <div className="plus-btn">
                     <button>+</button>
                  </div>
                  <div className="reset-btn">
                     <button><FontAwesomeIcon icon={faRotate} /></button>
                  </div>
                  <div className="minus-btn">
                     <button>-</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CountComponent;
