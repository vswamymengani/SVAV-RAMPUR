import React from 'react';
import Slider from 'react-slick';
import { FaVolleyballBall, FaTableTennis, FaBasketballBall, FaSwimmer, FaSkating, FaFootballBall, FaRunning } from 'react-icons/fa';
import { GiCricketBat, GiTennisRacket, GiTeamDowngrade } from 'react-icons/gi'; // Importing from Game Icons for cricket, badminton, and kho-kho
import './sportsroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Sports-ground-1.jpg';
import img2 from './Sports-ground-2.jpg';

const Sportsroom = () => {
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
    <div className="sports-container">
      <div className="sports-content">
        <span id="spo">Sportsroom Facilities</span>
        <div id="spocontents">
          <div className="facility-item">
            <FaVolleyballBall className="facility-icon" />
            <h3>Volleyball Court</h3>
          </div>
          <div className="facility-item">
            <FaRunning className="facility-icon" />
            <h3>Kabaddi Ground</h3>
          </div>
          <div className="facility-item">
            <GiTeamDowngrade className="facility-icon" />
            <h3>Kho-Kho Ground</h3>
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
          <div><img className="sports-img" src={img1} alt="Sports ground 1" /></div>
          <div><img className="sports-img" src={img2} alt="Sports ground 2" /></div>
        </Slider>
      </div>
    </div>
    <div id="spapara">
        <p>To stimulate competitive behavior among students and strengthen physical & mental
           growth SVIS offers both outdoor and indoor game facilities led by experienced and 
           competent coaches. Running track, Basketball, Football, Kabaddi, Kho-kho, Tennicoit, Shuttle, Skipping, Carroms, Chess, etc.
        </p>  
    </div>
    </div>
  );
};

export default Sportsroom;
