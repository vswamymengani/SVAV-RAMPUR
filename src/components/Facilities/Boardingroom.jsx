import React from 'react';
import Slider from 'react-slick';
import './Boardingroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Boarding campus-Ayodya.jpg';
import img2 from './Boarding campus-ayodya-2.jpg';

// Import logos for the facilities
import securityLogo from './guard.png';
import foodLogo from './balanced-diet.png';
import airconLogo from './air-conditioner.png';
import pastoralCareLogo from './portal.png';
import separateHostelsLogo from './roommate.png';
import dormsLogo from './hostel.png';
import doctorLogo from './medical-team.png';

const Boardingroom = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 630,
  };

  return (
    <div className="boardingroom-container">
      <div className="boardingroom-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Sports ground 1" /></div>
          <div><img src={img2} alt="Sports ground 2" /></div>
        </Slider>
      </div>
      <div className="boardingroom-content">
        <h1 id="boa">Residential Facilities</h1>
        <div id="boacontents">
          <div className="facility-item">
            <img src={securityLogo} alt="Security" className="facility-logo" />
            <h3>24/7 Security with CCTV Surveillance</h3>
          </div>
          <div className="facility-item">
            <img src={foodLogo} alt="Food" className="facility-logo" />
            <h3>100% Vegetarian & Hygienic Food</h3>
          </div>
          <div className="facility-item">
            <img src={airconLogo} alt="Air Conditioning" className="facility-logo" />
            <h3>Air-conditioned Hostel Rooms</h3>
          </div>
          <div className="facility-item">
            <img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo" />
            <h3>Intense Pastoral Care</h3>
          </div>
          <div className="facility-item">
            <img src={separateHostelsLogo} alt="Separate Hostels" className="facility-logo" />
            <h3>Separate Boy's & Girl's Hostels</h3>
          </div>
          <div className="facility-item">
            <img src={dormsLogo} alt="Dorms" className="facility-logo" />
            <h3>Spacious and Ventilated Dorms</h3>
          </div>
          <div className="facility-item">
            <img src={doctorLogo} alt="Doctor" className="facility-logo" />
            <h3>24/7 Doctor on-call</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boardingroom;
