
// import Slider from 'react-slick';
import { FaLightbulb, FaLanguage, FaBook, FaBrain, FaGlobe, FaChild, FaHome, FaChair, FaLaptop } from 'react-icons/fa';
import './Sanskrit.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './sanskrit1.jpg';
// import img2 from './Sadacharamimg1.jpg';
// import img3 from './Sadacharamimg1.jpg';
// import img4 from './Sadacharamimg1.jpg';


const Sanskrit = () => {
  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1900,
  //   interval: 1800,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 630,
  //   arrows: false
  // };

  return (
    <div>
    <div className="Sanskrit-container">
      <div className="Sanskrit-content">
        <span id="Sanskrit">Sanskrit</span>
        <div id="Sanskritlogo">
        </div>
        <div id="Sanskritcontents">
        <h3><FaLightbulb /> Historical Significance</h3>
            <h3><FaLanguage /> Linguistic Foundation</h3>
            <h3><FaBook /> Rich Vocabulary</h3>
            <h3><FaBrain /> Grammatical Structure</h3>
            <h3><FaHome /> Cultural Knowledge</h3>
            <h3><FaChair /> Spiritual and Religious Texts</h3>
            <h3><FaChild /> Cognitive Benefits</h3>
            <h3><FaGlobe /> Growing Global Interest</h3>
            <h3><FaLaptop /> Modern Adaptations</h3>
            <h3><FaBook /> Numerous Online Resources and Courses</h3>
        </div>
      </div>
      <div className="Sanskrit-slider">
        {/* <Slider {...sliderSettings}> */}
          <div><img src={img1} alt="Sadacharam 1"  /></div>
          {/* <div><img src={img2} alt="Sadacharam 2" /></div>
          <div><img src={img3} alt="Sadacharam 3" /></div>
          <div><img src={img4} alt="Sadacharam 4" /></div> */}
        {/* </Slider> */}
      </div>
    </div>
    <div>
    </div>
    <div id="Sanskritpara">
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
