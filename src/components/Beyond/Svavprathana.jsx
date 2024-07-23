
import Slider from 'react-slick';
import './Svavprathana.css';
import { FaLightbulb, FaBookOpen, FaFeatherAlt, FaOm, FaSun, FaPeace, FaUtensils } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Facilities/s&p2.jpg';
import img2 from '../Facilities/p1.jpg';
import img3 from '../Facilities/p3.png';
import img4 from '../Facilities/psimg.jpg'


const  Svavprathana = () => {
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
    <div className="Svavprathana-container">
      <div className="Svavprathana-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Sports ground 1" /></div>
          <div><img src={img2} alt="Sports ground 2" /></div>
          <div><img src={img3} alt="Sports ground 1" /></div>
          <div><img src={img4} alt="Sports ground 2" /></div>
        </Slider>
      </div>
      <div className="Svavprathana-content">
        <h1 id="Svavprathana">SVAV&nbsp;Prathana</h1>
        <div id="Svavprathanacontents">
         
        <div className="facility-item-Svavprathana">
          <h3><FaLightbulb /> Deeparadhana</h3>
        </div>
        <div className="facility-item-Svavprathana">
          <h3><FaBookOpen /> Saraswathi Vandana</h3>
        </div>
        <div className="facility-item-Svavprathana">
          <h3><FaFeatherAlt /> Saraswathi Stuthi: (He Hamsavahini)</h3>
        </div>
        <div className="facility-item-Svavprathana">
          <h3><FaOm /> Brahmanaad</h3>
        </div>
        <div className="facility-item-Svavprathana">
          <h3><FaSun /> Gayathri Mantra</h3>
        </div>
        <div className="facility-item-Svavprathana">
          <h3><FaPeace /> Shanti Mantram</h3>
        </div>
        <div className="facility-item-Svavprathana">
          <h3><FaUtensils /> Bhojana Mantra</h3>
        </div>
        </div>
      </div>
    
    </div><br></br>
     <center><b style={{fontSize:"40px"}}>Deeparadhana</b></center> <br></br><br></br><br></br>
     <center><div id="Svavprathana1img"></div></center><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     <center><b style={{fontSize:"40px"}}>Brahmanaad</b></center> <br></br><br></br><br></br>
     <center><div id="Svavprathana2img"></div></center><br></br><br></br><br></br>
    </div>
    
  );
};

export default Svavprathana;
