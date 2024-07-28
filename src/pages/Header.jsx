import './header.css';
import { useNavigate } from 'react-router-dom';
import exampleImage from '../assets/school logo .jpg';
import exa from './logocandle.png';
import { FaPhone, FaEnvelope} from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [ setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close the mobile menu after navigation
  };

 
  return (
    <header className="header">
      <div className="Header">
        <div className="section1">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img className="image" src={exampleImage} alt="School Logo" />
            <div style={{ flexDirection: "column", textAlign: "center" }}>
              <h4 className="subtitles">
                <span className="inline-text">
                  SRI VIDYARANYA AVASA VIDYALAYAM  </span>
                  <br />
                  <span className="inline-text1"> (CHOKKARAM NAGAR-RAMPUR)</span> 
              
              </h4>
              <h4 className="sub1">DAY & RESIDENTIAL</h4>
              <h4 className="subbar">Global competence with ancient wisdom</h4>
             <h4 className="clgCode">Affilated by Vidyapeetham </h4>
            </div>
          </div>
         
        </div>
        <div className="section2">
          <span className="title" onClick={() => handleNavigation('/Onlineenquiryform')}>Online Enquiry</span>
          <span className="title" onClick={() => handleNavigation('/Alumni')}>Alumni Details</span>
          <span className="title" onClick={() => handleNavigation('/Download')}>Download Brochure</span>
          <span className="title" onClick={() => handleNavigation('/Halloffame')}>News Letter</span>
        </div>
        <div className="section3">
          <span className="contact-item">
            <FaPhone className="contact-icon" />&nbsp; +91 9492873533
          </span>
          <span className="contact-item">
            <FaEnvelope className="contact-icon" />&nbsp; info@svavrampur.com
          </span>
          <br />
          <b className="code">Proc.No.RR-GDP007-0019</b>
        </div>
        <img src={exa} alt="Candle Logo" style={{ width: '100px', height: '90px', marginTop: '40px', marginRight: '0px' }} />
      </div>

      <div className="navbar1">
        <a href="#" onClick={() => handleNavigation('/')} className="no-underline">HOME</a>
          <div className="dropdown">
            <button className="dropbtn">SDP<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/Sdp')}>SDP SVAV Rampur</a>
              <a href="#" onClick={() => handleNavigation('/Donate')}>Donate</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">ABOUT US<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/Vidhya')}>Vidhya Bharathi</a>
              <a href="#" onClick={() => handleNavigation('/Commite')}>Executive Committee</a>
              <a href="#" onClick={() => handleNavigation('/Supportus')}>Support Us</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">FACILITIES<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/Classroom')}>Catalytic Classrooms</a>
              <a href="#" onClick={() => handleNavigation('/Sportsroom')}>Games & Sports</a>
              <a href="#" onClick={() => handleNavigation('/Labroom')}>IT/Computer Lab</a>
              <a href="#" onClick={() => handleNavigation('/Medical')}>Medical/Vaidhya Vibhag</a>
              <a href="#" onClick={() => handleNavigation('/Laboratories')}>Laboratories</a>
              <a href="#" onClick={() => handleNavigation('/Library')}>Library</a>
              <a href="#" onClick={() => handleNavigation('/Auditorium')}>Multi-purpose Auditorium</a>
              <a href="#" onClick={() => handleNavigation('/Arts')}>Arts & Crafts</a>
              <a href="#" onClick={() => handleNavigation('/Transport')}>Transport Management</a>
              <a href="#" onClick={() => handleNavigation('/Boardingroom')}>Boarding Facilities</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">BEYOND<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/Sadacharam')}>Sadacharam</a>
              <a href="#" onClick={() => handleNavigation('/Svavprathana')}>SVAV Prarthana</a>
              <a href="#" onClick={() => handleNavigation('/Sanskrit')}>Sanskrit</a>
              <a href="#" onClick={() => handleNavigation('/Yoga')}>Yoga</a>
              <a href="#" onClick={() => handleNavigation('/Archana')}>Archana</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">ADMISSION<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/AdmissionProcess')}>Admission Process</a>
              <a href="#" onClick={() => handleNavigation('/Onlineenquiryform')}>Online Enquiry Form</a>
              <a href="#" onClick={() => handleNavigation('/Feestructure')}>Fee Structure</a>
              <a href="#" onClick={() => handleNavigation('/Studentenrollment')}>Student Enrollment</a>
              <a href="#" onClick={() => handleNavigation('/Faq')}>FAQs</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">ACADEMIC<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/Cirriculum')}>Curriculum</a>
              <a href="#" onClick={() => handleNavigation('/Philosophy')}>SVAV Philosophy</a>
              <a href="#">Special Awards</a>
              <a href="#">Holidays</a>
              <a href="#">Downloads</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">NEWS & EVENTS<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Our Events</a>
              <a href="#" onClick={() => handleNavigation('/Gallery')}>Gallery</a>
              <a href="#" onClick={() => handleNavigation('/Halloffame')}>Hall of Fame</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">CAREER<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/ProfessionalDevelopment')}>Professional Development</a>
              <a href="#">Job Openings</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleNavigation('/contact')}>CONTACT US<i className="fa fa-caret-down"></i></button>
          </div>
       
      </div>

      <div className="color">
        <div className="line">LATEST NEWS</div>
        <div><marquee>Job Openings: Join our Team of teachers and admin by applying at careers@svav.ind.in or hr@svav.ind.in</marquee></div>
      </div>
    </header>
  );
}

export default Header;
