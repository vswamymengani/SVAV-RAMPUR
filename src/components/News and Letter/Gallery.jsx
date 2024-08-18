import { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import imgg from './galleryimg.png'; // Banner image
// import g1 from './g1.jpg';
// import g2 from './g2.jpg';
// import g3 from './g3.jpg';
// import g4 from './g4.jpg';
// import g5 from './g5.jpg';
// import g6 from './g6.jpg';
// import g7 from './g7.jpg';
// import g8 from './g8.jpg';
// import g9 from './g9.jpg';
// import g10 from './g10.jpg';
// import g11 from './g11.jpg';
// import g12 from './g12.jpg';
// import g13 from './g13.jpg';
// import g14 from './g14.jpg';
import img1 from '../Facilities/dining.jpg';
import img2 from '../Facilities/clsimg1.jpg';
import img3 from '../Facilities/clsimg2.jpg';
import img4 from '../Facilities/clsimg3.jpg';
import img5 from '../Facilities/ScienceLab.jpg';
import img6 from '../Facilities/chemlab.jpg';
import img7 from '../Facilities/art1.jpg';
import img8 from '../Facilities/art2.jpg';
import img9 from '../Facilities/art3.jpg';
import img10 from '../Facilities/art4.jpg';
import img11 from '../Facilities/art5.jpg';
import img12 from '../Facilities/art6.jpg';
import img13 from '../Facilities/art7.jpg';
import img14 from '../Facilities/Artsimg1.jpg';
import img15 from '../Facilities/auditorium1.jpg';
import img16 from '../Facilities/auditorium2.jpg';
import img17 from '../Facilities/auditorium3.jpg';
import img18 from '../Facilities/auditorium4.jpg';

import img20 from '../Facilities/bio.png';
import img21 from '../Facilities/biolab1.jpg';
import img22 from '../Facilities/Boarding campus-ayodya-2.jpg';
import img23 from '../Facilities/Boarding campus-Ayodya.jpg';
import img24 from '../Facilities/chemlab.jpg';
import img25 from '../Facilities/cir.png';

import './Gallery.css'; // Import CSS for styling

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18, img20, img21, img22, img23,
    img24, img25
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <center>
        <div>
          <img src={imgg} alt="Gallery Banner" style={{ width: '100%' }} />
        </div>
      </center>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index}`}
            className="gallery-image"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Gallery;
