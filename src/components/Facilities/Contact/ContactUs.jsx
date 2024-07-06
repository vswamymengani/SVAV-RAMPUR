import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  // State management for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for loading status
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted

    console.log('Form submitted:', formData);

    // Simulate a network request with a timeout
    setTimeout(() => {
      // Reset the form and loading status after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsLoading(false); // Set loading to false once done
      alert('Form submitted successfully!'); // Display a success message
    }, 2000); // Adjust the timeout as needed
  };

  return (
    <div>

      {/* Add the form here */}
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading} // Disable input during submission
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading} // Disable input during submission
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isLoading} // Disable input during submission
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading} // Disable input during submission
            />
          </div>
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>
        {isLoading && <p>Submitting your message, please wait...</p>} {/* Show loading message */}
      </div>
    </div>
  );
};

export default ContactUs;
