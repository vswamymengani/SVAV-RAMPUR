import Slider from 'react-slick';
import './Art.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './Artsimg1.jpg';
import img2 from './art2.jpg';
import img3 from './art3.jpg';
import img4 from './art5.jpg';
import img5 from './art7.jpg';
import img6 from './IMG20240525141319.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBookOpen, faPray,  faSchool, faChalkboardTeacher, faPenFancy } from '@fortawesome/free-solid-svg-icons';

const Art = () => {
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
      <div className="Art-container">
        <div className="Art-slider">
          <Slider {...sliderSettings}>
         
            <div><img src={img1} alt="Art 1" style={{ height: '70.15vh' }} /></div>
            <div><img src={img2} alt="Art 2" style={{ height: '70.15vh' }}/></div>
            <div><img src={img3} alt="Art 3" style={{ height: '70.15vh' }}/></div>
            <div><img src={img4} alt="Art 2" style={{ height: '70.15vh' }} /></div>
            <div><img src={img5} alt="Art 3" style={{ height: '70.15vh' }} /></div>
            <div><img src={img6} alt="Art 2" style={{ height: '70.15vh' }} /></div>
           
            
          </Slider>
        </div>
        <div className="Art-content">
          <span id="Art">Arts & Crafts</span>
          <div id="Artcontents">
            <div className="facility-item">
              <FontAwesomeIcon icon={faMusic} className="facility-logo" />
              <h3>Sangeet Education for Manasik Vikash</h3>
            </div>
            <div className="facility-item">
              <FontAwesomeIcon icon={faBookOpen} className="facility-logo" />
              <h3>Sanskrit Education for Boudhik Vikash</h3>
            </div>
            <div className="facility-item">
              <FontAwesomeIcon icon={faPray} className="facility-logo" />
              <h3>Moral and Spiritual Education</h3>
            </div>
            <div className="facility-item">
              <FontAwesomeIcon icon={faSchool} className="facility-logo" />
              <h3>All India Sanskriti Gyan Pariksha</h3>
            </div>
            <div className="facility-item">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="facility-logo" />
              <h3>Prashan Manch (Quiz Competition)</h3>
            </div>
            <div className="facility-item">
              <FontAwesomeIcon icon={faPenFancy} className="facility-logo" />
              <h3>Essay Writing Competition</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="Artpara">
        <span >
          <center> <b>CULTURAL</b></center><br></br>
          Bharath (India) is a country rich in culture and this can be seen in the crafts room at SVAV Centre for Education. The school has two art labs- One dedicated to sculpting, and the other to fine arts, both decorated with handiworks prepared by the students under the able guidance of our Art teachers. Every student has a session a week, apart from the students who take it up as part of their hobby club. Students are encouraged to explore various traditional craft-based skills including woodwork, aeromodelling, clay modelling and the traditions of different states of India.
          <br></br><br></br>Along with the visual arts, we also have a Music room equipped with everything to teach students vocal and instrumental music.
          <br></br><br></br>
          <center><div id="art1"></div></center><br></br><br></br>
          In SVAV every student is encouraged to choose from a wide range of Indian and Western instruments. The school has woodwind Flute instruments (venu, Vamsi), congos, tablas, guitars, harmonium, keyboard, octopad, drums and dholak. Two teachers – a vocal coach and an instrument coach – provide training.
          <br></br><br></br>The Photography club encourages students to capture the natural beauty in everyday scenes and objects, while Moviemaking is popular amongst the students as seen in the recent movie our school made about the great Indian martyr Khudiram Bose and his sacrifice for our freedom. Poetry and Prose are also given importance; students write and submit their pieces to the Editorial team for evaluation and print in our school annual publication ‘SVAVECHO’..
          Being involved with art, dance and music develops creativity and provides students with opportunities to experience new ways of thinking. Separate Theatres for learning and practicing these forms are provided at SVIS to respect and nurture the aesthetic sense as well as inculcate our culture in the students.
          <br></br><br></br>

          <b>Sangeet Education (Music) for Manasik Vikash</b><br></br><br></br>
          Music vibrates the innermost strings of our hearts. All Vidya Bharati Schools teach music to their students for awakening their noblest sentiments and for activating sanskar learning. Audio music cassettes of high quality have been prepared. Patriotic songs are reverberating throughout the country. A cassette containing songs for birthday celebration has been prepared and it has become very popular. Class wise music syllabi have also been promulgated. Students sing songs in all languages of the country. It is an admitted fact that languages may be different but they 
          all echo the same sentiments.<br></br><br></br>
          <center><div id="art2"></div></center><br></br>
          <br></br><br></br>
          <b>Sanskrit Education for Boudhik Vikash</b><br></br><br></br>
          Sanskrit is the mother of the most of the languages not only of India but also the rest of the world. Sanskrit literate contains the invaluable treasure of Indian Sanskrit and of the knowledge acquired by the ancient rishis. Unless our students learn Sanskrit language, they will remain ignorant of all this. Sanskrit is also the key to national unity. That is why Vidya Bharati has accorded high priority to the teaching of Sanskrit Department of Vidya Bharati is located at Kurukshetra in Haryana. This department has published text books for primary classes called ‘Dev Vani Sanskritam’ based on conversation metho. Training of Sankrit-language-teachers is also arranged by this department.
          <br></br><br></br>

          <b>Moral and Spiritual Education</b><br></br><br></br>
          Children are potential nation builders. The honour and growth of the country depends upon the character of her children. VidyaBharati has accordingly developed this syllabus for inculcating moral and patriotic values and to foster proper spiritual outlook. It forms the foundation of the entire educational process. The primary aim of VidyaBharati is to build the character and outlook of the children in accordance with Bharatiya Sanskrit, Dharma and ideals.
          <br></br><br></br>
         
          <b> Sanskriti Bodh Priyojna This scheme is implemented through the following programmes -</b><br></br><br></br>
          <b>All India Sanskriti Gyan Pariksha</b><br></br><br></br>
          The examination has been in vogue since 1980. Vidya Bharati office at Kurukshetra manages this. The preparation for this examination provides complete knowledge and information about Indian culture, religion, history, festivals, Holy places, sacred rivers, mountains and national personalities to the student community in an interesting and simple method. Besides lakhs of students reading in Vidya Bharati Schools, many other students, teachers and parents are benefitted from this scheme. It can be asserted with pride that 'Sanskriti Bodh Pariyojna' is helping a lot in cultural renaissance and strengthening national bonds of unity. In the Academic year 2009-10 more than 20 lakh students appeared in this examination. Year after year the number is increasing.
          <br></br><br></br>
          <b>Sanskriti Gyan Pareeksha For Teachers</b><br></br><br></br>
          Sanskriti Gyan Pareeksha for teachers is also held every year. There are three stage viz 'Prathma', 'Madhyama' and 'Utma' according to the standard & depth of the subject matter. Normally new teachers coming out of Teachers Training Institutes are not conversant in the cultural, historical and geographical knowledge of the country. This scheme & syllabus provides opportunity for them to attain this essential knowledge and imbibe the ethos of Bharatiya Sanskriti. A Pragya Pareeksha is also held after these three pareeksha.
          <br></br><br></br>
          <center><div id="art3"></div></center><br></br><br></br>
          <b>Prashan Manch (Quiz Competition)</b><br></br><br></br>
          Prashan Manch competitions are held on state and regional level in four stages viz primary, upper primary, secondary & sr. secondary. Subject matter to be tested through these quiz competitions is based on books on SanskritiGyan (stage wise) and some other books prescribed such as on Astronomy, Freedom movement and biographies of our national heroes.
          <br></br><br></br>
          <b>Essay Writing Competition</b><br></br><br></br>
          This is an all India Programme. The competition is held in three stages viz primary, upper primary, secondry& sr. secondary. Marking of the essays is done at state level & prizes for the best, three essays of each group are given state wise. Topics of essays are on 'Puniya Bhumi Bharat', Indian Culture, History, Prominent personalities in the field of science and literature.
          <br></br><br></br><br></br>

        </span>
      </div>
    </div>
  );
};

export default Art;