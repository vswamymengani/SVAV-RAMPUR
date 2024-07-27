// // src/components/Footer.jsx
// import './f1.css';
// import { useNavigate } from 'react-router-dom';
// import donationlogo from './donation.png';
// import aluminilogo from './alumini.png';
// import teacherlogo from './teacher.png';
// import studentlogo from './student (1).png';
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { SiYoutubeshorts } from "react-icons/si";


// const Footer = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/Donate');
//   };
//   const handleClickal = () => {
//     navigate('/Alumini');
//   };
//   const handleClickte = () => {
//     navigate('/Ourfaculty');
//   };
//   const handleClicksl = () => {
//     navigate('/Students');
//   };
//   const handleClick5 = () => {
//     alert('Your form has been submitted successfully!');
  
//   };

//     return (
    
//     <div>
    
//     <footer className="footer">
//     <div id="ll3">
      
    
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//      <div id="fields">
//   <center>
//        <input type="text" placeholder="Name" />
//       <input type="text" placeholder="Email" />
//       <input type="text" placeholder="Phone" />&nbsp;&nbsp;&nbsp;&nbsp;
//       <button onClick={handleClick5} >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       </center>
//       </div> 
//       <div id="rf"><h2>REQUEST&nbsp;&nbsp;A&nbsp;&nbsp;CALL&nbsp;&nbsp;BACK</h2></div>
//        </div>

//     <div id="l3" >
        
        
//         <button id="bu" onClick={handleClick}>
//       <img src={donationlogo} alt="C"  className="link-icon"/>
//       DONATION </button>
//     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
//     <button id="bu" onClick={handleClickal}>
//         <img src={aluminilogo} alt="Blogs" className="link-icon" />
//        ALUMINI</button>
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
//       <button id="bu" onClick={handleClickte}>
//         <img src={teacherlogo} alt="A" className="link-icon" />
//        OURFACULTY</button>
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
//       <button id="bu" onClick={handleClicksl}>
//         <img src={studentlogo} alt="student" className="link-icon" />
//        STUDENTS</button>
    
//     </div>
//     <div id="q1" >
//                     <div id='a19'>
//                         <h2 style={{ color: 'aliceblue', textAlign: 'left'}}>Copyright @Srividyaranyaavasavidyalayam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                             <FaFacebookF color='white' size={25} />&nbsp;&nbsp;<FaInstagramSquare size={25} />&nbsp;&nbsp;
//                             <FaLinkedinIn size={25} />&nbsp;&nbsp;<SiYoutubeshorts size={25} />
//                         </h2>
//                     </div>
//                 </div>
//     </footer>
//     </div>

//   );
// };

// export default Footer;


// src/components/Footer.jsx

import './f1.css';
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
  const handleClickal = () => {
    navigate('/Alumini');
  };
  const handleClickte = () => {
    navigate('/Ourfaculty');
  };
  const handleClicksl = () => {
    navigate('/Students');
  };
  const handleClick5 = () => {
    alert('Your form has been submitted successfully!');
  };

  return (
    <div>
      <div id="ll3">
        <div id="fields">
        <h2>REQUEST A CALL BACK</h2>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <button onClick={handleClick5}>Submit</button>
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


