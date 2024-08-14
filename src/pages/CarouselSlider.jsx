
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselSlider.css'; // Optional: For custom styling
import welslide1 from './welslide1.jpg';
import welslide2 from './welslide2.jpg';
import welslide3 from './welslide3.jpg';
import welslide4 from './welslide4.jpg';
import Slide1 from './newslide1.jpg';
import Slide2 from './newslide2.jpg';
import Slide3 from './newslide3.jpg';
import Slide4 from './newslide4.jpg';
import Slide5 from './newslide5.jpg';
import Slide6 from './newslide6.jpg';
// import Slide7 from './assets/saraswathimatha.png';
// import Slide8 from './assets/saraswathimatha1.png';

const CarouselSlider = () => {
  const images = [welslide1, welslide2,welslide3,welslide4,Slide1, Slide2, Slide3, Slide4, Slide5,Slide6];


  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={true}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={true}
      className="carousel-slider"
    >
      {images.map((src, index) => (
        <div key={index} className="carousel-image-container">
          <img src={src} alt={'Slide ${index}'} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;