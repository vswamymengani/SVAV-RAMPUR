import React from 'react';
import Slider from 'react-slick';
import './Yoga.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Sadacharamimg1.jpg';
import img2 from './Sadacharamimg1.jpg';


const  Yoga = () => {
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
      </div></div>
      <div id="Sadacharampara"> 
        <p>
        Derived from the Sanskrit word ‘yuj’ which means ‘to unite or integrate’, yoga is a 5,000-year-old Indian body of knowledge. Yoga is all about harmonizing the body with the mind and breath through the means of various breathing exercises, yoga poses (asanas) and meditation.
<br></br><br></br>
Yoga is in place at SVIS to focus more on self-awareness and build self-esteem.  Performing Yoga in a classical Indian methodology under the guidance of an expert is well aligned with the curriculum.
<br></br><br></br>
Through regular yoga classes that include practice and theory, students are encouraged to adopt a holistic way of living. Yoga helps students in reducing stress and adding confidence that further enable them to think with clarity and produce a sense of peace. Students also find that yoga helps in controlling emotions and increases the ability to deal with difficult situations.
        </p>
      </div>
    </div>
  );
};

export default Yoga;
