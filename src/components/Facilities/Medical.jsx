import React from 'react';
import Slider from 'react-slick';
import './Medical.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Boarding campus-Ayodya.jpg';
import img2 from './Boarding campus-ayodya-2.jpg';

// Import logos for the facilities
import securityLogo from './guard.png';
import foodLogo from './balanced-diet.png';
import airconLogo from './air-conditioner.png';
import pastoralCareLogo from './portal.png';
import separateHostelsLogo from './roommate.png';
import dormsLogo from './hostel.png';
import doctorLogo from './medical-team.png';

const Medical = () => {
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
    <div className="boardingroom-container">
      <div className="boardingroom-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Sports ground 1" /></div>
          <div><img src={img2} alt="Sports ground 2" /></div>
        </Slider>
      </div>
      <div className="boardingroom-content">
        <span id="boa">Medical / Vaidhya Vibhag</span>
        <div id="boacontents">
          <div className="facility-item">
            <img src={securityLogo} alt="Security" className="facility-logo" />
            <h3>24/7 Security with CCTV Surveillance</h3>
          </div>
          <div className="facility-item">
            <img src={foodLogo} alt="Food" className="facility-logo" />
            <h3>100% Vegetarian & Hygienic Food</h3>
          </div>
          <div className="facility-item">
            <img src={airconLogo} alt="Air Conditioning" className="facility-logo" />
            <h3>Air-conditioned Hostel Rooms</h3>
          </div>
          <div className="facility-item">
            <img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo" />
            <h3>Intense Pastoral Care</h3>
          </div>
          <div className="facility-item">
            <img src={separateHostelsLogo} alt="Separate Hostels" className="facility-logo" />
            <h3>Separate Boy's & Girl's Hostels</h3>
          </div>
          <div className="facility-item">
            <img src={dormsLogo} alt="Dorms" className="facility-logo" />
            <h3>Spacious and Ventilated Dorms</h3>
          </div>
          <div className="facility-item">
            <img src={doctorLogo} alt="Doctor" className="facility-logo" />
            <h3>24/7 Doctor on-call</h3>
          </div>
        </div>
      </div>
    </div>
    <div id="medicalpara">
        <span>A prime area of interest for all parents is their ward’s wellness. SVIS
             has an adequately equipped infirmary to enable health support not only to
              the students but also to the staff. The infirmary is looked after 
            by a qualified nurse. Annual health check-ups of students are regularly carried out and a record is maintained.  
        <br></br><br></br><br></br>
            •	Well-equipped Medical Room<br></br><br></br>
•	Managed by an experienced staff nurse and one ward boy.<br></br><br></br>
•	Regular health check-ups of the students.<br></br><br></br>
•	Tie-up with nearby Govt. and private hospitals for emergency.<br></br><br></br>
•	Senior doctors visit the campus twice in a Month.<br></br><br></br>
We consider the health of our students as our primary concern. The school has an excellent medical centre on campus with medical professionals available around the clock. On-campus medical centre ensures all its students living on campus with immediate medical care in need. Any form of viral diseases, infections and minor injuries are treated within school premises itself. The medical centre has 2 staff nurses and one ward boy attend at all times. A doctor visits the campus once/twice in a Month.<br></br><br></br>
The Five-bed centre has a dispensary, sitting room, isolation room, dressing room and doctor’s room. General and minor medical cases are treated here. Whenever a student gets an infection, apart from administering medicines, the child is moved to the isolation room where special care is given.<br></br><br></br>
At the time of admission, each student’s medical records (including information on any allergy) are acquired and kept in the school’s system. These records are then referred to whenever a student comes to the medical centre.<br></br><br></br>
The school has tie up with the nearby Govt. and private Mult speciality hospital for any emergency and advanced medical help.<br></br><br></br><br></br><br></br>
  

        </span>  
    </div>
    </div>
  );
};

export default Medical;
