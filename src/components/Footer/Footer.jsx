// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import donationlogo from './donation.png';
import aluminilogo from './alumini.png';
import teacherlogo from './teacher.png';
import clglogo from './clg.png';
import studentlogo from './student (1).png';
const Footer = () => {

 
  return (

    <footer className="footer">
      <div id="l3">
      <img src={donationlogo} alt="C" className="link-icon"/>
      DONATION
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
        <img src={aluminilogo} alt="Blogs" className="link-icon" />
       ALUMINI
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <img src={teacherlogo} alt="A" className="link-icon" />
        TEACHER
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
        <img src={clglogo} alt="clg" className="link-icon" />
        SCHOOL/COLLEGE
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <img src={studentlogo} alt="student" className="link-icon" />
       STUDENTS
    
    </div>
      {/* <div className="footer-container">
        <p> MyCompany. All Rights Reserved.</p>
      </div> */}
      <div id="q1">
     < div id='a19'>
                  
                </div></div>
    </footer>
  );
};

export default Footer;

