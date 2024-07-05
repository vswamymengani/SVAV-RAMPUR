import React from 'react';
import Slider from 'react-slick';
import { FaVolleyballBall, FaTableTennis, FaBasketballBall, FaSwimmer, FaSkating, FaFootballBall } from 'react-icons/fa';
import { GiCricketBat, GiTennisRacket } from 'react-icons/gi'; // Importing from Game Icons for cricket and badminton
import './Labroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Sports-ground-1.jpg';
import img2 from './Sports-ground-2.jpg';

const Labroom = () => {
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
    <div className="sports-container">
      <div className="sports-content">
        <h1 id="spo">Sportsroom Facilities</h1>
        <div id="spocontents">
          <div className="facility-item">
            <FaVolleyballBall className="facility-icon" />
            <h3>Volleyball Court</h3>
          </div>
          <div className="facility-item">
            <GiCricketBat className="facility-icon" />
            <h3>Cricket Practice Net</h3>
          </div>
          <div className="facility-item">
            <FaFootballBall className="facility-icon" />
            <h3>Football Field</h3>
          </div>
          <div className="facility-item">
            <FaTableTennis className="facility-icon" />
            <h3>Table Tennis</h3>
          </div>
          <div className="facility-item">
            <FaBasketballBall className="facility-icon" />
            <h3>Basketball Court</h3>
          </div>
          <div className="facility-item">
            <GiTennisRacket className="facility-icon" />
            <h3>Badminton Court</h3>
          </div>
          <div className="facility-item">
            <FaSkating className="facility-icon" />
            <h3>Skating Rink</h3>
          </div>
          <div className="facility-item">
            <FaSwimmer className="facility-icon" />
            <h3>Swimming Pool</h3>
          </div>
        </div>
      </div>
      <div className="sports-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Sports ground 1" /></div>
          <div><img src={img2} alt="Sports ground 2" /></div>
        </Slider>
      </div>
    </div>
  );
};

export default Labroom;
