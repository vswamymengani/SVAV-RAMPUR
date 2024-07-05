import React from 'react';
import './Curriculum.css';
import logo from './law.png'; // Ensure the path to the logo is correct

const Curriculum = () => {
  return (
    <div className="curriculum-container">
      <div className="curriculum-header">
        <div className="content-container">
          <img src={logo} alt="Logo" className="curriculum-logo" />
          <div id="t1" className="curriculum-text">
            Balanced Academics and Residential Life
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Curriculum;
