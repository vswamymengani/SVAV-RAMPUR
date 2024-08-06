import './Yoga.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './surya.jpg';
import img2 from './yogamantra1.jpg';
import img3 from './yoga2.jpg';


const  Yoga = () => {


  return (
    <div> <br></br><br></br>
      <div className="image-container">
      <img src={img1} alt="Classroom 1" />
    </div>
      <div id="yogapara"> 
        <span>
        Derived from the Sanskrit word ‘yuj’ which means ‘to unite or integrate’, yoga is a 5,000-year-old Indian body of knowledge. Yoga is all about harmonizing the body with the mind and breath through the means of various breathing exercises, yoga poses (asanas) and meditation.
<br></br><br></br>
Yoga is in place at SVIS to focus more on self-awareness and build self-esteem.  Performing Yoga in a classical Indian methodology under the guidance of an expert is well aligned with the curriculum.
<br></br><br></br>
Through regular yoga classes that include practice and theory, students are encouraged to adopt a holistic way of living. Yoga helps students in reducing stress and adding confidence that further enable them to think with clarity and produce a sense of peace. Students also find that yoga helps in controlling emotions and increases the ability to deal with difficult situations.
        </span><br></br><br></br><br></br>
  <span><b>Yoga Education for Pranika Vikash</b><br></br><br></br>
  The science of Yoga was evolved in India in ancient times. It is now being adopted all over the world. Practice of Yoga is the best way for our physical, psychological, intellectual and spiritual development. This has been proved both scientifically and by personal experience. Yoga training centers have been established in all regions of the country which impart Teacher Training and try new experiments. The establishment of a National Yoga Training Centre is also under consideration.
        </span><br></br><br></br><br></br>


        <span>
        •	Make a complete plan of action to implement yoga teaching in the school.<br></br><br></br>
•	Exhibiting our best performers on International Yoga Day.<br></br><br></br>
•	In the summer holidays, a special 7-day event can be arranged for the training of interested students in yoga.<br></br><br></br>
•	Similarly, special yoga camps can be organized for parents and even community members under the supervision of yoga teachers.<br></br><br></br>
•	Every morning students are asked to practice Surya Namaskar.

        </span><br></br><br></br>
        <center> 
          <div><img src={img2} alt="Classroom 1" id='img2' />
        <img src={img3} alt="Classroom 1" id='img3' />
        </div>
        </center>
      </div>
    </div>
  );
};

export default Yoga;