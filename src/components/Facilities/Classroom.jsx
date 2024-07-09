import React from 'react';
import Slider from 'react-slick';
import { FaLightbulb, FaPeopleArrows, FaChalkboardTeacher, FaChild, FaChair, FaHome } from 'react-icons/fa';
import './classroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Classroom-1.jpg';
import img2 from './Classroom-2.jpg';
import img3 from './Classroom-3.jpg';

const Classroom = () => {
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
    <div className="classroom-container">
      <div className="classroom-content">
        <h1 id="cls">Classroom Facilities</h1>
        <div id="clslogo">
        </div>
        <div id="clscontents">
          <h3><FaLightbulb /> Spacious classrooms with sample lighting.</h3>
          <h3><FaPeopleArrows /> Collaborative Learning Spaces.</h3>
          <h3><FaChalkboardTeacher /> Interactive Smart Boards.</h3>
          <h3><FaChild /> Student-Centric Learning Environment.</h3>
          <h3><FaHome /> Modern and pleasing interiors.</h3>
          <h3><FaChair /> Individual seating arrangements for every child.</h3>
        </div>
      </div>
      <div className="classroom-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Classroom 1" /></div>
          <div><img src={img2} alt="Classroom 2" /></div>
          <div><img src={img3} alt="Classroom 3" /></div>
        </Slider>
      </div>
    </div>
  )
}

export default Classroom;
