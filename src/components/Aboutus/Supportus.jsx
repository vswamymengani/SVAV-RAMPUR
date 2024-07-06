import React from 'react';
import './Supportus.css'; // Make sure the path to your CSS file is correct

const Supportus = () => {
  const containerStyle = {
    textAlign: 'left',
    padding: '20px'
  };

  return (
    <div className="v2" style={containerStyle}>
      <h1 id="c1">Supportus</h1><br />
      <h3>Contribute in this noble mission of Vidya Bharati</h3>
      <ul className="custom-list">
        <li>Participate in various programmes, seminars, workshops etc. organized by Vidya Bharati;</li>
        <li>Extend your valuable suggestions towards the development of various educational activities;</li>
        <li>Contribute in the resource developments of Vidya Bharati schools;</li>
        <li>Send your original articles on educational issues to be included in the magazines/ journals published by Vidya Bharati;</li>
        <li>Associate with the Vidvat Parishad or Bhartiya Shiksha Sodh Sansthan;</li>
        <li>Associate with the Alumni Council of your respective school, if you are a former student of Vidya Bharati.</li>
      </ul>
      <br />
    </div>
  );
}

export default Supportus;
