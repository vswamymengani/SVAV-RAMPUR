import { FaLightbulb, FaPray, FaBook, FaUtensils, FaHandHoldingHeart, FaListAlt } from 'react-icons/fa';
import './Sadacharam.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img3 from '../Facilities/slide3.png';
import img2 from '../Facilities/slide5.png';
import Sadacharamimg2 from '../Facilities/slide6.jpg'
import Sadacharamimg1 from '../Facilities/slide2.png'


const Sadacharam = () => {
  return (
    <div>
      
      <div id="sadacharamcontents"><br></br>
        <h3><FaLightbulb /> Worship God every day by lighting a lamp.</h3>
        <h3><FaPray /> Take blessings from Parents and Teachers.</h3>
        <h3><FaBook /> Study the scriptures, contemplate the wisdom of ancestors.</h3>
        <h3><FaUtensils /> Provide food for all beings in need.</h3>
        <h3><FaHandHoldingHeart /> Serve guests with respect and love.</h3>
        <h3><FaListAlt /> Always follow 6 B's (Bhavan, Bhasha, Bhusha, Bhojan, Bhajan, Braman).</h3>
      </div><br></br>

      <h1 id="sadacharam" >Sadacharam</h1>
      <div>

        <div id="sadacharampara">
          
          <br></br><br></br>
          <center>
            <div id="sadacharamimg">
              <img src={img2} alt="Image description" style={{ width: '60%', height: 'auto',marginTop:'10px',marginBottom:'50px' }} />
            </div>
          </center>

          <span>Promoting student-centric and tech-driven learning through adaptive, interactive, and centralized digital classrooms (spacious and well-ventilated rooms) and simultaneously incorporating ancient wisdom and values as an integral part of the curriculum.
            <br></br><br></br>
            Students are also exposed to e-learning content, grade specific-live, and stored material in order to evaluate their individual strengths, abilities, and needs.
            <br></br><br></br>
            These classrooms are a part of the Additional Support for Learning (ASL approach) towards students with Special Educational Needs (SEN).
            <br></br><br></br>
            <center>
              <div id="sadacharamimg">
                <img src={Sadacharamimg1} alt="Image description" style={{ width: '50%', height: 'auto',marginTop:'10px',marginBottom:'50px' }} />
              </div>
            </center>
            The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding, planning, and developing environments and experiences for students learning in digitally-rich contexts. A digital classroom, which is rapidly transforming the way, teachers teach and students learn in schools with innovative and meaningful use of technology. Students learn difficult and abstract curriculum concepts by watching highly engaging visuals and animations.
            <br></br><br></br>
            This makes learning an enjoyable experience for students while improving their overall academic performance in school. And teachers also gain the complete attention and interest of every child in the class.
            <br></br><br></br>
            Every child gets a visual input on how it happens and the concepts are well understood. This results in a faster and accurate understanding of the concepts in class and helps improve the overall academic performance of students.
            <br></br><br></br>
            <center>
              <div id="sadacharamimg">
                <img src={Sadacharamimg2} alt="Image description" style={{ width: '50%', height: 'auto' ,marginTop:'10px',marginBottom:'50px'}} />
              </div>
            </center>
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