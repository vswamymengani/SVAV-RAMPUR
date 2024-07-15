import React from 'react';
import Slider from 'react-slick';
import { FaVolleyballBall, FaTableTennis, FaBasketballBall, FaSwimmer, FaSkating, FaFootballBall, FaRunning } from 'react-icons/fa';
import { GiCricketBat, GiTennisRacket, GiTeamDowngrade } from 'react-icons/gi'; // Importing from Game Icons for cricket, badminton, and kho-kho
import './sportsroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Sports-ground-1.jpg';
import img2 from './Sports-ground-2.jpg';

const Sportsroom = () => {
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
    <div className="sports-container">
      <div className="sports-content">
        <span id="spo">Sportsroom Facilities</span>
        <div id="spocontents">
          <div className="facility-item">
            <FaVolleyballBall className="facility-icon" />
            <h3>Volleyball Court</h3>
          </div>
          <div className="facility-item">
            <FaRunning className="facility-icon" />
            <h3>Kabaddi Ground</h3>
          </div>
          <div className="facility-item">
            <GiTeamDowngrade className="facility-icon" />
            <h3>Kho-Kho Ground</h3>
          </div>
          <div className="facility-item">
            <GiCricketBat className="facility-icon" />
            <h3>Cricket Practice Net</h3>
          </div>
          <div className="facility-item">
            <FaFootballBall className="facility-icon" />
            <h3>Football Field</h3>
          </div>
          <div className="facility-item">
            <FaTableTennis className="facility-icon" />
            <h3>Table Tennis</h3>
          </div>
          <div className="facility-item">
            <FaBasketballBall className="facility-icon" />
            <h3>Basketball Court</h3>
          </div>
          <div className="facility-item">
            <GiTennisRacket className="facility-icon" />
            <h3>Badminton Court</h3>
          </div>
          <div className="facility-item">
            <FaSkating className="facility-icon" />
            <h3>Skating Rink</h3>
          </div>
          <div className="facility-item">
            <FaSwimmer className="facility-icon" />
            <h3>Swimming Pool</h3>
          </div>
        </div>
      </div>
      <div className="sports-slider">
        <Slider {...sliderSettings}>
          <div><img className="sports-img" src={img1} alt="Sports ground 1" /></div>
          <div><img className="sports-img" src={img2} alt="Sports ground 2" /></div>
        </Slider>
      </div>
    </div>
    <div id="spapara">
        <span>To stimulate competitive behavior among students and strengthen physical & mental
           growth SVIS offers both outdoor and indoor game facilities led by experienced and 
           competent coaches. Running track, Basketball, Football, Kabaddi, Kho-kho, Tennicoit, Shuttle, Skipping, Carroms, Chess, etc.
          <br></br> <br></br> <br></br>
          <b>Physical Education for Saririk Vikash</b>  <br></br><br></br>
           Children should be strong and fit, they should be good sportsmen and their physical capabilities should be adequately developed. Only such like children can become defenders of their country and their faith. All schools of Vidya Bharati have facilities and programmes for physical development of children. Classwise physical education syllabus has been developed by specialists for this purpose. Regional Physical Training Centers have been established for specialized physical training. A national Sports Committee for Vidya Bharati is also being constituted.Vidya Bharati is affiliated to SGFI as a state.
           <br></br>  <br></br> <br></br>
          <b>All India Sports Meet</b> <br></br> <br></br>
           Vidya Bharati started holding All India Sports meet in the year 1988-89 in order to commemorate the birth centenary of Param Pujya Dr. HedeawarJi. the first SarSanghchalak of R.S.S. During these tournaments boys & girls of Middle, High & Sr. Secondary classes (Bal, Kishor &Tarun) take part in separate groups. Besides Kabbadi, Kho-kho there are about sixty items of athletics. A participant can take part in three events only. These tournaments start from schools & go upto District, Circle State, Region& National Level. Participants getting first position in Kshetra level games and athletic events take part in national tournament. S.G.F.I has also patronised VidyaBharati as a state to participate in national competitions
          <br></br><br></br><br></br>
          <b> OUTDOOR GAMES</b><br></br><br></br>
          Games form an important part of the daily activity at the Vidyaranya school. In Telangana, it is considered the best school with excellent facility for outdoor games. Students are expected to participate in sports every day for an hour. They are given the option to choose two games from more than 11 games practiced in the school. SVAV has two well maintained football grounds and one cricket net practice ground. We also have a Danda, Niyudda and an archery pavilion.
           Apart from this, the school also has two courts each for basketball and volleyball respectively. The school also has three kabaddi, Kho-Kho courts where interested students are provided coaching. Outdoor activities like field and track events, badminton, cricket, football, basketball help students stay active and healthy.
         <br></br><br></br><br></br>
         <b>INDOOR GAMES</b><br></br><br></br>
        SVAV offers its students a number of options when it comes to indoor games. From Excellent skating facility to chess and the popular Carrom, all games that promote team spirit and healthy competition are encouraged among students.

        </span> 
   </div>

    </div>
  );
};

export default Sportsroom;
