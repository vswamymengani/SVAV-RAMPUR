import React from 'react';
import Slider from 'react-slick';
import './Labroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './IT-Computer-lab.jpg';
import img2 from './Computer Lab (1).jpg';
import { FaWifi } from 'react-icons/fa';
import { FaVolleyballBall, FaDesktop, FaFileAlt, FaPrint, FaChalkboard, FaChair, FaSnowflake,  FaTools } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';


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
  <FaWifi className="facility-iconl" />
  <h3>Dedicated leased line for Internet connectivity</h3>
</div>
<div className="facility-iteml">
  <FaDesktop className="facility-iconl" />
  <h3>30 64-bit high-quality LED monitors PCs in each lab</h3>
</div>
<div className="facility-iteml">
  <FaFileAlt className="facility-iconl" />
  <h3>All latest licensed software like Notepad++, Ms office, Visual Studio. Etc..</h3>
</div>
<div className="facility-iteml">
  <GiLightBulb className="facility-iconl" />
  <h3>Fluorescent and incandescent lighting with clearly marked controls.</h3>
</div>
<div className="facility-iteml">
  <FaPrint className="facility-iconl" />
  <h3>Equipped with colour printers, scanners, photocopier and projector</h3>
</div>
<div className="facility-iteml">
  <FaChalkboard className="facility-iconl" />
  <h3>Whiteboard, flip chart and markers.</h3>
</div>
<div className="facility-iteml">
  <FaChair className="facility-iconl" />
  <h3>Comfortable, ergonomic seating</h3>
</div>
<div className="facility-iteml">
  <FaSnowflake className="facility-iconl" />
  <h3>High-quality ACs for continuous cooling</h3>
</div>
<div className="facility-iteml">
  <FaTools className="facility-iconl" />
  <h3>School has the separate IT helpdesk for all installation and maintenance work.</h3>
</div>


        </div>
      </div>
      <div className="labroom-slider">
        <Slider {...sliderSettings}>
          <div><img className="labroom-img" src={img1} alt="Labroom 1" /></div>
          <div><img className="labroom-img" src={img2} alt="Labroom 2" /></div>
        </Slider>
      </div>
    </div><br></br><br></br><br></br>
    <div id="labpara">
        <span>A well-equipped computer lab with a good number of systems, various educational 
          software, and online computer applications is provided to learn from basic computer
           skills to the latest technologies such as coding, artificial 
          intelligence, robotics, data analytics, etc.<br></br><br></br><br></br><br></br>

         <b> Features of our computer labs</b><br></br><br></br>
We understand importance of computer education in today's world. SVAV provided Two well-equipped computer laboratories with 30 computers enhance the learning process and enable the proper conduct of the Board prescribed courses. Branded Personal Computers are installed in two Computer Labs, all networked to facilitate teaching in small batches, with adequate faculty attention.<br></br><br></br>
The advanced computer laboratory in our school assists students in developing robust computer skills by offering them the best-in-class computer systems. The computer lab is outfitted with Dual Core computers that are linked via the Local Area Network. Students make the perfect use of computers in their daily studies to meet the challenges of modern learning and to stay current with the global scenario. The main reason for having a well-established computer laboratory in our school for every class is because we focus on the progressive and evolving approach to ensure that our students benefit from current technological advances in IT-based educational initiatives. All computers come
 with modern software and cutting-edge learning tools for robotics, coding, and programming. Students are also introduced to a variety of digital tools by a professional mentor who helps them learn new and relevant information
  needed for their studies.



        </span>  
    </div>
    </div>
  );
};

export default Labroom;
