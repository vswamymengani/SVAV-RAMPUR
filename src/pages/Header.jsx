import './Home.css';
import { useNavigate } from 'react-router-dom';
import '../components/Footer/Footer.css';
import exampleImage from '../assets/school logo .jpg';
import exa from './logocandle.png';


const Header = () => {
    const navigate = useNavigate();
  
    
    const goToVidhya = () => {
        navigate('Vidhya');
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
    const goToBoardingroom = () => {
        navigate('Boardingroom');
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
    const goToHalloffame = () => {
        navigate('Halfoffame');
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
                                    <span className="inline-text">SRI VIDYARANYA AVASA VIDYALAYAM<br></br> (SVAV)</span>
                                </h4>


                                <h4 className='sub1'>DAY & RESIDENTIAL</h4>
                                <h4 className='subbar'>Gobal competence with ancient wisdom</h4>
                            </div>
                        </div>
                        <b className='clgCode'>UDISE Code:  36230301739</b>
                    </div>
                    <div className='section2'>
                        <span className="title">Online_Enquiry</span>
                        <span className="title">Alumni_details</span>
                        <span className="title">Download_Brochure</span>
                        <span className="title">News_Letter</span>
                    </div>
                    <div className='section3'>
                        <span>CONTACT NO - +91 9502116793</span>
                        <span>MAIL ID-info@svav.ind.in</span><br />
                        <b className='code'>Proc.No. RR-GDP 007-0019</b>
                    </div>

                    <img src={exa} alt="Example" style={{ width: '100px', height: '90px', marginTop: '40px', marginRight: '-20px' }} />
                </div> 
              
                <div className="navbar1">
                    
                  
                    <a href="/#" onClick="goToHome()" className="styled-link">HOME</a>

                    
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
                            <a href="#">ARTS & CRAFTS</a>
                            <a href="#">TRANSPORT MANAGEMENT SYSTEM</a>
                            <a href="/Boardingroom" onClick={goToBoardingroom}>BOARDING FACILITIES</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BEYOND
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">SADACHARAM</a>
                            <a href="#">SVAV PRARTHANA</a>
                            <a href="#">SANSKRIT</a>
                            <a href="#">YOGA</a>

                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ADDIMISSION
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/AdmissionProcess" onClick={goToAdmissionProcess}>ADMISSION PROCESS</a>
                            <a href="/Onlineenquiryform" onClick={goToOnlineenquiryform}>ONLINE ENQUIRY FORM</a>
                            <a href="#">FEE STRUCTURE</a>
                            <a href="#">STUDENT ENROLLMENT</a>
                            <a href="#">FAQS</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ACADEMIC
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/Cirriculum" onClick={goToCirriculum}>CURRICULUM</a>

                            <a href="#">SVAV PHILOSOPHY</a>
                            <a href="#">SCHOOL HOUSES</a>
                            <a href="#">SPECIAL AWARDS</a>
                            <a href="#">CCE</a>
                            <a href="#">HOLIDAYS</a>
                            <a href="#">ANNUAL REPORT</a>
                            <a href="#">DOWNLOADS</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">NEWS & EVENTS
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">OUR EVENTS</a>
                            <a href="#">GALLERY</a>
                            <a href="/Halloffame" onClick={goToHalloffame}>HALL OF FAME</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">CAREER
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">PROFESSIONAL DEVELOPMENT</a>
                            <a href="#">JOB OPENINGS</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={handleContactUsClick}>CONTACT US
                            <i className="fa fa-caret-down" ></i>
                        </button>

                    </div>

                    <div className="navbar3">
                    <a href="/donate" onClick="goToDonate()" className="styled-link">DONATE</a>

                        <div className="dropdown">
                        </div>
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