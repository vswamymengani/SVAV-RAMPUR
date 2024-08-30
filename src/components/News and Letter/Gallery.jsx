import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from './galleryimg1.jpg'; // Placeholder image

const Gallery = () => {
  const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');


  // Function to fetch images from API based on selected category
  const fetchImages = async (category = '') => {
    try {
        const response = await axios.get('http://localhost:3001/api/events');
        setImages(response.data);
        if (category) {
            setFilteredImages(response.data.filter(image => image.screenname === category));
        } else {
            setFilteredImages(response.data);
        }
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};
useEffect(() => {
  fetchImages(); // Initial fetch without a category
}, []);

useEffect(() => {
  if (selectedCategory) {
      fetchImages(selectedCategory);
  }
}, [selectedCategory]);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <div>
      <div className="image-container">
        <img src={img1} alt="Placeholder" style={{ width: '100%', height: 'auto' }} />
      </div>

      

      <div>
      <h2>Image Gallery</h2>
            <div className="button-group" style={{ marginTop: '3%', textAlign: 'center' }}>
                <button onClick={() => setSelectedCategory('Sports')}>Sports</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setSelectedCategory('Celebrations')}>Celebrations</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setSelectedCategory('Annual Day')}>Annual Day</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setSelectedCategory('Learning')}>Learning</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setSelectedCategory('Kids Activities')}>Kids Activities</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredImages.map((image) => (
                    <div key={image.id} style={{ margin: '10px' }}>
                        <img
                            src={`http://localhost:3001/uploads/${image.uploadfile}`}
                            alt={image.imagename}
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <p>{image.imagename}</p>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
};

export default Gallery;