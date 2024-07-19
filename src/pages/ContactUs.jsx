import  { useState } from 'react';
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
    <h1 id="i1">Contact Us:</h1>
    <div id="i2"></div>
    <div>
      <h2 id="i3">
        Write To Us On:
        <h5 id="i4">Registered Address:</h5>
        <h4 id="i7">
        Sri Vidyaranya Avasa Vidyalayam,<br></br>
        Chokkaram Nagar, Rampur,<br></br>
        Hazipur Mondal, Mancherial district<br></br>
        Telangana state -500301<br></br>
        Phone: 087362 32024

     </h4>
      </h2>
    </div>

      <br /><br /><br></br><br></br><br></br><br></br>

      {/* Add the form here */}
      <div>
    <center> <h2 id="kcf">Contact Form</h2></center> 
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
