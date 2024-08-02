import React from 'react';
import Slider from 'react-slick';
import './Boardingroom.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './Boarding campus-Ayodya.jpg';
import img2 from './yoga1.jpg';
import img3 from './res1.jpg';
import img4 from './res2.jpg';
import img5 from './dining.jpg';
import img6 from './Temple Darshan-2 (1).jpg';

// Import logos for the facilities
import securityLogo from './guard.png';
import foodLogo from './balanced-diet.png';
import airconLogo from './air-conditioner.png';
import pastoralCareLogo from './portal.png';
import separateHostelsLogo from './roommate.png';
import dormsLogo from './hostel.png';
import doctorLogo from './medical-team.png';

const Boardingroom = () => {
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
      <div className="boardingroom-container">
        <div className="boardingroom-slider">
          <Slider {...sliderSettings}>
            <div><img src={img1} alt="Sports ground 1" /></div>
            <div><img src={img2} alt="Sports ground 2" /></div>
            <div><img src={img3} alt="Sports ground 1" /></div>
            <div><img src={img4}  alt="Sports ground 2"/></div>
            <div><img src={img5} alt="Sports ground 1" /></div>
            <div><img src={img6} alt="Sports ground 1" /></div>
          </Slider>
        </div>
        <div className="boardingroom-content">
          <h1 id="boa">Residential Facilities</h1>
          <div id="boacontents">
            <div className="facility-item">
              <img src={securityLogo} alt="Security" className="facility-logo" />
              <h4>24/7 Security with CCTV Surveillance</h4>
            </div>
            <div className="facility-item">
              <img src={foodLogo} alt="Food" className="facility-logo" />
              <h4>100% Vegetarian & Hygienic Food</h4>
            </div>
            <div className="facility-item">
              <img src={airconLogo} alt="Air Conditioning" className="facility-logo" />
              <h4>Air-conditioned Hostel Rooms</h4>
            </div>
            <div className="facility-item">
              <img src={pastoralCareLogo} alt="Pastoral Care" className="facility-logo" />
              <h4>Intense Pastoral Care</h4>
            </div>
            <div className="facility-item">
              <img src={separateHostelsLogo} alt="Separate Hostels" className="facility-logo" />
              <h4>Separate Boy's & Girl's Hostels</h4>
            </div>
            <div className="facility-item">
              <img src={dormsLogo} alt="Dorms" className="facility-logo" />
              <h4>Spacious and Ventilated Dorms</h4>
            </div>
            <div className="facility-item">
              <img src={doctorLogo} alt="Doctor" className="facility-logo" />
              <h4>24/7 Doctor on-call</h4>
            </div>
          </div>  </div>       </div>
      <div id="bpara">
        <span>
          <b>BOARDING</b><br></br><br></br>
          Each floor of a block has two to four resident house masters who act as parents and counsellors to students. It is with these teachers that students confide in and share their concerns with. In fact, there are often times when younger students share their concerns with seniors who then discuss the issues with their house masters. Along with the resident house masters, each hostel has 2 ward boys who stay in the hostel and take care of the students’ laundry, bed linen and cleanliness. The school trains students to take up additional responsibilities by assigning some of them the roles of hostel prefect, who participate in the administration of the hostel. Every room is equipped with a study table, a wardrobe, a bed, and plenty of space for students. Bed linen is changed every week, with a laundry facility wherein all linen and clothes are washed twice a week.
          <br></br><br></br><br></br>
         <center><div id="boardingimg1"></div></center><br></br><br></br>
          <b>DINING HALL</b><br></br><br></br>
          Here at SVAV, the habit of healthy eating is of paramount importance. The dining hall – Maa Annapurna – is a separate building that is centrally located on campus. It has the capacity to accommodate over 700 people. The large dining hall building also has a kitchen and a store room.
          The kitchen serves Breakfast, Lunch and Dinner every day and also three snacks and teatimes. Food is prepared under strict hygiene conditions and supervised by an experienced Mess Manager. The mess is run by a Manager and an Assistant Manager, supported by seven cooks and 20 supporting staff. The kitchen is equipped with the latest technology that includes a deep freezer, water cooler, other cooking gadgets and bakery. The campus also has its own water purification plant.
          Students are expected to eat all the food that they have taken on their plates. If any food is wasted by the students, they will be reprimanded. The school is particular about not allowing outside food inside the campus, as it may get spoiled while in the student’s possession and can pose a health threat.
          <br></br><br></br>
          <center><div id="diningimg1"></div></center><br></br><br></br>
          <b>MEDICAL FACILITIES</b><br></br><br></br>
          We consider the health of our students as our primary concern. The school has an excellent medical centre on campus with medical professionals available around the clock. On-campus medical centre ensures all its students living on campus with immediate medical care in need. Any form of viral diseases, infections and minor injuries are treated within school premises itself. The medical centre has 2 staff nurses and one ward boy attend at all times. A doctor visits the campus once/twice in a Month.
          The Five-bed centre has a dispensary, sitting room, isolation room, dressing room and doctor’s room. General and minor medical cases are treated here. Whenever a student gets an infection, apart from administering medicines, the child is moved to the isolation room where special care is given.
          At the time of admission, each student’s medical records (including information on any allergy) are acquired and kept in the school’s system. These records are then referred to whenever a student comes to the medical centre.
          The school has tie up with the nearby Govt. and private Mult speciality hospital for any emergency and advanced medical help.
          <br></br><br></br><br></br>
          <center><div id="medicalimg1"></div></center><br></br><br></br>
          <b>DORM RULES</b><br></br><br></br>
          •	Shouting and whistling is not allowed in the dorm.<br></br><br></br>
          •	Hostel is out of bounds for students when school is in progress.<br></br><br></br>
          •	Bed should be kept tidy and all belongings should be neatly placed in the cupboards and luggage compartments.<br></br><br></br>
          •	Students should not tamper with electrical installations. Ensure that lights and fans are turned off when not in use.<br></br><br></br>
          •	Playing with a ball, racquet, bat or hockey stick in the dormitories and corridors is not allowed.<br></br><br></br>
          •	Incense sticks / candles are not to be lighted in the dormitory.<br></br><br></br>
          •	Students are not permitted to visit other students’ hostel or the residences of staff members.<br></br><br></br>
          •	Students should behave in a civilised manner at all times.<br></br><br></br><br></br><br></br>
        </span>



      </div>
    </div>
  );
};

export default Boardingroom;
