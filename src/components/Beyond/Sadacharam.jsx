
// import Slider from 'react-slick';
import {FaLightbulb ,  FaPray,  FaBook, FaUtensils,  FaHandHoldingHeart, FaListAlt } from 'react-icons/fa';
import './Sadacharam.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import img1 from './Sadacharamimg1.jpg';
// import img2 from '../Facilities/slide1.png';
import img3 from '../Facilities/slide3.png';
// import img4 from '../Facilities/slide3.png';
// import img5 from '../Facilities/slide4.png';

// import img7 from '../Facilities/slide6.jpg';
// import img8 from '../Facilities/psimg.jpg';

const Sadacharam = () => {
  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1900,
  //   interval: 1800,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 630
  // };

  return (
    <div>
    <div className="sadacharam-container">
    <div className="sadacharam-slider">
      <div><img src={img3} alt="Sports ground 1" style={{height:"1000px",width:"1400px",marginLeft:"110px",marginTop:"120px"}}/></div>
      </div>
      <div className="sadacharam-content">
        <h1 id="sadacharam">Sadacharam</h1>
        <div id="sadacharamlogo">
        </div>
        <div id="sadacharamcontents">
        <h3><FaLightbulb /> Worship God every day by lighting a lamp.</h3>
      <h3><FaPray /> Take blessings from Parents and Teachers.</h3>
      <h3><FaBook /> Study the scriptures, contemplate the wisdom of ancestors.</h3>
      <h3><FaUtensils /> Provide food for all beings in need.</h3>
      <h3><FaHandHoldingHeart /> Serve guests with respect and love.</h3>
      <h3><FaListAlt /> Always follow 6 B's (Bhavan, Bhasha, Bhusha, Bhojan, Bhajan, Braman).</h3>
        </div>
      </div>
      
        {/* <Slider {...sliderSettings}>
          <div><img src={img1} alt="Classroom 1" /></div>
          <div><img src={img2} alt="Classroom 2" /></div>
          <div><img src={img3} alt="Classroom 3" /></div>
          <div><img src={img4} alt="Classroom 1" /></div>
          <div><img src={img5} alt="Classroom 2" /></div>
        
          <div><img src={img7} alt="Classroom 2" /></div>
          <div><img src={img8} alt="Classroom 2" /></div>
         
        </Slider> */}
    
    </div><br></br><br></br><br></br>
    <center><div id="sadacharamimg"></div></center>
    <div>
     
    <div id="sadacharampara">
        <span>Promoting student-centric and tech-driven learning through adaptive, interactive, and centralized digital classrooms (spacious and well-ventilated rooms) and simultaneously incorporating ancient wisdom and values as an integral part of the curriculum.
       <br></br><br></br>
      Students are also exposed to e-learning content, grade specific-live, and stored material in order to evaluate their individual strengths, abilities, and needs.
      <br></br><br></br>
These classrooms are a part of the Additional Support for Learning (ASL approach) towards students with Special Educational Needs (SEN).
<br></br><br></br>
<center><div id="sadacharamimg1"></div></center><br></br><br></br>
The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding, planning, and developing environments and experiences for students learning in digitally-rich contexts. A digital classroom, which is rapidly transforming the way, teachers teach and students learn in schools with innovative and meaningful use of technology. Students learn difficult and abstract curriculum concepts by watching highly engaging visuals and animations.
<br></br><br></br>
This makes learning an enjoyable experience for students while improving their overall academic performance in school. And teachers also gain the complete attention and interest of every child in the class.
<br></br><br></br>
Every child gets a visual input on how it happens and the concepts are well understood. This results in a faster and accurate understanding of the concepts in class and helps improve the overall academic performance of students.
<br></br><br></br>
<center><div id="sadacharamimg2"></div></center><br></br><br></br>
Teachers are able to keep students engaged in the learning process and also get an instant and accurate assessment of learning outcomes achieved at the end of the class.
<br></br><br></br>
Creative Video files to teach a software application, a lesson, as well as students, can give reviews at the same time.
        </span>
      </div>
    </div>
    </div>
  )
}

export default Sadacharam;
