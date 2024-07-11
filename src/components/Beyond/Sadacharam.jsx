import React from 'react';
import Slider from 'react-slick';
import { FaLightbulb, FaPeopleArrows, FaChalkboardTeacher, FaChild, FaChair, FaHome } from 'react-icons/fa';
import './Sadacharam.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Sadacharamimg1.jpg';
import img2 from './Sadacharamimg1.jpg';
import img3 from './Sadacharamimg1.jpg';
import img4 from './Sadacharamimg1.jpg';

const Sadacharam = () => {
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
    <div className="Sadacharam-container">
      <div className="Sadacharam-content">
        <span id="Sadacharam">Sadacharam</span>
        <div id="Sadacharamlogo">
        </div>
        <div id="Sadacharamcontents">
          <h3><FaLightbulb /> Spacious classrooms with sample lighting.</h3>
          <h3><FaPeopleArrows /> Collaborative Learning Spaces.</h3>
          <h3><FaChalkboardTeacher /> Interactive Smart Boards.</h3>
          <h3><FaChild /> Student-Centric Learning Environment.</h3>
          <h3><FaHome /> Modern and pleasing interiors.</h3>
          <h3><FaChair /> Individual seating arrangements for every child.</h3>
        </div>
      </div>
      <div className="Sadacharam-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Sadacharam 1" /></div>
          <div><img src={img2} alt="Sadacharam 2" /></div>
          <div><img src={img3} alt="Sadacharam 3" /></div>
          <div><img src={img4} alt="Sadacharam 4" /></div>
        </Slider>
      </div>
    </div>
    <div>
    </div>
    <div id="Sadacharampara">
        <p>
        Sadacharam is a value-based curriculum developed by Sri Saraswathi Vidya Peetham (SSVP) to develop high moral and ethical standards amongst its students. Sadacharam denotes Sat+ Acharamu. i.e., the real way or the true principles (Sat) of living.
        <br></br><br></br>
         India has been the Janmabhoomi for Saints, Rajarshis and Brahmarshis of great calibre and nobility. To face the challenges of modern times and the western influence, Young India needs guidance and such role models to look up to.
         <br></br><br></br>
        Sri Vidyaranya International School has adopted the Sadacharam curriculum developed by SSVS, that unfolds the eminence and beauty of Indian Culture, traditions and its world perspective through carefully picked stories from mythology and history. It is believed that, Storytelling is the most powerful way to put ideas into the young minds. Through the characters and the circumstances from these stories, children relate to their daily experiences and learn the right approach and attitude towards life.
        </p>
    </div>
    </div>
  )
}

export default Sadacharam;
