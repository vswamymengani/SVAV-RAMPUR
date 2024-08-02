import React from 'react';
import Slider from 'react-slick';
import { FaTree, FaSnowflake, FaTv, FaVideo, FaUniversity, FaChair } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Multi-Purpose1.jpg';
import img2 from './auditorium1.jpg';
import img3 from './auditorium2.jpg';
import img4 from './auditorium3.jpg';
import img5 from './auditorium4.jpg';
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
    autoplaySpeed: 630,
    arrows: false
  };

  return (
    <div>
    <div className="Auditorium-container">
      <div className="Auditorium-content">
        <span id="Auditorium">Auditorium</span>
        <div id="Auditoriumlogo">
        </div>
        <div id="Auditoriumcontents">
        <h3><FaTree /> Spacious Open-air Auditorium.</h3>
      <h3><FaSnowflake /> Air-conditioned seminar hall.</h3>
      <h3><FaTv /> Equipped with Sound system,LCD projector.</h3>
      <h3><FaVideo /> Audio video presentation facility.</h3>
      <h3><FaUniversity /> Hosts to several workshops, cultural & curricular events.</h3>
      <h3><FaChair /> Individual seating arrangements for every child.</h3>
        </div>
      </div>
      <div className="Auditorium-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="lab 1 " style={{ height: '70.1vh' }} /></div>
          <div><img src={img2} alt="lab 1 " style={{ height: '70.1vh' }} /></div>
          <div><img src={img3} alt="lab 1 " style={{ height: '70.1vh' }} /></div>
          <div><img src={img4} alt="lab 1 " style={{ height: '70.1vh' }} /></div>
          <div><img src={img5} alt="lab 1 " style={{ height: '70.1vh' }} /></div>
        </Slider>
      </div>
    </div>
    <div>
    <div id="Auditoriumpara">
        <span>Every school day, SVAV teachers strive to create an exciting and inspiring learning experience for every child. Our school is a stage for most of the exciting days, from eye-opening discoveries in the science labs to great sporting victories and thrilling performances on stage, multidisciplinary exhibition, science exhibition, health camps, indoor gamesetcand our 300-seater Auditoriumwith built-in stage is a one stop platform to expose such activities.
     <br></br><br></br>
It is used for all types of formal assembly, lectures, award ceremonies, dramatic plays, musical theatre productions, band, dance competitions, and so on. For all events, everyone in the room hears clearly and enjoyably, everything that is presented.<br></br><br></br>
<center><div id="auditoriumimg1"></div></center><br></br><br></br>
SVAV hosts to several conferences, workshops, cultural and curricular events every year. Most of these are hosted in collaboration with Vidyapeeth, RSS and private companies, industries and academic institutions. Hence, a wide choice of modern conference facilities has been meticulously planned and incorporated into the new campus
        </span>
      </div>
    </div>
    </div>
  )
}

export default Auditorium;
