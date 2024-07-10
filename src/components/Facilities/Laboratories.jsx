import React from 'react';
import Slider from 'react-slick';
import { FaLightbulb, FaPeopleArrows, FaChalkboardTeacher, FaChild, FaChair, FaHome } from 'react-icons/fa';
import './Laboratories.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Laboratories-1.jpg';
import img2 from './ScienceLab.jpg';
import img3 from './bio.png';
import img4 from './phy.png';

const Laboratories = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1900,
    interval: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 630
  };

  return (
    <div>
    <div className="Laboratories-container">
      <div className="Laboratories-content">
        <span id="Laboratories">Laboratories Facilities</span>
        <div id="Laboratorieslogo">
        </div>
        <div id="Laboratoriescontents">
          <h3><FaLightbulb /> Spacious classrooms with sample lighting.</h3>
          <h3><FaPeopleArrows /> Collaborative Learning Spaces.</h3>
          <h3><FaChalkboardTeacher /> Interactive Smart Boards.</h3>
          <h3><FaChild /> Student-Centric Learning Environment.</h3>
          <h3><FaHome /> Modern and pleasing interiors.</h3>
          <h3><FaChair /> Individual seating arrangements for every child.</h3>
        </div>
      </div>
      <div className="Laboratories-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Laboratories 1" /></div>
          <div><img src={img2} alt="Laboratories 2" /></div>
          <div><img src={img3} alt="Laboratories 3" /></div>
          <div><img src={img4} alt="Laboratories 4" /></div>
        </Slider>
      </div>
    </div>
    <div>
    <div>
        <p id="Laboratoriespara">SVIS has well-equipped Science labs, Math labs, English labs/Language labs, Computer labs & Robotics labs to foster hands-on experience, enhance learning by understanding theoretical concepts and boost students’ interest and practical skills.
        <br></br> <br></br> <br></br> <br></br>
        MATH, SCIENCE & LANGUAGE LABS<br></br> <br></br>
        To look beyond the books and classroom teaching, separate laboratories for Math, Science, and Languages with the latest lab equipment & AV aids are set up to explore and promote discovery learning, trigger scientific temper and make the learning process more effective and intrinsic.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Laboratories;
