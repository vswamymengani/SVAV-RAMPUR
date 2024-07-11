import React from 'react';
import Slider from 'react-slick';
import './Art.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Artsimg1.jpg';
import img2 from './libimg2.png';
import img3 from './libimg3.jpeg';

// Import logos for the facilities
import securityLogo from './guard.png';
import foodLogo from './balanced-diet.png';
import airconLogo from './air-conditioner.png';
import pastoralCareLogo from './portal.png';
import separateHostelsLogo from './roommate.png';
import dormsLogo from './hostel.png';
import doctorLogo from './medical-team.png';

const Art = () => {
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
    <div>
    <div className="Art-container">
      <div className="Art-slider">
        <Slider {...sliderSettings}>
        <div><img src={img1} alt="Art 1" style={{ height: '420px' }}/></div>
          <div><img src={img2} alt="Art 2" /></div>
          <div><img src={img3} alt="Art 3" /></div>
        </Slider>
      </div>
      <div className="Art-content">
        <h1 id="Art">Arts & Crafts</h1>
        <div id="Artcontents">
          <div className="facility-item-Art">
            <img src={securityLogo} alt="Security" className="facility-logo-Art" />
            <h3>24/7 Security with CCTV Surveillance</h3>
          </div>
          <div className="facility-item-Art">
            <img src={foodLogo} alt="Food" className="facility-logo-Art" />
            <h3>100% Vegetarian & Hygienic Food</h3>
          </div>
          <div className="facility-item-Art">
            <img src={airconLogo} alt="Air Conditioning" className="facility-logo-Art" />
            <h3>Air-conditioned Hostel Rooms</h3>
          </div>
          <div className="facility-item-Art">
            <img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo-Art" />
            <h3>Intense Pastoral Care</h3>
          </div>
          <div className="facility-item-Art">
            <img src={separateHostelsLogo} alt="Separate Hostels" className="facility-logo-Art" />
            <h3>Separate Boy's & Girl's Hostels</h3>
          </div>
          <div className="facility-item-Art">
            <img src={dormsLogo} alt="Dorms" className="facility-logo-Art" />
            <h3>Spacious and Ventilated Dorms</h3>
          </div>
          <div className="facility-item-Art">
            <img src={doctorLogo} alt="Doctor" className="facility-logo-Art" />
            <h3>24/7 Doctor on-call</h3>
          </div>
        </div>
      </div>
    </div>
    <div>
        <p id="Artpara">
        Being involved with art, dance and music develops creativity and provides students with opportunities to experience new ways of thinking. Separate Theatres for learning and practicing these forms are provided at SVIS to respect and nurture the aesthetic sense as well as inculcate our culture in the students.
        </p>
    </div>
    </div>
  );
};

export default Art;