import React from 'react';
import Slider from 'react-slick';
import { FaLightbulb, FaPeopleArrows, FaChalkboardTeacher, FaChild, FaChair, FaHome } from 'react-icons/fa';
import './classroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Classroom-1.jpg';
import img2 from './Classroom-2.jpg';
import img3 from './Classroom-3.jpg';
import img4 from './clsimg1.jpg';
import img5 from './clsimg2.jpg';

const Classroom = () => {
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
    <div className="classroom-container">
      <div className="classroom-content">
        <h1 id="cls">Classroom Facilities</h1>
        <div id="clslogo">
        </div>
        <div id="clscontents">
          <h3><FaLightbulb /> Spacious classrooms with sample lighting.</h3>
          <h3><FaPeopleArrows /> Collaborative Learning Spaces.</h3>
          <h3><FaChalkboardTeacher /> Interactive Smart Boards.</h3>
          <h3><FaChild /> Student-Centric Learning Environment.</h3>
          <h3><FaHome /> Modern and pleasing interiors.</h3>
          <h3><FaChair /> Individual seating arrangements for every child.</h3>
        </div>
      </div>
      <div className="classroom-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Classroom 1" /></div>
          <div><img src={img2} alt="Classroom 2" /></div>
          <div><img src={img3} alt="Classroom 3" /></div>
          <div><img src={img4} alt="Classroom 1" /></div>
          <div><img src={img5} alt="Classroom 2" /></div>
        </Slider>
      </div>
    </div>
    <div>
    <div id="clspara">
        <span>Promoting student-centric and tech-driven learning through adaptive, interactive, and centralized digital classrooms (spacious and well-ventilated rooms) and simultaneously incorporating ancient wisdom and values as an integral part of the curriculum.
       <br></br><br></br>
      Students are also exposed to e-learning content, grade specific-live, and stored material in order to evaluate their individual strengths, abilities, and needs.
      <br></br><br></br>
These classrooms are a part of the Additional Support for Learning (ASL approach) towards students with Special Educational Needs (SEN).
<br></br><br></br>
<center><div id="clsimg1"></div></center><br></br><br></br>
The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding, planning, and developing environments and experiences for students learning in digitally-rich contexts. A digital classroom, which is rapidly transforming the way, teachers teach and students learn in schools with innovative and meaningful use of technology. Students learn difficult and abstract curriculum concepts by watching highly engaging visuals and animations.
<br></br><br></br>
This makes learning an enjoyable experience for students while improving their overall academic performance in school. And teachers also gain the complete attention and interest of every child in the class.
<br></br><br></br>
Every child gets a visual input on how it happens and the concepts are well understood. This results in a faster and accurate understanding of the concepts in class and helps improve the overall academic performance of students.
<br></br><br></br>
<center><div id="clsimg2"></div></center><br></br><br></br>
Teachers are able to keep students engaged in the learning process and also get an instant and accurate assessment of learning outcomes achieved at the end of the class.
<br></br><br></br>
Creative Video files to teach a software application, a lesson, as well as students, can give reviews at the same time.
        </span>
      </div>
    </div>
    </div>
  )
}

export default Classroom;
