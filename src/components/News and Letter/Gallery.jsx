import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from './galleryimg1.jpg'; // Placeholder image

const Gallery = () => {
    const [mediaFiles, setMediaFiles] = useState([]);
    const [filteredFiles, setFilteredFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Sports'); // Default category

    // Function to fetch media files from S3 bucket based on selected category
    const fetchMediaFiles = async (category) => {
        try {
            setLoading(true); // Start loading
            const response = await axios.get(`https://www.svavrampur.com/api/sports-images/${category}`);
            
            // Ensure response.data is an array
            if (Array.isArray(response.data)) {
                const s3MediaFiles = response.data.map(item => ({
                    id: item.Key,
                    uploadfile: item.Key,
                    filename: item.Key.split('/').pop(), // Extract file name from the Key
                    fileType: item.Key.split('.').pop(), // Get file type (e.g., jpg, mp4)
                    screenname: category,
                }));

                setMediaFiles(s3MediaFiles);

                if (category) {
                    setFilteredFiles(s3MediaFiles.filter(file => file.screenname === category));
                } else {
                    setFilteredFiles(s3MediaFiles);
                }
            } else {
                setMediaFiles([]);
                setFilteredFiles([]);
                console.error('Unexpected response format:', response.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        fetchMediaFiles(selectedCategory); // Fetch files for the default category
    }, [selectedCategory]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading media files: {error.message}</p>;

    return (
        <div>
            <div className="image-container">
                <img src={img1} alt="Placeholder" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div>
                <center><h1 style={{ fontFamily: 'Cursive' }} >Media Gallery</h1></center>
                <div className="button-group" style={{ marginTop: '3%', textAlign: 'center' }}>
                    <button onClick={() => setSelectedCategory('Sports')}>Sports</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => setSelectedCategory('Celebrations')}>Celebrations</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => setSelectedCategory('Annual Day')}>Annual Day</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => setSelectedCategory('Learning')}>Learning</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => setSelectedCategory('Kids Activities')}>Kids Activities</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {filteredFiles.map((file) => (
                        <div key={file.id} style={{ margin: '10px' }}>
                            {file.fileType === 'mp4' ? (
                                <video
                                    src={`https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/${file.uploadfile}`}
                                    controls
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img
                                    src={`https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/${file.uploadfile}`}
                                    alt={file.filename}
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                            )}
                            {/* <p>{file.filename}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;

















