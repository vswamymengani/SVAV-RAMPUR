
import Slider from 'react-slick';
import { FaVolleyballBall, FaTableTennis, FaBasketballBall,  FaSkating, FaFootballBall, FaRunning } from 'react-icons/fa';
import { GiCricketBat, GiTennisRacket, GiTeamDowngrade } from 'react-icons/gi'; // Importing from Game Icons for cricket, badminton, and kho-kho
import './sportsroom.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './Sports-ground-1.jpg';
import img2 from './IMG-20240718-WA0044.jpg';
import img3 from './spoimg1.jpg';
import img4 from './spoimg2.jpg';
import img5 from './spoimg3.jpg';
import img6 from './IMG20240514110930.jpg';
import img7 from './IMG20240514111014.jpg';

const Sportsroom = () => {
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
    <div className="sports-container">
      <div className="sports-content">
        <span id="spo">Sportsroom Facilities</span>
        <div id="spocontents">
          <div className="facility-item">
            {/* <FaVolleyballBall className="facility-icon" /> */}
            <h4><FaVolleyballBall className="facility-icon" />Volleyball Court</h4>
          </div>
          <div className="facility-item">
            {/* <FaRunning className="facility-icon" /> */}
            <h4><FaRunning className="facility-icon" />Kabaddi Court</h4>
          </div>
          <div className="facility-item">
            {/* <GiTeamDowngrade className="facility-icon" /> */}
            <h4> <GiTeamDowngrade className="facility-icon" />Kho-Kho Court</h4>
          </div>
          <div className="facility-item">
            {/* <GiCricketBat className="facility-icon" /> */}
            <h4> <GiCricketBat className="facility-icon" />Cricket Practice Net</h4>
          </div>
          <div className="facility-item">
            {/* <FaFootballBall className="facility-icon" /> */}
            <h4><FaFootballBall className="facility-icon" />Football Field</h4>
          </div>
          <div className="facility-item">
            {/* <FaTableTennis className="facility-icon" /> */}
            <h4> <FaTableTennis className="facility-icon" />Track and field</h4>
          </div>
          <div className="facility-item">
            {/* <FaBasketballBall className="facility-icon" /> */}
            <h4><FaBasketballBall className="facility-icon" />Basketball Court</h4>
          </div>
          <div className="facility-item">
            {/* <GiTennisRacket className="facility-icon" /> */}
            <h4><GiTennisRacket className="facility-icon" />Badminton Court</h4>
          </div>
          <div className="facility-item">
            {/* <FaSkating className="facility-icon" /> */}
            <h4><FaSkating className="facility-icon" />Skating Rink</h4>
          </div>
        </div>
      </div>
      <div className="sports-slider">
        <Slider {...sliderSettings}>
          <div><img className="sports-img" src={img1} alt="Sports ground 1" /></div>
          <div><img src={img2} alt="sports 2" style={{ height: '70.15vh' }} /></div>
          <div><img className="sports-img" src={img3} alt="Sports ground 3" /></div>
          <div><img className="sports-img" src={img4} alt="Sports ground 2" /></div>
          <div><img className="sports-img" src={img5} alt="Sports ground 3" /></div>
          <div><img className="sports-img" src={img6} alt="Sports ground 2" /></div>
          <div><img className="sports-img" src={img7} alt="Sports ground 3" /></div>
        </Slider>
      </div>
    </div>
    <div id="spapara">
        <span>To stimulate competitive behavior among students and strengthen physical & mental
           growth SVIS offers both outdoor and indoor game facilities led by experienced and 
           competent coaches. Running track, Basketball, Football, Kabaddi, Kho-kho, Tennicoit, Shuttle, Skipping, Carroms, Chess, etc.
          <br></br> <br></br> 
          <b>Physical Education for Saririk Vikash</b>  <br></br><br></br>
          <center><div id="spoi2"></div></center><br></br><br></br>
           Children should be strong and fit, they should be good sportsmen and their physical capabilities should be adequately developed. Only such like children can become defenders of their country and their faith. All schools of Vidya Bharati have facilities and programmes for physical development of children. Classwise physical education syllabus has been developed by specialists for this purpose. Regional Physical Training Centers have been established for specialized physical training. A national Sports Committee for Vidya Bharati is also being constituted.Vidya Bharati is affiliated to SGFI as a state.
           <br></br>  <br></br> 
          <b>All India Sports Meet</b> <br></br> <br></br>
           Vidya Bharati started holding All India Sports meet in the year 1988-89 in order to commemorate the birth centenary of Param Pujya Dr. HedeawarJi. the first SarSanghchalak of R.S.S. During these tournaments boys & girls of Middle, High & Sr. Secondary classes (Bal, Kishor &Tarun) take part in separate groups. Besides Kabbadi, Kho-kho there are about sixty items of athletics. A participant can take part in three events only. These tournaments start from schools & go upto District, Circle State, Region& National Level. Participants getting first position in Kshetra level games and athletic events take part in national tournament. S.G.F.I has also patronised VidyaBharati as a state to participate in national competitions
          <br></br><br></br>
          <b>Outdoor Games</b><br></br><br></br><br></br>
          <center><div id="spoi3"></div></center><br></br><br></br>
          Games form an important part of the daily activity at the Vidyaranya school. In Telangana, it is considered the best school with excellent facility for outdoor games. Students are expected to participate in sports every day for an hour. They are given the option to choose two games from more than 11 games practiced in the school. SVAV has two well maintained football grounds and one cricket net practice ground. We also have a Danda, Niyudda and an archery pavilion.
           Apart from this, the school also has two courts each for basketball and volleyball respectively. The school also has three kabaddi, Kho-Kho courts where interested students are provided coaching. Outdoor activities like field and track events, badminton, cricket, football, basketball help students stay active and healthy.
         <br></br><br></br>
         <b>Indoor Games</b><br></br><br></br><br></br>
           <center><div id="spoi1"></div></center><br></br><br></br>
        SVAV offers its students a number of options when it comes to indoor games. From Excellent skating facility to chess and the popular Carrom, all games that promote team spirit and healthy competition are encouraged among students.
      
        </span> 
   </div><br></br>

    </div>
  );
};

export default Sportsroom;
