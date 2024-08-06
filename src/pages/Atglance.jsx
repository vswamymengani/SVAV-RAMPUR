
import  { useState, useEffect } from 'react';
import './Atglance.css';
import img1 from './IMG-20240715-WA0061.jpg';
import img2 from './IMG-20240715-WA0062.jpg';
import img3 from './IMG-20240715-WA0063.jpg';
import img4 from './IMG-20240715-WA0064.jpg';
import img5 from './IMG-20240715-WA0065.jpg';
import img6 from './IMG-20240715-WA0066.jpg';

const Atglance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6];
    // Function to show the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to show the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div >
    <div>
      <img id="atimg"></img>
      </div>
    <div id="atpara">    <br></br><br></br>
          <center><b id="atp1" style={{fontFamily:"cursive"}}>AT GLANCE</b></center><br></br><br></br>
              <h6 id="parat">
               <b>Sri Vidyaranya Avasa Vidyalayam</b>  at Chokkaram Nagar, Rampur is a English medium school offering education from Nursery to 10th grade.
                It is one of the 200 schools run by Sri Saraswathi Vidya Peetham, Telangana, a state level body affiliated to Vidya Bharati.<br></br><br></br>
                Vidya Bharati is a nonprofit national level NGO dedicated to the cause of education, running 25,000 schools across the country (including 7,000 single teacher schools in remote tribal areas).<br></br><br></br>
                The mission of these schools is to give a high standard of education with an emphasis on overall personality development while inculcating cultural values and ethics.<br></br><br></br>
                Our objective is also to make Quality education affordable and accessible to all sections of the society, rich and under-privileged alike. No child should be left behind or denied an opportunity to learn
              </h6>
    </div>  <br></br><br></br>
    {/* <div id="at1img"></div>
    <div id="at2img"></div>
    <div id="at3img"></div>
    <div id="at4img"></div>
    <div id="at5img"></div>
    <div id="at6img"></div> */}
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((src, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>

    </div>
   
  )
}

export default Atglance;