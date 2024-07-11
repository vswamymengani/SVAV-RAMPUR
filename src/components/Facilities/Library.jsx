import React from 'react';
import Slider from 'react-slick';
import './Library.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './libimg1.jpeg';
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

const Library = () => {
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
    <div className="Library-container">
      <div className="Library-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Library 1" /></div>
          <div><img src={img2} alt="Library 2" /></div>
          <div><img src={img3} alt="Library 3" /></div>
        </Slider>
      </div>
      <div className="Library-content">
        <h1 id="Library">Library Facilities</h1>
        <div id="Librarycontents">
          <div className="facility-item-Library">
            <img src={securityLogo} alt="Security" className="facility-logo-Library" />
            <h3>24/7 Security with CCTV Surveillance</h3>
          </div>
          <div className="facility-item-Library">
            <img src={foodLogo} alt="Food" className="facility-logo-Library" />
            <h3>100% Vegetarian & Hygienic Food</h3>
          </div>
          <div className="facility-item-Library">
            <img src={airconLogo} alt="Air Conditioning" className="facility-logo-Library" />
            <h3>Air-conditioned Hostel Rooms</h3>
          </div>
          <div className="facility-item-Library">
            <img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo-Library" />
            <h3>Intense Pastoral Care</h3>
          </div>
          <div className="facility-item-Library">
            <img src={separateHostelsLogo} alt="Separate Hostels" className="facility-logo-Library" />
            <h3>Separate Boy's & Girl's Hostels</h3>
          </div>
          <div className="facility-item-Library">
            <img src={dormsLogo} alt="Dorms" className="facility-logo-Library" />
            <h3>Spacious and Ventilated Dorms</h3>
          </div>
          <div className="facility-item-Library">
            <img src={doctorLogo} alt="Doctor" className="facility-logo-Library" />
            <h3>24/7 Doctor on-call</h3>
          </div>
        </div>
      </div>
    </div>
    <div>
        <p id="libconn">
        An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students build fluency and become self-reliant readers.
           <br></br><br></br><br></br>
           It plays an important part in the learning process of the school as it’s a counterpart of the schools infrastructure. This well stocked libraryis located in a quiet and calm place with a soothing ambience for the students to concentrate better.
        </p>
    </div>
    </div>
  );
};

export default Library;