import React from 'react';
import Slider from 'react-slick';
import './Svavprathana.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Sadacharamimg1.jpg';
import img2 from './Sadacharamimg1.jpg';


const  Svavprathana = () => {
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
    <div className="Svavprathana-container">
      <div className="Svavprathana-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Sports ground 1" /></div>
          <div><img src={img2} alt="Sports ground 2" /></div>
        </Slider>
      </div>
      <div className="Svavprathana-content">
        <h1 id="Svavprathana">Svavprathana</h1>
        <div id="Svavprathanacontents">
         
          <div className="facility-item-Svavprathana">
            
            <h3>Deeparadhana-diya</h3>
          </div>
          <div className="facility-item-Svavprathana">

            <h3>Saraswathi Vandana</h3>
          </div>
          <div className="facility-item-Svavprathana">
           
            <h3>Saraswathi Stuthi:( He Hamsavahini:)</h3>
          </div>
          <div className="facility-item-Svavprathana">
            
            <h3>Brahmanaad</h3>
          </div>
          <div className="facility-item-Svavprathana">
           
            <h3>Gayathri Mantra:</h3>
          </div>
          <div className="facility-item-Svavprathana">
            
            <h3>Shanti Mantram</h3>
          </div>
          <div className="facility-item-Svavprathana">
            
            <h3>Bhojana Mantra</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Svavprathana;
