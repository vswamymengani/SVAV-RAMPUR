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
        <span>A well-equipped computer lab with a good number of systems, various educational 
          software, and online computer applications is provided to learn from basic computer
           skills to the latest technologies such as coding, artificial 
          intelligence, robotics, data analytics, etc.<br></br><br></br><br></br><br></br>

         <b> Features of our computer labs</b><br></br><br></br>
•	Dedicated leased line for Internet connectivity<br></br><br></br>
•	30 64-bit high-quality LED monitors PCs in each lab<br></br><br></br>
•	All latest licensed software like Notepad++, Ms office, Visual Studio. Etc..<br></br><br></br>
•	Fluorescent and incandescent lighting with clearly marked controls.<br></br><br></br>
•	Equipped with colour printers, scanners, photocopier and projector<br></br><br></br>
•	Whiteboard, flip chart and markers.<br></br><br></br>
•	Comfortable, ergonomic seating<br></br><br></br>
•	High-quality ACs for continuous cooling<br></br><br></br>
•	School has the separate IT helpdesk for all installation and maintenance work.<br></br><br></br>
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
