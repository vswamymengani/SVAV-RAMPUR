import { useState } from 'react';
import img1 from '../Facilities/dining.jpg';
import img2 from '../Facilities/clsimg1.jpg';
import img3 from '../Facilities/clsimg2.jpg';
import img4 from '../Facilities/clsimg3.jpg';

import Tabs from './Tabs';
import TabContent from './TabContent';
import './Gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define an array of image objects
  const imageCategories = [
    { title: 'Dining', images: [img1] },
    { title: 'Classroom 1', images: [img2] },
    { title: 'Classroom 2', images: [img3] },
    { title: 'Classroom 3', images: [img4] }
  ];

  // Extract titles for tabs
  const tabs = imageCategories.map(category => category.title);

  return (
    <div className="gallery">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent images={imageCategories[activeTab].images} />
    </div>
  );
};

export default Gallery;
