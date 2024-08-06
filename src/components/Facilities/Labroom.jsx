import React from 'react';
import Slider from 'react-slick';
import './Labroom.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './IT-Computer-lab.jpg';
import img2 from './Computer Lab (1).jpg';
import { FaWifi } from 'react-icons/fa';
import { FaVolleyballBall, FaDesktop, FaFileAlt, FaPrint, FaChalkboard, FaChair, FaSnowflake, FaTools } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';
import img3 from './itlab1.jpg';

const Labroom = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1900,
    interval: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 630,
    arrows: false
  };

  return (
    <div>
      <div className="labroom-container">
        <div className="labroom-content">
          <span className="lab">Labroom Facilities</span>
          <div id="labcontents">
            <div className="facility-iteml">
              {/* <FaWifi className="facility-iconl" /> */}
              <h4> <FaWifi className="facility-iconl" />Dedicated Internet connection</h4>
            </div>
            <div className="facility-iteml">
              {/* <FaDesktop className="facility-iconl" /> */}
              <h4><FaDesktop className="facility-iconl" />30 high-quality LED monitors PCs</h4>
            </div>
            <div className="facility-iteml">
              {/* <FaFileAlt className="facility-iconl" /> */}
              <h4><FaFileAlt className="facility-iconl" />All latest licensed softwares</h4>
            </div>
            <div className="facility-iteml">
              {/* <GiLightBulb className="facility-iconl" /> */}
              <h4><GiLightBulb className="facility-iconl" />Fluorescent and incandescent lighting</h4>
            </div>
            <div className="facility-iteml">
              {/* <FaPrint className="facility-iconl" /> */}
              <h4><FaPrint className="facility-iconl" />Equipped colour printers & projector</h4>
            </div>
            <div className="facility-iteml">
              {/* <FaChalkboard className="facility-iconl" /> */}
              <h4><FaChalkboard className="facility-iconl" />Whiteboard, flip chart and markers.</h4>
            </div>
            <div className="facility-iteml">
              {/* <FaChair className="facility-iconl" /> */}
              <h4><FaChair className="facility-iconl" />Comfortable, ergonomic seating</h4>
            </div>
            <div className="facility-iteml">
              {/* <FaSnowflake className="facility-iconl" /> */}
              <h4><FaSnowflake className="facility-iconl" />High-quality ACs for continuous cooling</h4>
            </div>
            <div className="facility-iteml">
              {/* <FaTools className="facility-iconl" /> */}
              <h4><FaTools className="facility-iconl" />School has the separate IT helpdesk</h4>
            </div>


          </div>
        </div>
        <div className="labroom-slider">
          <Slider {...sliderSettings}>
            <div><img className="labroom-img" src={img1} alt="Labroom 1" /></div>
            <div><img className="labroom-img" src={img2} alt="Labroom 2" /></div>
            <div><img className="labroom-img" src={img3} alt="Labroom 1" /></div>
          </Slider>
        </div>
      </div><br></br>
      <div id="labpara">
        <span>A well-equipped computer lab with a good number of systems, various educational
          software, and online computer applications is provided to learn from basic computer
          skills to the latest technologies such as coding, artificial
          intelligence, robotics, data analytics, etc.<br></br><br></br>

          <b> Features of our computer labs</b><br></br><br></br>
          We understand importance of computer education in today's world. SVAV provided Two well-equipped computer laboratories with 30 computers enhance the learning process and enable the proper conduct of the Board prescribed courses. Branded Personal Computers are installed in two Computer Labs, all networked to facilitate teaching in small batches, with adequate faculty attention.<br></br><br></br>
          <center><div id="itlabimg1"></div></center><br></br><br></br>
          The advanced computer laboratory in our school assists students in developing robust computer skills by offering them the best-in-class computer systems. The computer lab is outfitted with Dual Core computers that are linked via the Local Area Network. Students make the perfect use of computers in their daily studies to meet the challenges of modern learning and to stay current with the global scenario. The main reason for having a well-established computer laboratory in our school for every class is because we focus on the progressive and evolving approach to ensure that our students benefit from current technological advances in IT-based educational initiatives. All computers come
          with modern software and cutting-edge learning tools for robotics, coding, and programming. Students are also introduced to a variety of digital tools by a professional mentor who helps them learn new and relevant information
          needed for their studies.



        </span>
      </div>
    </div>
  );
};

export default Labroom;
