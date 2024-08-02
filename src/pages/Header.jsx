import './header.css';
import { useNavigate } from 'react-router-dom';
import exampleImage from '../assets/school logo .jpg';
import exa from './logocandle.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top;
        setIsFixed(navbarTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth <= 480) {
      setMenuOpen(false); // Close the menu on navigation for mobile view
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <div className="Header">
        <div className="section1">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img className="image" src={exampleImage} alt="School Logo" />
            <div style={{ flexDirection: "column", textAlign: "center" }}>
              {/* <h4 className="subtitles">
                <h4 className="inline-text">
                  SRI VIDYARANYA AVASA VIDYALAYAM
                  
                </h4>
                <br />
                <h4 className="inline-text1"> (CHOKKARAM NAGAR-RAMPUR)</h4>
              </h4> */}

              <div className='demo'>
                <h4>SRI VIDYARANYA AVASA VIDYALAYAM</h4>
                <h6>(CHOKKARAM NAGAR-RAMPUR)</h6>
              </div>


              <h4 className="sub1">DAY & RESIDENTIAL</h4>
              <h4 className="subbar">Global competence with ancient wisdom</h4>
              <h4 className="clgCode">Affiliated by Vidyapeetham</h4>
            </div>
          </div>
        </div>
        <div className="section2">
          <span className="title" onClick={() => handleNavigation('/Onlineenquiryform')}>Online Enquiry</span>
          <span className="title" onClick={() => handleNavigation('/Alumini')}>Alumni Details</span>
          <span className="title" onClick={() => handleNavigation('/Download')}>Download Brochure</span>
          <span className="title" onClick={() => handleNavigation('/Holidays')}>News Letter</span>
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
        <img src={exa} alt="Candle Logo" style={{ width: '100px', height: '90px', marginTop: '60px', marginRight: '0px' }} />
      </div>
      <div className={`navbar1 ${isFixed ? 'fixed' : ''}`} ref={navbarRef}>
        <div className="menu-icon" onClick={toggleMenu}>&#9776;</div> {/* Menu icon */}
        <div className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <a href="#" onClick={() => handleNavigation('/')}>HOME</a>
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
              <a href="#"  onClick={() => handleNavigation('/Holidays')}>Holidays</a>
              <a href="#">Downloads</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">NEWS & EVENTS<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/Events')}>Our Events</a>
              <a href="#" onClick={() => handleNavigation('/Gallery')}>Gallery</a>
              <a href="#" onClick={() => handleNavigation('/Halloffame')}>Hall of Fame</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">CAREER<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleNavigation('/ProfessionalDevelopment')}>Professional Development</a>
              <a href="#" onClick={() => handleNavigation('/JobOpening')}>Job Openings</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleNavigation('/contact')}>CONTACT US<i className="fa fa-caret-down"></i></button>
          </div>
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