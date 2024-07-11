import React from 'react';
import Slider from 'react-slick';
import { FaLightbulb, FaPeopleArrows, FaChalkboardTeacher, FaChild, FaChair, FaHome } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Multi-Purpose1.jpg';
import img2 from './ScienceLab.jpg';
import img3 from './bio.png';
import img4 from './phy.png';
import './Auditorium.css';

const Auditorium = () => {
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
    <div className="Auditorium-container">
      <div className="Auditorium-content">
        <span id="Auditorium">Laboratories Facilities</span>
        <div id="Auditoriumlogo">
        </div>
        <div id="Auditoriumcontents">
          <h3><FaLightbulb /> Spacious classrooms with sample lighting.</h3>
          <h3><FaPeopleArrows /> Collaborative Learning Spaces.</h3>
          <h3><FaChalkboardTeacher /> Interactive Smart Boards.</h3>
          <h3><FaChild /> Student-Centric Learning Environment.</h3>
          <h3><FaHome /> Modern and pleasing interiors.</h3>
          <h3><FaChair /> Individual seating arrangements for every child.</h3>
        </div>
      </div>
      <div className="Auditorium-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1}  alt="Laboratories 1" /></div>
          <div><img src={img2} alt="Laboratories 2" /></div>
          <div><img src={img3} alt="Laboratories 3" /></div>
          <div><img src={img4} alt="Laboratories 4" /></div>
        </Slider>
      </div>
    </div>
    <div>
    <div>
        <p id="Auditoriumpara">Every school day, SVIS teachers strive to create an exciting and inspiring learning experience for every child. Our school is a stage for most of the exciting days, from eye-opening discoveries in the science labs to great sporting victories and thrilling performances on stage, multidisciplinary exhibition, science exhibition, health camps, indoor gamesetcand our 300-seater Auditoriumwith built-in stage is a one stop platform to expose such activities.
     <br></br><br></br>
It is used for all types of formal assembly, lectures, award ceremonies, dramatic plays, musical theatre productions, band, dance competitions, and so on. For all events, everyone in the room hears clearly and enjoyably, everything that is presented.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Auditorium;
