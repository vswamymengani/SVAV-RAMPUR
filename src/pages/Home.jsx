import React, { useState, useEffect } from 'react';
import './Home.css';
import exampleImage from '../assets/school logo .jpg';
import { useNavigate } from 'react-router-dom';
import ProfileCards from './ProfileCards';
import Stepper from './Stepper';
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


const profile = [
    {
        "id": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggcbrkAZTmmZipRq_YG3H9mngpEw-_SFryw&s",
        "name": "Nishmitha ",
        "class": "Grade 11",
        "Subject": "Science",
        "Award": "Winner of National Science olympiad"
    },
    {
        "id": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XsWDDZIJTjOB98-ALNDeWgZ3VUZnGMApsknXmkrwcOLk0dG2x5axeNw_oz0v8tq9J-U&usqp=CAU",
        "name": "Raghunandan raja",
        "class": "Grade 11",
        "Subject": "Commerce",
        "Award": "Winner of International English Olympiad"
    },
    {
        "id": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCTfI_EdqlIv0lDGSnpGcbJ5QlHCTRGFjiUW9-bLhXyuztsvXskIOyE7iQTjBAAp1Pyc&usqp=CAU",
        "name": "Aami Rajiv",
        "class": "Grade 11",
        "Subject": "Science",
        "Award": "Winner of International Mathematics Olympiad"
    },
    {
        "id": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BNzArdoMlz39u6YeXr7qL3lAX6hEE65TDYyD_nY8af3WxTdAm4aS_gPD-RgvXQgiAT8&usqp=CAU",
        "name": "Nishmitha",
        "class": "Grade 11",
        "Subject": "Science",
        "Award": "Winner of National Science Olympiad"
    }
]
const steps = [
    'Step 1: Personal Information',
    'Step 2: Account Details',
    'Step 3: Confirm Information',
    'Step 4: Complete'
];

