import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselSlider.css'; // Optional: For custom styling

const CarouselSlider = () => {
  // Use the provided S3 image URLs
  const images = [
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/1.jpg',
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/2.jpg',
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/3.jpg',
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/4.jpg',
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/5.jpg',
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/6.jpg',
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/7.jpg',
    'https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenMainSlides/8.jpg'
  ];

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
          <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;