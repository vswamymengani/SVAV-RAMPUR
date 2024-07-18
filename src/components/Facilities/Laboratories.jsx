
import Slider from 'react-slick';
import './Laboratories.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './Laboratories-1.jpg';
import img2 from './ScienceLab.jpg';
import img3 from './bio.png';
import img4 from './phy.png';
import img5 from './phylab1.jpg';
import img6 from './biolab1.jpg';
import img7 from './computerlab2.jpg';
import img8 from './roboticslab3.jpg';
import img9 from './mathslab3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPeopleArrows, faChalkboardTeacher, faChild, faRobot, faChair } from '@fortawesome/free-solid-svg-icons';

const Laboratories = () => {
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
      <div className="Laboratories-container">
        <div className="Laboratories-content">
          <span id="Laboratories">Laboratories Facilities</span>
          <div id="Laboratorieslogo">
          </div>
          <div id="Laboratoriescontents">
            <h3><FontAwesomeIcon icon={faLightbulb} /> Well-equipped Science labs.</h3>
            <h3><FontAwesomeIcon icon={faPeopleArrows} />Innovative Mathematical labs.</h3>
            <h3><FontAwesomeIcon icon={faChalkboardTeacher} /> English and other Language labs.</h3>
            <h3><FontAwesomeIcon icon={faChild} /> Computer labs.</h3>
            <h3><FontAwesomeIcon icon={faRobot} /> Robotics Technology labs.</h3>
            <h3><FontAwesomeIcon icon={faChair} /> Theoretical concepts.</h3>
          </div>
        </div>
        <div className="Laboratories-slider">
          <Slider {...sliderSettings}>
            <div><img src={img1} alt="Laboratories 1" /></div>
            <div><img src={img2} alt="Laboratories 2" /></div>
            <div><img src={img3} alt="Laboratories 3" /></div>
            <div><img src={img4} alt="Laboratories 4" /></div>
            <div><img src={img5} alt="Laboratories 2" /></div>
            <div><img src={img6} alt="Laboratories 3" /></div>
            <div><img src={img7} alt="Laboratories 4" /></div>
            <div><img src={img8} alt="Laboratories 3" /></div>
            <div><img src={img9} alt="Laboratories 4" /></div>
          </Slider>
        </div>
      </div>
      <div>
        <div id="Laboratoriespara">
          <span >
            <b>IMPORTANT LABS IN OUR SCHOOL</b> <br></br> <br></br>
            To look beyond the books and classroom teaching, separate laboratories for Math, Science, and Languages with the latest lab equipment & AV aids are set up to explore and promote discovery learning, trigger scientific temper and make the learning process more effective and intrinsic.
            <br></br> <br></br> 
            We believe that all textbook learning shall be accompanied with hands-on experiences. To this end, the school is equipped with three well-equipped science laboratories in its campus. Students are encouraged to visit laboratories for simplified learning and understanding. Physical experiments are employed to enhance the process of learning and allow students the opportunity to experiment. Our students have taken up various projects that have won accolades at regional and national level science exhibitions organised by the CBSE board.<br></br> <br></br>
           <br></br>
           <center><div id="labimg1"></div></center><br></br><br></br>
            Being a core subject in the school’s curriculum till Class X, sciences are taught to all pupils. Later, students can choose from the different disciplines offered according to their interests. Teaching science calls for innovative methods and our highly advanced chemistry, biology and physics laboratories serve as valuable means of enhancing teaching and developing a passion for the subject. Supervised practical sessions in laboratory encourage interested students to undertake a considerable amount of personal project work as well. Our laboratories help students to develop pragmatic logic and rationale, and equip them to make scientific arguments.
            •	Fully equipped physics, chemistry and biology labs.<br></br> <br></br>
            •	Provided Seperate English, Mathematics and robotics lab<br></br> <br></br>
            •	Qualified and experienced teachers and lab assistants.<br></br> <br></br>
            •	Sitting capacity for 30 students at par <br></br> <br></br>
            •	Fully equipped with standard safety features, electricity, water and gas.<br></br> <br></br> <br></br>

                 <center><b>PHYSICS LAB</b></center> <br></br>
            SVAV school provide fully equipped physics lab with latest machineries and tools. We provide access of physics lab from class (4th-10th) under supervision of our qualified and experienced teachers and lab assistants. Our physics lab provides all types of amnesties required to perform any experiment mentioned in the course.
            Lab has a sitting capacity for 30 students at par. Our physics lab is fully equipped with standard safety features, electricity, water and gas. Physics practical work involves “learning by doing”.
            <br></br> <br></br> 
            <center><div id="phyimg1"></div></center><br></br><br></br>
            <b>Objectives Of Lab </b><br></br> <br></br>
            •	Basic conceptual understanding<br></br><br></br>
            •	Follow logical sequencing for better understanding of core concepts<br></br> <br></br>
            •	Reducing curriculum load<br></br> <br></br>
            •	Enhancing problem solving skills in students<br></br> <br></br>
            •	Learn new technologies and instruments used in physics<br></br> <br></br>
            •	In-depth knowledge of concept to get started for advance level
            <br></br> <br></br> <br></br>
            <center><b>CHEMISTRY LAB</b></center> <br></br>
            SVAV provide fully equipped chemistry lab with a purpose of learning basic concepts and principles of chemistry. To use this knowledge for futuristic experiments there is a need to provide learners with sufficient conceptual background of Chemistry, that is possible only by chemistry lab which will make them competent to meet the challenges of academic and professional courses after the senior secondary stage..
            <br></br> <br></br> 
            <center><div id="chemimg1"></div></center><br></br><br></br>
            <b>Objectives Of Lab</b><br></br> <br></br>
            •	Providing basic knowledge to students<br></br> <br></br>
            •	Motivate students for studying chemistry in academic and professional courses<br></br> <br></br>
            •	Expose the students to various emerging new areas of chemistry<br></br> <br></br>
            •	Equip students to face various challenges<br></br> <br></br>
            •	Enhancing problem solving skills in students<br></br> <br></br>
            •	Learn about latest advancements in chemistry
          
            <br></br> <br></br> <br></br> 
            <center><b>BIOLOGY LAB</b></center> <br></br>
            SVAV provide fully equipped biology lab with latest instruments, diagrams and modals to help student understand basic eco structure on cellular level. We developed our biology lab according to standards set by State or CBSE and provides all basic amnesties required at the time of experimentation.
            <br></br> <br></br> 
            <center><div id="bioimg1"></div></center><br></br><br></br>
            <b>Objectives Of Lab</b><br></br> <br></br>
            •	Providing basic knowledge to students<br></br> <br></br>
            •	Motivate students for studying Biology in academic and professional courses<br></br> <br></br>
            •	Expose the students to various emerging new areas of biology and their applications<br></br> <br></br>
            •	Equip students to face various challenges<br></br> <br></br>
            •	Enhancing problem solving skills in students<br></br> <br></br>
            •	Learn about latest advancements in biology<br></br> <br></br>
            •	Acquaint students with different aspects<br></br> <br></br>
            •	Develop an interest in students to study biology as a discipline
            <br></br> <br></br> <br></br> 
            <center><b>MATHS LAB</b></center> <br></br>
            At our school campus we provide a seperate mathematics lab where students can understand various principles and formulas of mathematics in an easy way. Students can also implement these formulas to solve real world problem. This enhances the problem solving stretagy in them and they were aware of real world applications of mathematics.
            <br></br> <br></br> 
            <center><div id="mathsimg1"></div></center><br></br><br></br>
            <b>Objectives Of Lab</b><br></br> <br></br>
            •	Providing basic knowledge to students<br></br> <br></br>
            •	Motivate students for studying Mathematics in academic and professional courses<br></br> <br></br>
            •	Develop interest in the subject by participating in related competitions<br></br> <br></br>
            •	Equip students to face various challenges<br></br> <br></br>
            •	Enhancing problem solving skills in students<br></br> <br></br>
            •	Develop an interest in students to study Mathematics
            <br></br> <br></br> <br></br> 

            <center><b>ROBOTICS LAB</b></center> <br></br>
            At our school campus we provide a seperate robotics lab where students find themselves in an advanced field that require knowledge of science and technology. Our robotics lab is fully enriched with world class Robo kits with a minimum quantity of 6 kits each with sufficient requirement from classes 4-12 to make 36 robots. There is considerable anecdotal evidence that students respond well in subjects involving programming of robots.
            <br></br> <br></br> 
            <center><div id="roboticsimg1"></div></center><br></br><br></br>
            <b>Objectives Of Lab</b><br></br> <br></br>
            •	Interesting for children<br></br> <br></br>
            •	Effective doorway to introduce computer programming to students<br></br> <br></br>
            •	Develop interest in futuristic technology<br></br> <br></br>
            •	Equip students to face various challenges<br></br> <br></br>
            •	Enhancing problem solving skills in students<br></br> <br></br>
            •	Develop an interest in students to study Robotics in professional courses<br></br> <br></br>
            •	Improves logic building and programming<br></br> <br></br>
            •	Test their knowledge of applying concepts from different areas
            <br></br> <br></br> <br></br> 
          
            <center><b>ENGLISH LANGUAGE LAB</b></center> <br></br>
            In today's world English plays a very improtant role. Everyone should know how to speak, read and write english language as it is the official language in most of govt. offices and private sector. At our english lab we have a program specially designed for kids where they can learn how to speak english in right way. How to implement english in daily life etc. Lab is fully enriched with world class student kits 30 in each lab with assessment.
            <br></br> <br></br> 
            <center><div id="engimg1"></div></center><br></br><br></br>
            <b>Objectives Of Lab</b> <br></br> <br></br>
            •	Learn pronunciation <br></br> <br></br>
            •	Practicing group discussions and debates <br></br> <br></br>
            •	Learn about how to face interviews <br></br> <br></br>
            •	Learn basic concepts of English <br></br> <br></br>
            •	Learn accent, innotation and rhythm <br></br> <br></br>
            •	Prepare children as a future leader


          </span>
        </div>
      </div>
    </div>
  )
}

export default Laboratories;
