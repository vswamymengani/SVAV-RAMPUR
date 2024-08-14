import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselSlider from './CarouselSlider';
import yourVideo from './homevideo.mp4';
import SpecialFonts from './SpecialFonts';
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { useState, useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();

    const handledigi = () => {
        navigate('/Classroom');
    };

    const handlegames = () => {
        navigate('/Sportsroom');
    };

    const handleitlab = () => {
        navigate('/Labroom');
    };

    const handlelab = () => {
        navigate('/Laboratories');
    };

    const handlelib = () => {
        navigate('/Library');
    };

    const handletrans = () => {
        navigate('/Transport');
    };

    const handleAimobj = () => {
        navigate('/Aimobj');
    };

    const handleag = () => {
        navigate('/Atglance');
    };

    const handleOs = () => {
        navigate('/Os');
    };

    // Scroll-up button state and functionality
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <div>
            <div className="body">
                <Popup />
                <div className='newslider'>
                    <CarouselSlider />
                </div>

                <div className="bar">
                    <div className='sectwo'>
                        <video width="60%" height="%" autoPlay loop muted>
                            <source src={yourVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className='mainElement'>
                    <div className='subElementop'>
                        <figure className="Element">
                            <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://tse4.mm.bing.net/th?id=OIP.BHkh7zuokhlSZ_4qRQyD0AHaHa&pid=Api&P=0&h=220" className="attachment-full size-full" alt="AIM & Objectives" />
                        </figure>
                        <h4 className='subspaceop' style={{ fontFamily: 'Cursive' }}>AIM & OBJECTIVES</h4>
                        <span className='op1' style={{ textAlign: "justify" }} onClick={handleAimobj}>To develop a National System of Education which would help to build a generation of youngmen and women that is<Link className='ao'>....More</Link></span>
                    </div>
                    <div className='subElement1op'>
                        <figure className="Element">
                            <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://tse1.mm.bing.net/th?id=OIP.D0-_bzmKDpTjpQeZhrltiwAAAA&pid=Api&P=0&h=220" className="attachment-full size-full" alt="At Glance" />
                        </figure>
                        <h4 className='subspaceop' style={{ fontFamily: 'Cursive' }}>AT GLANCE</h4>
                        <span className='op1' style={{ textAlign: "justify" }} onClick={handleag}> Sri Vidyaranya Avasa Vidyalayam at Chokkaram Nagar, Rampur is an English medium school offering education from Nursery to 10th grade<Link className='ao'>....More</Link></span>
                    </div>
                    <div className='subElement2op'>
                        <figure className="Element">
                            <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://as2.ftcdn.net/v2/jpg/01/33/78/75/1000_F_133787583_DbQZgh1QPWdqMqbISwcCchzC23Fv0gO3.jpg" className="attachment-full size-full" alt="Organizational Structure" />
                        </figure>
                        <h4 className='subspaceop' style={{ fontFamily: 'Cursive' }}>ORGANIZATIONAL STRUCTURE</h4>
                        <span className='op1' style={{ textAlign: "justify" }} onClick={handleOs}>Vidya Bharati Akhila Bharatiya Shiksha Sansthan is registered under the society registration act<Link className='ao'>....More</Link></span>
                    </div>
                </div>

                <div className="c1f">
                    <div>
                        <span className="c132"><SpecialFonts /></span>
                    </div>
                </div>

                <div className='mainElement'>
                    <div className='subElement'>
                        <figure className="Element">
                            <button className="bc">
                                <img decoding='async' onClick={handledigi} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" className="attachment-fullsize-full" alt="Digital Classrooms" />
                            </button>
                        </figure>
                        <h4 className='subspace'>Digital Classrooms</h4>
                        <p className='cards'>The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding</p>
                    </div>
                    <div className='subElement'>
                        <figure className="Element">
                            <button className='bc'>
                                <img decoding='async' onClick={handlegames} src="https://svis.ind.in/wp-content/uploads/2021/10/Games-Sports.png" className="attachment-full size-full" alt="Games & Sports" />
                            </button>
                        </figure>
                        <h4 className='subspace'>Games & Sports</h4>
                        <p className='cards'>To stimulate competitive behavior among students and strengthen physical & mental growth SVAV offers both outdoor and indoor game facilities led by experienced</p>
                    </div>
                    <div className='subElement'>
                        <figure className="Element">
                            <button className='bc'>
                                <img decoding='async' onClick={handleitlab} src="https://svis.ind.in/wp-content/uploads/2021/10/IT-LAB-Technology-Lab.png" className="attachment-full size-full" alt="IT Lab / Technology Lab" />
                            </button>
                        </figure>
                        <h4 className='subspace'>IT Lab / Technology Lab</h4>
                        <p className='cards'>A well-equipped computer lab with a good number of systems, various educational software, and online computer applications is provided to learn from basic computer skills</p>
                    </div>
                </div>

                <div className='mainElement'>
                    <div className='subElement'>
                        <figure className="Element">
                            <button className='bc'>
                                <img decoding='async' onClick={handlelab} src="https://svis.ind.in/wp-content/uploads/2021/10/LABORATORIES.png" className="attachment-full size-full" alt="Laboratories" />
                            </button>
                        </figure>
                        <h4 className='subspace'>Laboratories</h4>
                        <p className='cards'><span>SVAV has well-equipped Science labs, Math labs, English labs/Language labs, Computer labs & Robotics labs to foster hands-on experience, enhance learning</span></p>
                    </div>
                    <div className='subElement'>
                        <figure className="Element">
                            <button className='bc'>
                                <img decoding='async' onClick={handlelib} src="https://svis.ind.in/wp-content/uploads/2021/10/Library.png" className="attachment-full size-full" alt="Library" />
                            </button>
                        </figure>
                        <h4 className='subspace'>Library</h4>
                        <p className='cards'><span>An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students</span></p>
                    </div>
                    <div className='subElement'>
                        <figure className="Element">
                            <button className='bc'>
                                <img decoding='async' onClick={handletrans} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" className="attachment-full size-full" alt="Transport Management System" />
                            </button>
                        </figure>
                        <h4 className='subspace'>Transport Management System</h4>
                        <p className='cards'><span>School Bus service is available to the students. Well maintained, regularly inspected, and tested fleet of buses with a certified and trained driving crew is employed</span></p>
                    </div>
                </div>
            </div>

            <div>
                <a href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> </a>
                <a href="https://api.whatsapp.com/send?phone=919502116793&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
            </div>

            {/* Scroll-up button */}
            <button
                onClick={scrollToTop}
                className="scrollUpButton"
                style={{ display: showScroll ? 'inline' : 'none' }}
            >
                &#8679;
            </button>
        </div>
    );
};

export default Home;
