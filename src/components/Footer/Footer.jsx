import { useState } from 'react';
import './Footer.css';
import  VisitorCounter from './VisitorCounter';
import axios from 'axios';
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
  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=61563910378757';
  };

  const navigate = useNavigate();
  
  // State to handle form inputs and errors
  const [name, setName] = useState('');
  const [emailid, setEmailid] = useState('');
  const [mobilnum, setMobilnum] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handlers for navigation buttons
  const handleClick = () => navigate('/Donate');
  const handleClickal = () => navigate('/Alumini');
  const handleClickte = () => navigate('/Ourfaculty');
  const handleClicksl = () => navigate('/Login');

  // Form submission handler
  const handleSubmit = async () => {
    // Validate form inputs
    let validationErrors = {};

    if (!name.trim()) validationErrors.name = '*';
    if (!emailid.trim()) {
      validationErrors.emailid = '*';
    } else if (!/\S+@\S+\.\S+/.test(emailid)) {
      validationErrors.emailid = '*';
    }
    if (!mobilnum.trim()) {
      validationErrors.mobilnum = '*';
    } else if (!/^\d{10}$/.test(mobilnum)) {
      validationErrors.mobilnum = '*';
    }

    setErrors(validationErrors);

    // If no errors, send data to API
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setErrorMessage('');
      setSuccessMessage('');

      try {
        await axios.post('http://www.svavrampur.com/api/contact_us', { name, emailid, mobilnum });
        alert('Your form has been submitted successfully!')
        
        setName('');
        setEmailid('');
        setMobilnum('');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <div id="ll3">
        <h2 className="c132" style={{ fontFamily: 'Cursive' }}>REQUEST A CALL BACK</h2>
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
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            placeholder="Phone"
            value={mobilnum}
            onChange={(e) => setMobilnum(e.target.value)}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <footer className="footer" >
        <div id="l3">
          <button id="bu" onClick={handleClick} style={{ fontFamily: 'Cursive' }}>
            <img src={donationlogo} alt="C" className="link-icon" />
            DONATION
          </button>
          <button id="bu" onClick={handleClickal} style={{ fontFamily: 'Cursive' }}>
            <img src={aluminilogo} alt="Blogs" className="link-icon" />
            ALUMINI
          </button>
          <button id="bu" onClick={handleClickte} style={{ fontFamily: 'Cursive' }}>
            <img src={teacherlogo} alt="A" className="link-icon" />
            OURFACULTY
          </button>
          <button id="bu" onClick={handleClicksl} style={{ fontFamily: 'Cursive' }}>
            <img src={studentlogo} alt="student" className="link-icon" />
            STUDENTS
          </button>
        </div>
        <div id="q1">
          <div id='a19'>
            <h2 style={{ color: 'aliceblue', textAlign: 'left',fontFamily: 'Cursive' }}>
              Copyright @Srividyaranyaavasavidyalayam
              <FaFacebookF color='white' size={25} onClick={handleFacebookClick} />
              <FaInstagramSquare size={25} />
              <FaLinkedinIn size={25} />
              <SiYoutubeshorts size={25} />
              <VisitorCounter />
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;