import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UploadForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            screenname: 'select Screen Name',
            imageorvideo: 'Image', // Default value for Image or Video field
            imagename: '',
            videoname: '',
            eventname: '',
            eventdesc: '',
            eventdate: '' // Default value for Event Date field
        }
    });

    const [showScreenNameDropdown, setShowScreenNameDropdown] = useState(false);
    const [showImageOrVideoDropdown, setShowImageOrVideoDropdown] = useState(false);
    const [selectedScreenName, setSelectedScreenName] = useState('Default Screen Name');
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
            formData.append('eventdate', data.eventdate); // Include event date in form data

            // Attach the uploaded file
            if (data.uploadfile.length > 0) {
                formData.append('uploadfile', data.uploadfile[0]);
            }

            // Send form data to the backend
            const response = await axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Upload successful:', response.data);

            // Reset form after successful upload
            reset();
        } catch (error) {
            console.error('Upload failed:', error);
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
                <div>
                    <label>Screen Name:</label>
                    <div style={{ position: 'relative' }}>
                        <button 
                            type="button" 
                            onClick={() => toggleDropdown('screenname')} 
                            style={{ width: '100%', textAlign: 'left', padding: '8px', border: '1px solid #ccc', background: '#fff' }}
                        >
                            {selectedScreenName}
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
                                    onClick={() => handleOptionClick('screenname', 'Screen 1')}
                                    style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                                >
                                    Screen 1
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleOptionClick('screenname', 'Screen 2')}
                                    style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                                >
                                    Screen 2
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleOptionClick('screenname', 'Screen 3')}
                                    style={{ width: '100%', textAlign: 'left', padding: '8px', border: 'none', background: 'none' }}
                                >
                                    Screen 3
                                </button>
                                {/* Add more options as needed */}
                            </div>
                        )}
                    </div>
                    {errors.screenname && <p>Screen Name is required and must be less than 20 characters.</p>}
                </div>

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

                {/* Conditionally Render Fields Based on Selection */}
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
                        {...register('eventdesc', { maxLength: 120 })}
                    />
                    {errors.eventdesc && <p>Event description must be less than 120 characters.</p>}
                </div>

                <div>
                    <label>Event Date:</label>
                    <input
                        type="date"
                        {...register('eventdate', { required: 'Event date is required' })}
                    />
                    {errors.eventdate && <p>{errors.eventdate.message}</p>}
                </div>

                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadForm;