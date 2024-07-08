import React, { useState, useEffect } from 'react';
import './Home.css';
import exampleImage from '../assets/school logo .jpg';
import { useNavigate } from 'react-router-dom';
import '../components/Footer/Footer.css';
import donationlogo from './donation.png';
import aluminilogo from './alumini.png';
import teacherlogo from './teacher.png';
import clglogo from './clg.png';
import studentlogo from './student (1).png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import exa from './logocandle.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import schoolCampusView from './School prayer-time-1.jpg';
import schoolCampusView1 from './School Campus-Dwaraka-1.jpg';

const Home = () => {
    const navigate = useNavigate();
  
    const goToHome = () => {
        navigate('Home');
    };
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
    const handleContactUsClick = () => {
        navigate('/contact'); // This navigates to the "/contact" route
    };
    const goToDonate = () => {
        navigate('Donate');
    };

    return (
        <div>
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

                <div class="navbar1">
                    {/* <div id="home">HOME</div> */}
                  
                    <a href="/Home" onClick="goToHome()" class="styled-link">HOME</a>

                    
                    <div class="dropdown">
                        <button class="dropbtn">ABOUT US
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="/Vidhya" onClick={goToVidhya}>VIDHYA BAHARATHI</a>
                            <a href="/Commite" onClick={goToCommitte}>EXECUTIVE COMMITEE</a>
                            <a href="/Supportus" onClick={goToSupportus}>SUPPORT US</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">FACILITIES
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="/Classroom" onClick={goToClassroom}>CATALYTIC CLASSROOMS</a>
                            <a href="/Sportsroom" onClick={goToSportsroom}>GAMES & SPORTS</a>
                            <a href="/Labroom" onClick={goToLabroom}>IT LAB / COMPUTER LAB</a>
                            <a href="#">MEDICAL / VAIDHYA VIBHAG  </a>
                            <a href="#">LABORATORIES</a>
                            <a href="#">LIBRARY</a>
                            <a href="#">MULTI-PURPOSE AUDITORIUM</a>
                            <a href="#">ARTS & CRAFTS</a>
                            <a href="#">TRANSPORT MANAGEMENT SYSTEM</a>
                            <a href="/Boardingroom" onClick={goToBoardingroom}>BOARDING FACILITIES</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">BEYOND
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">SADACHARAM</a>
                            <a href="#">SVAV PRARTHANA</a>
                            <a href="#">SANSKRIT</a>
                            <a href="#">YOGA</a>

                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">ADDIMISSION
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="/AdmissionProcess" onClick={goToAdmissionProcess}>ADMISSION PROCESS</a>
                            <a href="/Onlineenquiryform" onClick={goToOnlineenquiryform}>ONLINE ENQUIRY FORM</a>
                            <a href="#">FEE STRUCTURE</a>
                            <a href="#">STUDENT ENROLLMENT</a>
                            <a href="#">FAQS</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">ACADEMIC
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
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
                    <div class="dropdown">
                        <button class="dropbtn">NEWS & EVENTS
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">OUR EVENTS</a>
                            <a href="#">GALLERY</a>
                            <a href="#">MEDIA & PUBLICATIONS</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">CAREER
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">PROFESSIONAL DEVELOPMENT</a>
                            <a href="#">JOB OPENINGS</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn" onClick={handleContactUsClick}>CONTACT US
                            <i class="fa fa-caret-down" ></i>
                        </button>

                    </div>

                    <div class="navbar3">
                        <div id="donate">DONATE</div>
                        <div class="dropdown">
                        </div>
                    </div>
                </div>

                <div class="color">
                    <div class="line">LATEST NEWS</div>
                    <div><marquee>Job Openings: Join our Team of teachers and admin by applying at careers@svav.ind.in or hr@svav.ind.in</marquee></div>
                </div>
            </div>

            <div class="t01" >

                <div className="carousel-wrapper">
                    <Carousel
                        showArrows={true} // Display navigation arrows
                        showThumbs={false} // Hide thumbnail indicators
                        infiniteLoop={true} // Enable infinite looping
                        autoPlay={true} // Auto-play the slides
                        interval={1800} // Change slides every 5 seconds
                        showStatus={false} // Hide the current slide indicator
                        stopOnHover={true} // Stop auto-play on hover
                    >
                        {/* Slide 1 */}
                        <div className="carousel-slide">
                            {/* <h1 id="we">WELCOME TO SRI VIDYARANYA AVASA VIDYALAYAM</h1> */}
                            <div className="t1">
                                <div className="t2">
                                    <h1 id="we">WELCOME TO SRI VIDYARANYA AVASA VIDYALAYAM</h1>
                                    
                                    <h2><center><b>The opening verses of the school recited:</b></center></h2>
                                    <p className='p1'>
                                        The first school was started in 1966 at Nirmal in Adilabad district, the forest region of Andhra Pradesh, the home of
                                        Mother Basara Saraswati, jointly with the ideas of Manyashree, Kirti Seshulu. Sri Shathagopan Lakshmi Narasimhacharya, the
                                        founders of Sri Saraswati Vidyapeeth Andhra Pradesh and the Regional Secretary of Sri Saraswati Vidyapeeth. Rampur is a small
                                        village in the remote area of Hajipur mandal, in Manchiryala district while the children's sanctuaries are flourishing. Sri
                                        Vidyaranya Avasa Vidyalaya was started in Rampur village with the great aim of providing education to the surrounding people and
                                        with the good intention of providing culture along with education. This idea came to the fore when the family members of Sri Kirti
                                        Seshulu Sri Malraju Rama Rao (Sri Laxman Rao, Sri Harish Rao, Sri Venkatarao, Sri Acharya) donated five acres of land for the realization
                                        of their ideas. On 19-4-1980, Shri Raudrinama year Vaisakh Shuddha Panchami, Bhumi Pooja and foundation stone laying was done by Dr. Kona
                                        Brahmananda Rao. Later 28 acres of land was donated by the family members of Hajipur resident Shri Puskuri Chokka Rao (Shri Puskuri Surya
                                        Prakash Rao, Shri Puskuri Venkateswar Rao, Shri Puskuri Chokkarao).
                                    </p>
                                    <button id="bk">KNOW MORE</button>
                                </div>
                                <div className='container'>
                                    <img className='image2' style={{ height: "400px", width: "400px" }} src='https://svis.ind.in/wp-content/uploads/2021/11/vidyaranya_panchakosha.png' alt="School Image" />
                                </div>
                            </div>
                        </div>

                        {/* Additional Slides */}
                        <div className="carousel-slide">
                            <img src={schoolCampusView} alt="School Campus View" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="carousel-slide">
                            {/* Add additional content for other slides here */}
                            <img src={schoolCampusView1} alt="School Campus View" style={{ width: '100%', height: 'auto' }} />
                        </div>

                        {/* Add as many slides as needed */}
                    </Carousel>
                </div>

                <div class="bar">
                    <div class="design">
                    </div>
                    <div className='sectwo'>
                        <h2>Athadhi Vidyam | Aacharyaha Poorva Roopam | Anteyvasyuthara Roopam <br />| Vidya Sandhihi | Pravachanagum Sandhanam | Itydividyam ||</h2><br />
                        <p class="design">SVAV is established with the purpose to prepare children to reach high academic standards, with<br /> ancient wisdom, modern technology, and scientific temper.</p><br />
                        <p class="design">To blossom the inner potential of the child in a creative and innovative atmosphere, nurture the self-<br />exploration to enquire, to experiment, to find the truth in the best spirit and indomitable will.</p>
                    </div>
                </div><div class="c1">
                    <h2 class="c12">FACILITIES</h2>
                </div>
            </div>

            <div className='mainElement'>
                <div className='subElement'>
                    <figure class="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Digital Classrooms</h4>
                    <p style={{ textAlign: "justify" }}>The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding</p>
                </div>
                <div className='subElement1'>
                    <figure class="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Games-Sports.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Games & Sports</h4>
                    <p style={{ textAlign: "justify" }}> To stimulate competitive behavior among students and strengthen physical & mental growth SVAV offers both outdoor and indoor game facilities led by experienced</p>
                </div>
                <div className='subElement2'>
                    <figure class="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/IT-LAB-Technology-Lab.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>IT Lab / Technology Lab</h4>
                    <p style={{ textAlign: "justify" }}>A well-equipped computer lab with a good number of systems, various educational software, and online computer applications is provided to learn from basic computer skills</p>
                </div>
            </div>

            <div className='mainElement'>
                <div className='subElement3'>
                    <figure class="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/LABORATORIES.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Laboratories</h4>
                    <p style={{ textAlign: "justify" }}>SVAV has well-equipped Science labs, Math labs, English labs/Language labs, Computer labs & Robotics labs to foster hands-on experience, enhance learning </p>
                </div>
                <div className='subElement4'>
                    <figure class="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Library.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Library</h4>
                    <p style={{ textAlign: "justify" }}>An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students</p>
                </div>
                <div className='subElement5'>
                    <figure class="Element">

                        <img className='img1' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Transport Management System</h4>
                    <p style={{ textAlign: "justify" }}>SVAV1 Transport Management System is a convenience provided to our parents to facilitate a safe and easy commute for their children. </p>
                </div>
            </div>


            <footer className="footer">
                <div id="l3">
                    <img src={donationlogo} alt="C" className="link-icon" />
                    DONATION
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <img src={aluminilogo} alt="Blogs" className="link-icon" />
                    ALUMINI
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <img src={teacherlogo} alt="A" className="link-icon" />
                    OUR FACULTY
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <img src={studentlogo} alt="student" className="link-icon" />
                    STUDENTS

                </div>
                <div id="q1">
                    < div id='a19'>
                        <h2 style={{ color: 'aliceblue', textAlign: 'left' }}>Copyright @Srividyaranyaavasavidyalayam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaFacebookF color='white' size={25} />&nbsp;&nbsp;<FaInstagramSquare size={25} />&nbsp;&nbsp;
                            <FaLinkedinIn size={25} />&nbsp;&nbsp;<SiYoutubeshorts size={25} />
                        </h2>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;