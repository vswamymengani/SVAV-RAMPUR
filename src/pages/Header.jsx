import './Home.css';
import { useNavigate } from 'react-router-dom';
import '../components/Footer/Footer.css';
import exampleImage from '../assets/school logo .jpg';
import exa from './logocandle.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';



const Header = () => {
    const navigate = useNavigate();
  
    const handleClick2 = () => {
        navigate('/Onlineenquiryform');
      };
      const handleClickA = () => {
        navigate('/Alumini');
      };
    
      const handleClickD = () => {
        navigate('/Download');
      };
    
      const handleClick1 = () => {
        navigate('/Halloffame');
      };
    
    const goToVidhya = () => {
        navigate('Vidhya');
    };
    const goToSdp = () => {
        navigate('Sdp');
    };
    const goToCommitte = () => {
        navigate('Commite');
    };

    const goToSupportus = () => {
        navigate('Supportus');
    };

    const goToClassroom = () => {
        navigate('Classroom');
    };
    const goToSportsroom = () => {
        navigate('Sportsroom');
    };
    const goToLabroom = () => {
        navigate('Labroom');
    };
    const goToMedical = () => {
        navigate('Medical');
    };
    const goToLaboratories = () => {
        navigate('Laboratories');
    };
    const goToLibrary = () => {
        navigate('Library');
    };
    const goToAuditorium = () => {
        navigate('Auditorium');
    };
    const goToArts = () => {
        navigate('Arts');
    };
    const goToTransport = () => {
        navigate('Transport');
    };
    const goToBoardingroom = () => {
        navigate('Boardingroom');
    };
    const goToSadacharam = () => {
        navigate('Sadacharam');
    };
    const goToSvavprathana= () => {
        navigate('Svavprathana');
    };
    const goToSanskrit= () => {
        navigate('Sanskrit');
    };
    const goToYoga= () => {
        navigate('Yoga');
    };
    const goToFeestructure= () => {
        navigate('Feestructure');
    };
    const goToFaq= () => {
        navigate('Faq');
    };
    const goToStudentenrollment= () => {
        navigate('Studentenrollment');
    };
    const goToOnlineenquiryform = () => {
        navigate('Onlineenquiryform');
    };
    const goToAdmissionProcess = () => {
        navigate('AdmissionProcess');
    };
    const goToCirriculum = () => {
        navigate('Cirriculum');
    };
    const goToPhilosophy = () => {
        navigate('Philosophy');
    };
    const goToHalloffame = () => {
        navigate('Halfoffame');
    };
    const goToArchana = () => {
        navigate('Archana');
    };
    const goToGallery = () => {
        navigate('Gallery');
    };
    const goToProfessionalDevelopment = () => {
        navigate('ProfessionalDevelopment ');
    };
    const handleContactUsClick = () => {
        navigate('/contact'); // This navigates to the "/contact" route
    };
    // const goToDonate = () => {
    //     navigate('Donate');
    // };

    return (
        <header className="header">
           <div className="position">
                <div className='Header'>
                    <div className='section1'>
                        <div style={{ display: "flex", flexDirection: "row" }}> 
                            <img className='image' src={exampleImage} alt="Example4" />
                            <div style={{ flexDirection: "column", textAlign: "center" }}>
                                <h4 className="subtitles">
                                    <span className="inline-text">SRI VIDYARANYA AVASA VIDYALAYAM<br></br> (SVAV-RAMPUR)</span>
                                </h4>


                                <h4 className='sub1'>DAY & RESIDENTIAL</h4>
                                <h4 className='subbar'>Gobal competence with ancient wisdom</h4>
                            </div>
                        </div>
                        <b className='clgCode'>UDISE Code:  36230301739</b>
                    </div>
                    <div className='section2'>
                        <span className="title" onClick={handleClick2}>Online_Enquiry</span>
                        <span className="title"  onClick={handleClickA}>Alumni_details</span>
                        <span className="title" onClick={handleClickD}>Download_Brochure</span>
                        <span className="title"  onClick={handleClick1}>News_Letter</span>
                    </div>
                    <div className='section3'>
                    
                              <span className="contact-item">
                            <FaPhone className="contact-icon" />&nbsp; +91 9502116793
                              </span>
                            <span className="contact-item">
                            <FaEnvelope className="contact-icon" />&nbsp;  info@svav.ind.in
                               </span>
                 <br></br>
                        <b className='code'>Proc.No.RR-GDP007-0019</b>
                    </div>

                    <img src={exa} alt="Example" style={{ width: '100px', height: '90px', marginTop: '40px', marginRight: '0px' }} />
                </div> 
            
                <div className="navbar1">
                    
                  
                    <a href="/#" onClick="goToHome()" className="styled-link">HOME</a>

                    {/* <div className="navbar3">
                    <a href="/donate" onClick="goToDonate()" className="styled-link">SDP</a>

                        <div className="dropdown">
                        </div>
                    </div> */}
                    <div className="dropdown">
                        <button className="dropbtn">SDP
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/Sdp" onClick={goToSdp}>SDP_SVAV_RAMPUR</a>
                            <a href="/donate" onClick="goToDonate()" className="styled-link" >DONATE</a>
                
                        </div>
                    </div>

                    
                    <div className="dropdown">
                        <button className="dropbtn">ABOUT US
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/Vidhya" onClick={goToVidhya}>VIDHYA BAHARATHI</a>
                            <a href="/Commite" onClick={goToCommitte}>EXECUTIVE COMMITEE</a>
                            <a href="/Supportus" onClick={goToSupportus}>SUPPORT US</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">FACILITIES
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/Classroom" onClick={goToClassroom}>CATALYTIC CLASSROOMS</a>
                            <a href="/Sportsroom" onClick={goToSportsroom}>GAMES & SPORTS</a>
                            <a href="/Labroom" onClick={goToLabroom}>IT LAB / COMPUTER LAB</a>
                            <a href="/Medical" onClick={goToMedical}>MEDICAL / VAIDHYA VIBHAG  </a>
                            <a href="/Laboratories" onClick={goToLaboratories}>LABORATORIES</a>
                            <a href="/Library" onClick={goToLibrary}>LIBRARY</a>
                            <a href="/Auditorium" onClick={goToAuditorium}>MULTI-PURPOSE AUDITORIUM</a>
                            <a href="/Arts" onClick={goToArts}>ARTS & CRAFTS</a>
                            <a href="/Transport" onClick={goToTransport}>TRANSPORT MANAGEMENT SYSTEM</a>
                            <a href="/Boardingroom" onClick={goToBoardingroom}>BOARDING FACILITIES</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BEYOND
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/Sadacharam" onClick={goToSadacharam}>SADACHARAM</a>
                            <a href="/Svavprathana" onClick={goToSvavprathana}>SVAV PRARTHANA</a>
                            <a href="/Sanskrit" onClick={goToSanskrit}>SANSKRIT</a>
                            <a href="/Yoga" onClick={goToYoga}>YOGA</a>
                            <a href="/Archana" onClick={goToArchana}>ARCHANA</a>


                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ADDIMISSION
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/AdmissionProcess" onClick={goToAdmissionProcess}>ADMISSION PROCESS</a>
                            <a href="/Onlineenquiryform" onClick={goToOnlineenquiryform}>ONLINE ENQUIRY FORM</a>
                            <a href="/Feestructure" onClick={goToFeestructure}>FEE STRUCTURE</a>
                            <a href="/Studentenrollment" onClick={goToStudentenrollment}>STUDENT ENROLLMENT</a>
                            <a href="/Faq" onClick={goToFaq}>FAQS</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ACADEMIC
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/Cirriculum" onClick={goToCirriculum}>CURRICULUM</a>

                            <a href="/Philosophy" onClick={goToPhilosophy}>SVAV PHILOSOPHY</a>
                            {/* <a href="#">SCHOOL HOUSES</a> */}
                            <a href="#">SPECIAL AWARDS</a>
                            {/* <a href="#">CCE</a> */}
                            <a href="#">HOLIDAYS</a>
                            {/* <a href="#">ANNUAL REPORT</a> */}
                            <a href="#">DOWNLOADS</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">NEWS & EVENTS
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">OUR EVENTS</a>
                            <a href="/Gallery" onClick={goToGallery}>GALLERY</a>
                            <a href="/Halloffame" onClick={goToHalloffame}>HALL OF FAME</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">CAREER
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/ProfessionalDevelopment" onClick={goToProfessionalDevelopment}>PROFESSIONAL DEVELOPMENT</a>
                            <a href="#">JOB OPENINGS</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={handleContactUsClick}>CONTACT US
                            <i className="fa fa-caret-down" ></i>
                        </button>

                    </div>

                   
                </div>

                <div className="color">
                    <div className="line">LATEST NEWS</div>
                    <div><marquee>Job Openings: Join our Team of teachers and admin by applying at careers@svav.ind.in or hr@svav.ind.in</marquee></div>
                </div></div>
               
        </header>
    )
}

export default Header;