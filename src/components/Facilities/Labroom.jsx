import React from 'react';
import Slider from 'react-slick';
import { FaVolleyballBall, FaTableTennis, FaBasketballBall, FaSwimmer, FaSkating, FaFootballBall, FaRunning } from 'react-icons/fa';
import { GiCricketBat, GiTennisRacket, GiTeamDowngrade } from 'react-icons/gi'; // Importing from Game Icons for cricket, badminton, and kho-kho
import './Labroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './IT-Computer-lab.jpg';
import img2 from './Computer Lab (1).jpg';

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
    <div>
    <div className="labroom-container">
      <div className="labroom-content">
        <span className="lab">Labroom Facilities</span>
        <div id="labcontents">
          <div className="facility-iteml">
            <FaVolleyballBall className="facility-iconl" />
            <h3>Volleyball Court</h3>
          </div>
          <div className="facility-iteml">
            <FaRunning className="facility-iconl" />
            <h3>Kabaddi Ground</h3>
          </div>
          <div className="facility-iteml">
            <GiTeamDowngrade className="facility-iconl" />
            <h3>Kho-Kho Ground</h3>
          </div>
          <div className="facility-iteml">
            <GiCricketBat className="facility-iconl" />
            <h3>Cricket Practice Net</h3>
          </div>
          <div className="facility-iteml">
            <FaFootballBall className="facility-iconl" />
            <h3>Football Field</h3>
          </div>
          <div className="facility-iteml">
            <FaTableTennis className="facility-iconl" />
            <h3>Table Tennis</h3>
          </div>
          <div className="facility-iteml">
            <FaBasketballBall className="facility-iconl" />
            <h3>Basketball Court</h3>
          </div>
          <div className="facility-iteml">
            <GiTennisRacket className="facility-iconl" />
            <h3>Badminton Court</h3>
          </div>

        </div>
      </div>
      <div className="labroom-slider">
        <Slider {...sliderSettings}>
          <div><img className="labroom-img" src={img1} alt="Labroom 1" /></div>
          <div><img className="labroom-img" src={img2} alt="Labroom 2" /></div>
        </Slider>
      </div>
    </div>
    <div id="labpara">
        <p>A well-equipped computer lab with a good number of systems, various educational 
          software, and online computer applications is provided to learn from basic computer
           skills to the latest technologies such as coding, artificial 
          intelligence, robotics, data analytics, etc.
        </p>  
    </div>
    </div>
  );
};

export default Labroom;
