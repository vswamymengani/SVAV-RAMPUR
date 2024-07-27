import React from 'react';
import Slider from 'react-slick';
import { FaLightbulb, FaPeopleArrows, FaChalkboardTeacher, FaChild, FaChair, FaHome } from 'react-icons/fa';
import './classr.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Classroom-1.jpg';
import img2 from './Classroom-2.jpg';
import img3 from './Classroom-3.jpg';
import img4 from './clsimg1.jpg';
import img5 from './clsimg2.jpg';


const Sanskrit = () => {
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
        <span id="Sadacharam">Sanskrit</span>
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
        Sanskrit was considered as “Dev Bhasha“, “Deva vani” or the language of the Gods by ancient Indians. The word sanskrita, means “refined” or “purified”. It is made up of the primordial sounds, and is developed systematically to include the natural progressions of sounds as created in the human mouth. Anyone attempting to understand Hinduism should have a working knowledge of Sanskrit. Most modern Indian languages have been directly derived from, or strongly influenced by Sanskrit.
 <br></br> <br></br>
The efficiency of the Sanskrit language is such that, just uttering the sounds(mantras) will purify the human system. Learning Sanskrit at an early age, helps in improving memory and increases the size of the brain regions associated with cognitive function. Also, the Devanagari script and spoken Sanskrit are the two best ways for a child to overcome stiffness of fingers and the tongue. Today’s European languages do not use many parts of the tongue and mouth while speaking or many finger movements while writing, whereas Sanskrit helps immensely to develop cerebral dexterity through its phonetics. Sanskrit having gained the recognition as the best language for Artificial Intelligence, is now a much sought-after language worldwide.
<br></br> <br></br>
Sri Vidyaranya International School takes it in its stride to not only revive this ancient and invaluable resource but also to equip its students with a tool to decode the ancient wisdom and prepare them for futuristic jobs and research opportunities.
        </p>
    </div>
    </div>
  )
}

export default Sanskrit;
