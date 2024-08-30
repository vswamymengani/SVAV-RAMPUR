import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UploadForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            screenname: '', // Default value set to empty string
            imageorvideo: 'Image',
            imagename: '',
            videoname: '',
            eventname: '',
            eventdesc: '',
            eventdate: ''
        }
    });

    const [showScreenNameDropdown, setShowScreenNameDropdown] = useState(false);
    const [showImageOrVideoDropdown, setShowImageOrVideoDropdown] = useState(false);
    const [selectedScreenName, setSelectedScreenName] = useState('');
    const [selectedImageOrVideo, setSelectedImageOrVideo] = useState('Image');

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('screenname', selectedScreenName);
            formData.append('imageorvideo', selectedImageOrVideo);
            formData.append('imagename', data.imagename);
            formData.append('videoname', data.videoname);
            formData.append('eventname', data.eventname);
            formData.append('eventdesc', data.eventdesc);
            formData.append('eventdate', data.eventdate);

            // Attach the uploaded file
            if (data.uploadfile.length > 0) {
                formData.append('uploadfile', data.uploadfile[0]);
            }

            // Log form data to check contents
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Send form data to the backend
            const response = await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Upload successful:', response.data);
            reset();
            alert('Upload successful!');
            
            // Refresh the page after successful upload
            window.location.reload();
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed. Please try again.');
        }
    };
    const toggleDropdown = (type) => {
        if (type === 'screenname') {
            setShowScreenNameDropdown(!showScreenNameDropdown);
        } else if (type === 'imageorvideo') {
            setShowImageOrVideoDropdown(!showImageOrVideoDropdown);
        }
    };

    const handleOptionClick = (type, value) => {
        if (type === 'screenname') {
            setSelectedScreenName(value);
            setShowScreenNameDropdown(false);
        } else if (type === 'imageorvideo') {
            setSelectedImageOrVideo(value);
            setShowImageOrVideoDropdown(false);
        }
    };

    return (
        <div>
        <h2>Upload Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Screen Name Selection */}
            <div>
                <label>Screen Name:</label>
                <div style={{ position: 'relative' }}>
                    <button
                        type="button"
                        onClick={() => toggleDropdown('screenname')}
                        style={{ width: '100%', textAlign: 'left', padding: '8px', border: '1px solid #ccc', background: '#fff' }}
                    >
                        {selectedScreenName || 'Select Screen Name'}
                    </button>
                    {showScreenNameDropdown && (
                        <div style={{
                            position: 'absolute',
                            border: '1px solid #ccc',
                            backgroundColor: '#fff',
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                            zIndex: 1000,
                            width: '100%',
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                            borderRadius: '4px'
                        }}>
                            <button
                                type="button"
                                onClick={() => handleOptionClick('screenname', 'Sports')}
                                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                            >
                                Sports
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOptionClick('screenname', 'Celebrations')}
                                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                            >
                                Celebrations
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOptionClick('screenname', 'Annual Day')}
                                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                            >
                                Annual Day
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOptionClick('screenname', 'Learning')}
                                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                            >
                                Learning
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOptionClick('screenname', 'Kids Activities')}
                                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                            >
                                Kids Activities
                            </button>
                        </div>
                    )}
                </div>
                {errors.screenname && <p>Screen Name is required and must be less than 20 characters.</p>}
            </div>

            {/* Image or Video Selection */}
            <div>
                <label>Image or Video:</label>
                <div style={{ position: 'relative' }}>
                    <button
                        type="button"
                        onClick={() => toggleDropdown('imageorvideo')}
                        style={{ width: '100%', textAlign: 'left', padding: '8px', border: '1px solid #ccc', background: '#fff' }}
                    >
                        {selectedImageOrVideo}
                    </button>
                    {showImageOrVideoDropdown && (
                        <div style={{
                            position: 'absolute',
                            border: '1px solid #ccc',
                            backgroundColor: '#fff',
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                            zIndex: 1000,
                            width: '100%',
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                            borderRadius: '4px'
                        }}>
                            <button
                                type="button"
                                onClick={() => handleOptionClick('imageorvideo', 'Image')}
                                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                            >
                                Image
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOptionClick('imageorvideo', 'Video')}
                                style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                            >
                                Video
                            </button>
                        </div>
                    )}
                </div>
                {errors.imageorvideo && <p>Image or Video selection is required.</p>}
            </div>

            {/* Conditional Input Fields for Image/Video */}
            {selectedImageOrVideo === 'Image' && (
                <div>
                    <label>Image Name:</label>
                    <input
                        type="text"
                        {...register('imagename', { maxLength: 30 })}
                    />
                    {errors.imagename && <p>Image name must be less than 30 characters.</p>}
                </div>
            )}

            {selectedImageOrVideo === 'Video' && (
                <div>
                    <label>Video Name:</label>
                    <input
                        type="text"
                        {...register('videoname', { maxLength: 30 })}
                    />
                    {errors.videoname && <p>Video name must be less than 30 characters.</p>}
                </div>
            )}

            {/* File Upload */}
            <div>
                <label>Upload File:</label>
                <input
                    type="file"
                    {...register('uploadfile', {
                        required: 'A file is required',
                        validate: {
                            checkFileType: (files) => {
                                const fileType = files[0]?.type;
                                return fileType && (fileType.startsWith('image/') || fileType.startsWith('video/')) || 'Only images or videos are allowed';
                            }
                        }
                    })}
                    accept="image/*,video/*"
                />
                {errors.uploadfile && <p>{errors.uploadfile.message}</p>}
            </div>

            {/* Event Details */}
            <div>
                <label>Event Name:</label>
                <input
                    type="text"
                    {...register('eventname', { maxLength: 30 })}
                />
                {errors.eventname && <p>Event name must be less than 30 characters.</p>}
            </div>

            <div>
                <label>Event Description:</label>
                <textarea
                    {...register('eventdesc', { maxLength: 250 })}
                />
                {errors.eventdesc && <p>Event description must be less than 250 characters.</p>}
            </div>

            <div>
                <label>Event Date:</label>
                <input
                    type="date"
                    {...register('eventdate', {
                        required: 'Event date is required'
                    })}
                />
                {errors.eventdate && <p>{errors.eventdate.message}</p>}
            </div>

            <button type="submit">Upload</button>
        </form>
    </div>
    );
};

export default UploadForm;