import  { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './HomeScreenSlides.css';

const HomeScreenSlides = ({ onUploadSuccess = () => {} }) => { // Default empty function
  const { register, handleSubmit, reset } = useForm();
  const [existingImage, setExistingImage] = useState(null);
  const [slidename, setSlidename] = useState('HomeScreenMainSlides');
  const [sno, setSno] = useState('1');
  const [isNewImage, setIsNewImage] = useState(false); // Flag to determine if it's a new image
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  const fetchExistingImage = async (slidename, sno) => {
    try {
      const response = await axios.get(`https://www.svavrampur.com/api/image-details/${slidename}/${sno}`);
      if (response.status === 200) {
        setExistingImage(response.data.imageUrl);
      }
    } catch (error) {
      console.error('Error fetching existing image:', error);
      setExistingImage(null);
    }
  };

  useEffect(() => {
    if (!isNewImage) {
      fetchExistingImage(slidename, sno);
    } else {
      setExistingImage(null);
    }
  }, [slidename, sno, isNewImage]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('slidename', data.slidename);
    formData.append('sno', data.sno);

    try {
      let response;
      if (isNewImage) {
        // POST request for a new image
        response = await axios.post('https://www.svavrampur.com/api/homeslides', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        // PUT request to replace an existing image
        response = await axios.put(`https://www.svavrampur.com/api/replace-image/${data.slidename}/${data.sno}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      if (response.status === 200) {
        setSuccessMessage('Image uploaded successfully!');
        alert("Successfully")
        onUploadSuccess(response.data.imageUrl);
        reset();
        if (!isNewImage) {
          fetchExistingImage(data.slidename, data.sno);
        }
      } else {
        console.error('Error: Response status not 200', response.status);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

//   const handleClosePopup = () => {
//     setSuccessMessage('');
//   };

  return (
    <div className="upload-form-container">
      {successMessage && (
        <div className="success-popup">
          {/* <p>{successMessage}</p> */}
          {/* <button onClick={handleClosePopup}>Close</button> */}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="upload-form">
        <label className="form-label">
          Slidename:
          <select
            {...register('slidename', { required: true })}
            className="form-input"
            onChange={(e) => setSlidename(e.target.value)}
            value={slidename}
          >
            <option value="HomeScreenMainSlides">HomeScreenMainSlides</option>
            <option value="HomeScreenPopUpSlides">HomeScreenPopUpSlides</option>
            <option value="slider3">Slider 3</option>
          </select>
        </label>

        <label className="form-label">
          Image S.No:
          <select
            {...register('sno', { required: true })}
            className="form-input"
            onChange={(e) => setSno(e.target.value)}
            value={sno}
            disabled={isNewImage} // Disable S.No selection when adding a new image
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </label>

        <label className="form-label">
          Add New Image:
          <input
            type="checkbox"
            onChange={(e) => setIsNewImage(e.target.checked)}
            checked={isNewImage}
          />
        </label>

        {existingImage && !isNewImage && (
          <div className="existing-image-container">
            <p>Existing Image:</p>
            <img src={existingImage} alt="Existing Slide" className="existing-image" />
          </div>
        )}

        <label className="form-label">
          Image:
          <input type="file" {...register('image', { required: true })} className="form-input" />
        </label>

        <button type="submit" className="form-button">
          {isNewImage ? 'Upload New Image' : 'Replace Image'}
        </button>
      </form>
    </div>
  );
};

export default HomeScreenSlides;