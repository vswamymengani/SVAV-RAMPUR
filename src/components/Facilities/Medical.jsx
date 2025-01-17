
import Slider from 'react-slick';
import './Medical.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './medical1.jpg';
import img2 from './medical4.jpg';
import img3 from './medical3.jpg';
import img4 from './medical5.jpg';

// Import logos for the facilities

import airconLogo from './air-conditioner.png';
import pastoralCareLogo from './portal.png';
import dormsLogo from './hostel.png';
import doctorLogo from './medical-team.png';

const Medical = () => {
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
      <div className="medicalroom-container">
        <div className="medicalroom-slider">
          <Slider {...sliderSettings}>
           
            {/* <div><img className='img3medical' src={img3} alt="Medical 3" /></div> */}
            <div><img src={img1} alt="Medical 4" style={{ height: '60.15vh' }} /></div>
            <div><img src={img2} alt="Medical 4" style={{ height: '60.15vh' }} /></div>
            <div><img src={img3} alt="Medical 4" style={{ height: '60.15vh' }} /></div>
            <div><img src={img4} alt="Medical 4" style={{ height: '60.15vh' }} /></div>


          </Slider>
        </div>
        <div className="medicalroom-content">
          <span id="medical">Medical / Vaidhya Vibhag</span><br></br><br></br><br></br>
          <div id="medicalcontents">
            <div className="facility-item">
              {/* <img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo" /> */}
              <h4><img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo" />Intense Pastoral Care</h4>
            </div>
            <div className="facility-item">
              {/* <img src={dormsLogo} alt="Dorms" className="facility-logo" /> */}
              <h4><img src={dormsLogo} alt="Dorms" className="facility-logo" />Spacious and Ventilated Dorms</h4>
            </div>
            <div className="facility-item">
              {/* <img src={doctorLogo} alt="Doctor" className="facility-logo" /> */}
              <h4><img src={doctorLogo} alt="Doctor" className="facility-logo" />	Well-equipped Medical Room</h4>
            </div>
            <div className="facility-item">
              {/* <img src={airconLogo} alt="Air Conditioning" className="facility-logo" /> */}
              <h4><img src={airconLogo} alt="Air Conditioning" className="facility-logo" />	Managed by an experienced staff nurse.</h4>
            </div>
            <div className="facility-item">
              {/* <img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo" /> */}
              <h4><img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo" />Regular health check-ups of the students</h4>
            </div>
            <div className="facility-item">
              {/* <img src={dormsLogo} alt="Dorms" className="facility-logo" /> */}
              <h4><img src={dormsLogo} alt="Dorms" className="facility-logo"/>Tie-up Govt & private hospitals emergency</h4>
            </div>
            <div className="facility-item">
              {/* <img src={doctorLogo} alt="Doctor" className="facility-logo" /> */}
              <h4><img src={doctorLogo} alt="Doctor" className="facility-logo" />Senior doctors visit the campus twice in a Month</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="medicalpara">
        <span>A prime area of interest for all parents is their ward’s wellness. SVAV
          has an adequately equipped infirmary to enable health support not only to
          the students but also to the staff. The infirmary is looked after
          by a qualified nurse. Annual health check-ups of students are regularly carried out & a record is maintained.
          <br></br><br></br><br></br>
          <center><div id="med1img"></div></center><br></br><br></br>
          We consider the health of our students as our primary concern. The school has an excellent medical centre on campus with medical professionals available around the clock. On-campus medical centre ensures all its students living on campus with immediate medical care in need. Any form of viral diseases, infections and minor injuries are treated within school premises itself. The medical centre has 2 staff nurses and one ward boy attend at all times. A doctor visits the campus once/twice in a Month.<br></br><br></br>
          The Five-bed centre has a dispensary, sitting room, isolation room, dressing room and doctor’s room. General and minor medical cases are treated here. Whenever a student gets an infection, apart from administering medicines, the child is moved to the isolation room where special care is given.<br></br><br></br><br></br>
          <center><div id="med2img"></div></center><br></br><br></br>
          At the time of admission, each student’s medical records (including information on any allergy) are acquired and kept in the school’s system. These records are then referred to whenever a student comes to the medical centre.<br></br><br></br>
          The school has tie up with the nearby Govt. and private Mult speciality hospital for any emergency and advanced medical help.<br></br><br></br><br></br>


        </span>
      </div>
    </div>
  );
};

export default Medical;
