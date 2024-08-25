import { useState } from 'react';
import img1 from './galleryimg1.jpg';


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');

  // Predefined image links for each category
  const imageLinks = {

    sports: [
      'https://drive.google.com/file/d/1lJ28ZSuSGLDlrAc-BnXDirT3NPcS-g-f/view?usp',
      // Add more image links for sports
    ],
    celebrations: [
      'https://drive.google.com/uc?export=view&id=1PjiburW0ui3VwGEgA8LOXVpP3AjkRuU2',
      // Add more image links for celebrations
    ],
    annualDay: [
      'https://drive.google.com/uc?export=view&id=1MXmt8Z0XS6TAK4igRE2579_jmOWs4yx5',
      // Add more image links for annual day
    ],
    learning: [
      'https://drive.google.com/uc?export=view&id=1MXmt8Z0XS6TAK4igRE2579_jmOWs4yx5',
    ],
    kidsActivities: [
      'https://drive.google.com/uc?export=view&id=1MXmt8Z0XS6TAK4igRE2579_jmOWs4yx5',
    ],

    otherActivites:[
      'https://drive.google.com/file/d/1WVVL9CpTxhH760PipZvw8alOPKQJHd0y/view?usp=sharing'
    ]
  };

  // Function to fetch images for a selected category
  const fetchImages = (category) => {
    setLoading(true);
    setCategory(category);

    // Use predefined links
    const categoryImages = imageLinks[category] || [];

    // Simulate loading delay
    setTimeout(() => {
      setImages(categoryImages);
      setLoading(false);
    }, 500); // Adjust delay as needed
  };

  return (
    <div>
     <div className="image-container">
  <img src={img1} alt="Classroom 1" />
</div>


           
        <div className="button-group" style={{ marginTop: '3%',textAlign:"center" }}>
          <button onClick={() => fetchImages('sports')}>Sports</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => fetchImages('celebrations')}>Celebrations</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => fetchImages('annualDay')}>Annual Day</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => fetchImages('learning')}>Learning</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => fetchImages('kidsActivities')}>Kids Activities</button>
        </div>
    

      <div>
        <h2>{category} Gallery</h2>
        {loading && <p>Loading images...</p>}
        <div className="gallery">
          {images.length > 0 &&
            images.map((image, index) => (
              <iframe
                key={index}
                src={image}
                title={`${category}-img-${index}`}
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
