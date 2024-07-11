import React from 'react';
import Slider from 'react-slick';
import { FaLightbulb, FaPeopleArrows, FaChalkboardTeacher, FaChild, FaChair, FaHome } from 'react-icons/fa';
import './Transport.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Laboratories-1.jpg';
import img2 from './ScienceLab.jpg';
import img3 from './bio.png';
import img4 from './phy.png';

const Transport = () => {
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
    <div className="Transport-container">
      <div className="Transport-content">
        <span id="Transport">Laboratories Facilities</span>
        <div id="Transportlogo">
        </div>
        <div id="Transportcontents">
          <h3><FaLightbulb /> Spacious classrooms with sample lighting.</h3>
          <h3><FaPeopleArrows /> Collaborative Learning Spaces.</h3>
          <h3><FaChalkboardTeacher /> Interactive Smart Boards.</h3>
          <h3><FaChild /> Student-Centric Learning Environment.</h3>
          <h3><FaHome /> Modern and pleasing interiors.</h3>
          <h3><FaChair /> Individual seating arrangements for every child.</h3>
        </div>
      </div>
      <div className="Transport-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Transport 1" /></div>
          <div><img src={img2} alt="Transport 2" /></div>
          <div><img src={img3} alt="Transport 3" /></div>
          <div><img src={img4} alt="Transport 4" /></div>
        </Slider>
      </div>
    </div>
    <div>
    <div>
        <p className="Transportpara">SVIS Transport Management System is a convenience provided to our parents to facilitate a safe and easy commute for their children. 5 buses and 1 winger will ply in 6 routes. An additional caretaker along with the driver shall take care of the students while traveling.
             <br></br><br></br><br></br>
        All drivers of SVIS are well trained, hold RTA-issued heavy driving licenses, and participate in our ongoing drivers’ training sessions for safety. All the buses are installed with GPS Trackers to empower parents to know their child’s location and become assured about the safety of their children.
        </p>
      </div>
    </div><br></br><br></br><br></br><br></br><br></br><br></br>
    <center>
    <table border="1px" cellPadding={"20px"} cellSpacing={"0px"} width="1000px">
          <tr>
            <td rowSpan={2}>Distance</td>
            <td>I-Term</td>
            <td>II-Term</td>
            <td>III-Term</td>
            <td rowSpan={2}>Tariff P.A</td>
          </tr>
          <tr>
            <td>At the time of admission</td>
            <td>15th September</td>
            <td>15th December</td>
          </tr>
          <tr>
            <td>&lt;5 KM</td>
            <td>7,000</td>
            <td>7,000</td>
            <td>6,000</td>
            <td>20,000</td>
          </tr>
          <tr>
            <td>5-10 KM</td>
            <td>9,000</td>
            <td>8,000</td>
            <td>8,000</td>
            <td>25,000</td>
          </tr>
          <tr>
            <td>10-20 KM</td>
            <td>12,000</td>
            <td>9,000</td>
            <td>9,000</td>
            <td>30,000</td>
          </tr>
          <tr>
            <td>&gt;20 KM</td>
            <td>15,000</td>
            <td>10,000</td>
            <td>10,000</td>
            <td>35,000</td>
          </tr>
        </table>
        </center>
    <div>
        <p className="Transportpara">
          Transport Terms & Policies<br></br><br></br><br></br><br></br>
1. Availability of Seats: School transport is only an optional facility based on first cum first serve.
<br></br><br></br><br></br>
2. Bus Routes: The bus routes are carefully planned keeping in view the student’s comfort and safety. This is subject to change depending upon the exigencies of the school. The school provides to and fro transport facility to the student on all working days in fixed routes.
<br></br><br></br><br></br>
3. Pick Up & Drop Off: Parents are requested to be punctual while dropping and picking their child at the designated bus stops to avoid inconvenience and delay to other students. In case of delay at the time of picking the students he/she student will be brought back to the school.
<br></br><br></br><br></br>
4. IDENTITY CARDS: The students are issued an identity card for the current year of study every year with bus route number indicated on it. All students must wear this card compulsorily while travelling and in the school.
<br></br><br></br><br></br>
5. Oneway Transport: Once a student enrols for School Transport, a seat is reserved for them for Pick-up & Drop-off, hence if any Parent wishes to arrange personal transport for one way, Parent needs to submit a declaration letter for the same and pay 75% of the total fee. No refund can be extended under any case.
<br></br><br></br><br></br>
6. Change of Address: Change of residence of the student and contact number must be intimated in writing and the allotment in the new route shall be subject to vacancy in that particular route.Changing route/stop by the student or parent without prior permission is not permitted.
<br></br><br></br><br></br>
7. Discontinuance of transport facility will be allowed at the end of the year on grounds of change of residence of parent or an area where the existing transport facility is not available. A letter along with the returning of student IDENTITY card intimating discontinuance of transport should be given one month in advance i.e. on or before 28th February to the school authorities. Otherwise transport fees for the next year will be charged.
<br></br><br></br><br></br>
8. Discipline:
<br></br><br></br><br></br>

.Students while travelling in the school bus must maintain discipline. Any student found guilty of misconduct or causing damage will not be allowedto avail the bus facility. Students will be held responsible for any damage caused by them due to negligence or otherwise, including recovery of cost of repairs towards damage.<br></br><br></br>
.Transport Facility may be withdrawn due to unavoidable circumstances or non-cooperation of parents in maintaining the code of conduct in terms of picking and dropping a child or any sort of student misbehaviour.<br></br><br></br>
.Parentsshould not board the bus & enter into argument with other staff or children to sort out any issue.<br></br><br></br> 
.No student/parentshall encourage the driver or the staff connected with the transport system to indulge in unfair practices such as giving tips to bus drivers for seeking favours. The transport services may be withdrawn if any such instances are found.<br></br><br></br>
9. Transport Fee: Transport Fee is based on Kilometres &payable in One Term or Three Term Schedule. The Transport services are available strictly on pre-paid basis only and Parents must pay in advance for the Term approaching. Travelling by bus while defaulting the transport fee is liable for cancellation of transport facility.

<br></br><br></br><br></br>

10. Mode of Payment: You may make your payment by Cash or Card. Fee Counter is open during school hours.
<br></br><br></br><br></br>
11. Refund: Fee once paid will not be refunded.
<br></br><br></br><br></br>
12. Any suggestion/complaint regarding the bus facility is to be addressed to the Principal in writing and the same will be entertained by the School Management.
<br></br><br></br><br></br>
Note: The school has a right to modify/alter/relocate/withdraw the routes/stops or as required by the regulating agencies from time to time.</p>
    </div>
    </div>
  )
}

export default Transport;
