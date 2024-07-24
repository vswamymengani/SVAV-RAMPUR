import { useState } from 'react';
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
import img19 from '../Facilities/balanced-diet.png';
import img20 from '../Facilities/bio.png';
import img21 from '../Facilities/biolab1.jpg';
import img22 from '../Facilities/Boarding campus-ayodya-2.jpg';
import img23 from '../Facilities/Boarding campus-Ayodya.jpg';
import img24 from '../Facilities/chemlab.jpg';
import img25 from '../Facilities/cir.png';

import Tabs from './Tabs';
import TabContent from './TabContent';
import './Gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define an array of image objects
  const imageCategories = [
    { title: 'Dining', image: img1, images: [img1] },
    { title: 'Classroom1', image: img2, images: [img2] },
    { title: 'Classroom2', image: img3, images: [img3] },
    { title: 'Classroom3', image: img4, images: [img4] },
    { title: 'sciencelab', image: img5, images: [img5] },
    { title: 'chemlab', image: img6, images: [img6] },
    { title: 'art1', image: img7, images: [img7] },
    { title: 'art2', image: img8, images: [img8] },
    { title: 'art3', image: img9, images: [img9] },
    { title: 'art4', image: img4, images: [img10] },
    { title: 'art5', image: img5, images: [img11] },
    { title: 'art6', image: img6, images: [img12] },
    { title: 'art7', image: img7, images: [img13] },
    { title: 'art8', image: img14, images: [img14] },
    { title: 'Dining', image: img15, images: [img15] },

    { title: 'Classroom1', image: img16, images: [img16] },
    { title: 'Classroom2', image: img17, images: [img17] },
    { title: 'Classroom3', image: img18, images: [img18] },
    { title: 'sciencelab', image: img19, images: [img19] },
    { title: 'chemlab', image: img20, images: [img20] },
    { title: 'art1', image: img21, images: [img21] },
    { title: 'art2', image: img22, images: [img22] },
    { title: 'art3', image: img23, images: [img23] },
    { title: 'art4', image: img24, images: [img24] },
    { title: 'art5', image: img25, images: [img25] },
    { title: 'art6', image: img6, images: [img12] },
  
    

  ];

  return (
    <div className="gallery">
      <Tabs tabs={imageCategories} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent images={imageCategories[activeTab].images} />
    </div>
  );
};

export default Gallery;