const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setProfiles(profile);
    }, [])


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

    const goToDonate = () => {
        navigate('Donate');
    };

    return (
        <div>
            <div id="position">
                <div className='Header'>
                    <div className='section1'>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                        <img className='image' src={exampleImage} alt="Example4" />
                            <div style={{ flexDirection: "column", textAlign: "center" }}>
                            <h4 className='subtitles'>SRI VIDYARANYA AVASA VIDYALAYAM(SVAV)</h4>
                            <h4 className='subtitles'></h4>
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
                <figure class="image6">

                    <img class="image02" decoding='async' width="60px" height="90px"  src="https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/117309673_123421515823889_7191793120636498491_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fj7ML8xXo_0Q7kNvgHs3T9L&_nc_ht=scontent.fhyd14-1.fna&oh=00_AYBkichpHeKRDwacf0dwvlYMF3v-0dvFmcoCu4j694v4aQ&oe=66869991"></img>

                </figure>
            </div>
        
            <div class="navbar1">
             <div id="home">HOME</div> 
                <div class="dropdown">
                    <button class="dropbtn">ABOUT US
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="/Vidhya" onClick={goToVidhya}>Vidhya Baharathi</a>
                        <a href="/Commite" onClick={goToCommitte}>Excutive Committee</a>
                        <a href="/Supportus" onClick={goToSupportus}>Support us</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">FACILITIES
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="/Classroom" onClick={goToClassroom}>CATALYTIC CLASSROOMS</a>
                        <a href="#">GAMES & SPORTS</a>
                        <a href="#">IT LAB / COMPUTER LAB</a>
                        <a href="#">MEDICAL / VAIDHYA VIBHAG  </a>
                        <a href="#">LABORATORIES</a>
                        <a href="#">LIBRARY</a>
                        <a href="#">MULTI-PURPOSE AUDITORIUM</a>
                        <a href="#">ARTS & CRAFTS</a>
                        <a href="#">TRANSPORT MANAGEMENT SYSTEM</a>
                        <a href="#">BOARDING FACILITIES</a>
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
                        <a href="#">ADMISSION PROCESS</a>
                        <a href="#">ONLINE ENQUIRY</a>
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
                        <a href="#">CURRICULUM</a>

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
                <div class="navbar1">
                <div id="contactus">CONTACT US</div> 
                    <div class="dropdown">
                    </div>
                </div>
                <div class="navbar1">
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
                <div class="t"><h1>WELCOME TO SRI VIDYARANYA AVASA VIDYALAYAM</h1>
                    <div class="t1">
                        <div class="t2">
                            <h5><b>School Objective:-</b></h5>
                            <p style={{ textAlign: "justify" }}>In the field called Rampur School, if you sow seeds of letters, it will becaome a plants called students. if you water these plants by education, the flowers of success will bloom and the fruits of fame will sprout.
                                <h5><b>The opening verses of the school recited:-</b></h5>
                                The first school was started in 1966 at Nirmal in Adilabad district, the forest region of Andhra Pradesh, the home of Mother Basara Saraswati, jointly with the ideas of Manyashree, Kirti Seshulu. Sri Shathagopan Lakshmi Narasimhacharya, the founders of Sri Saraswati Vidyapeeth Andhra Pradesh and the Regional Secretary of Sri Saraswati Vidyapeeth.
                                Rampur is a small village in the remote area of   Hajipur mandal, in Manchiryala district while the children's sanctuaries are flourishing. Sri Vidyaranya Avasa Vidyalaya was started in Rampur village with the great aim of providing education to the surrounding people and with the good intention of providing culture along with education.
                                This idea came to the fore when the family members of Sri Kirti Seshulu Sri Malraju Rama Rao (Sri Laxman Rao, Sri Harish Rao, Sri Venkatarao, Sri Acharya) donated five acres of land for the realization of their ideas.
                                On 19-4-1980, Shri Raudrinama year Vaisakh Shuddha Panchami, Bhumi Pooja and foundation stone laying was done by Dr. Kona Brahmananda Rao.
                                Later 28 acres of land was donated by the family members of Hajipur resident Shri Puskuri Chokka Rao(Shri Puskuri Surya Prakash Rao, Shri Puskuri Venkateswar Rao, Shri Puskuri chokkarao).
                            </p>
                            <button>KNOW MORE</button>
                        </div>
                        <div className='container'>
                            <img className='image2' style={{ height: "300px" }} src='https://svis.ind.in/wp-content/uploads/2021/11/vidyaranya_panchakosha.png' />
                        </div>


                    </div>
                </div>

                <div class="bar">
                    <div class="design">
                    </div>
                    <div className='sectwo'>
                        <h2>Athadhi Vidyam | Aacharyaha Poorva Roopam | Anteyvasyuthara Roopam <br />| Vidya Sandhihi | Pravachanagum Sandhanam | Itydividyam ||</h2><br />
                        <p class="design">SVAV is established with the purpose to prepare children to reach high academic standards, with<br /> ancient wisdom, modern technology, and scientific temper.</p><br />
                        <p class="design">To blossom the inner potential of the child in a creative and innovative atmosphere, nurture the self-<br />exploration to enquire, to experiment, to find the truth in the best spirit and indomitable will.</p>
                    </div>
                </div>
                <div class="c1">
                    <h2 class="c12">FACILITIES</h2>
                </div>
            </div>

            <div className='mainElement'>
                <div className='subElement'>
                    <figure class="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Digital Classrooms</h4>
                    <p style={{ textAlign: "justify" }}>The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding, planning, and developing environments</p>
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
                    <p style={{ textAlign: "justify" }}>SVAV has well-equipped Science labs, Math labs, English labs/Language labs, Computer labs & Robotics labs to foster hands-on experience, enhance learning by understanding theoretical concepts and boost students</p>
                </div>
                <div className='subElement4'>
                    <figure class="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Library.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Library</h4>
                    <p style={{ textAlign: "justify" }}>An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students build fluency and become</p>
                </div>
                <div className='subElement5'>
                    <figure class="Element">

                        <img className='img1' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Transport Management System</h4>
                    <p style={{ textAlign: "justify" }}>SVAV1 Transport Management System is a convenience provided to our parents to facilitate a safe and easy commute for their children. 5 buses and 1 winger will ply in 6 routes.</p>
                </div>
            </div>
        
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
     <h2 style={{color:'aliceblue',textAlign:'left'}}>Copyright @Srividyaranyaavasavidyalayam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <FaFacebookF color='white' size={25}/>&nbsp;&nbsp;<FaInstagramSquare size={25} />&nbsp;&nbsp;
     <FaLinkedinIn  size={25}/>&nbsp;&nbsp;<SiYoutubeshorts size={25} />
                 </h2>
                  </div></div>
    </footer>
        </div>
    )
}

export default Home;
