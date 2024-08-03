import React, { useState } from 'react';
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
  
  // State to handle form inputs and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  // Handlers for navigation buttons
  const handleClick = () => navigate('/Donate');
  const handleClickal = () => navigate('/Alumini');
  const handleClickte = () => navigate('/Ourfaculty');
  const handleClicksl = () => navigate('/Students');

  // Form submission handler
  const handleSubmit = () => {
    // Validate form inputs
    let validationErrors = {};

    if (!name.trim()) validationErrors.name = '*';
    if (!email.trim()) {
      validationErrors.email = '*';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = '*';
    }
    if (!phone.trim()) {
      validationErrors.phone = '*';
    } else if (!/^\d{10}$/.test(phone)) {
      validationErrors.phone = '*';
    }

    setErrors(validationErrors);

    // If no errors, show success message
    if (Object.keys(validationErrors).length === 0) {
      alert('Your form has been submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <div>
      <div id="ll3">
        <h2>REQUEST A CALL BACK</h2>
        <div id="fields">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <footer className="footer">
        <div id="l3">
          <button id="bu" onClick={handleClick}>
            <img src={donationlogo} alt="C" className="link-icon" />
            DONATION
          </button>
          <button id="bu" onClick={handleClickal}>
            <img src={aluminilogo} alt="Blogs" className="link-icon" />
            ALUMINI
          </button>
          <button id="bu" onClick={handleClickte}>
            <img src={teacherlogo} alt="A" className="link-icon" />
            OURFACULTY
          </button>
          <button id="bu" onClick={handleClicksl}>
            <img src={studentlogo} alt="student" className="link-icon" />
            STUDENTS
          </button>
        </div>
        <div id="q1">
          <div id='a19'>
            <h2 style={{ color: 'aliceblue', textAlign: 'left' }}>
              Copyright @Srividyaranyaavasavidyalayam
              <FaFacebookF color='white' size={25} />
              <FaInstagramSquare size={25} />
              <FaLinkedinIn size={25} />
              <SiYoutubeshorts size={25} />
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;