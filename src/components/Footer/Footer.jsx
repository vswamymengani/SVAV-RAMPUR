// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import donationlogo from './donation.png';
import aluminilogo from './alumini.png';
import teacherlogo from './teacher.png';
import studentlogo from './student (1).png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Donate');
  };

 
  return (

    <footer className="footer">
      <div id="l3" >
        <button id="bu" onClick={handleClick}>
      <img src={donationlogo} alt="C"  className="link-icon"/>
      DONATION </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
        <img src={aluminilogo} alt="Blogs" className="link-icon" />
       ALUMINI
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <img src={teacherlogo} alt="A" className="link-icon" />
       OURFACULTY
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <img src={studentlogo} alt="student" className="link-icon" />
       STUDENTS
    
    </div>
    <div id="q1">
                    <div id='a19'>
                        <h2 style={{ color: 'aliceblue', textAlign: 'left' }}>Copyright @Srividyaranyaavasavidyalayam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaFacebookF color='white' size={25} />&nbsp;&nbsp;<FaInstagramSquare size={25} />&nbsp;&nbsp;
                            <FaLinkedinIn size={25} />&nbsp;&nbsp;<SiYoutubeshorts size={25} />
                        </h2>
                    </div>
                </div>
    </footer>
  );
};

export default Footer;

