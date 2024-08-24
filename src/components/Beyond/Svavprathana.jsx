
// import Slider from 'react-slick';
import './Svavprathana.css';
import { FaLightbulb, FaBookOpen, FaFeatherAlt, FaOm, FaSun, FaPeace, FaUtensils } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import img4 from '../Facilities/s&p2.jpg';
// import img2 from '../Facilities/p1.jpg';
// import img3 from '../Facilities/p3.png';
import img1 from '../Facilities/psimg.jpg'
import img2 from '../Facilities/divyaimg1.png';
import img3 from '../Facilities/Svavaprathana2.png';
import img4 from './shan1.png';


const  Svavprathana = () => {

  return (
    <div>
     
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
     
      
    <br></br><br></br><br></br><br></br><br></br>
     <center><h1 id="Svavprathana">SVAV&nbsp;Prathana</h1> </center>      <br></br>
     <center><b style={{fontSize:"200%"}}>Deeparadhana</b></center> <br></br><br></br><br></br>
     <center><div className="Svavprathanaimg">
     <img src={img2} alt="Image description" style={{ width: '60%', height: 'auto',marginTop:'10px',marginBottom:'50px' }} /></div></center><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     <center><b style={{fontSize:"200%"}}>Bhojana Mantra</b></center> <br></br><br></br><br></br>
     <center><div className="Svavprathanaimg">
     <img src={img3} alt="Image description" style={{ width: '60%', height: 'auto',marginTop:'10px',marginBottom:'50px' }} /></div></center><br></br><br></br><br></br><br></br>
     <center><b style={{fontSize:"200%"}}>Shanti Mantram</b></center> <br></br><br></br><br></br>
     <center><div className="Svavprathanaimg">
     <img src={img4} alt="Image description" style={{ width: '60%', height: 'auto',marginTop:'10px',marginBottom:'50px' }} /></div></center><br></br><br></br><br></br>
    </div>
    
  );
};

export default Svavprathana;
