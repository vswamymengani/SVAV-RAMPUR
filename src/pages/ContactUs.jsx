import  { useState } from 'react';
import './ContactUs.css';
import axios from 'axios';
const ContactUs = () => {
  // State management for form fields
  const [formData, setFormData] = useState({
    name: '',
    emailid: '',
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
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true); // Set loading to true when form is submitted

  try {
    const response = await axios.post('http://18.60.190.183:3001/api/contact_us', formData);
    console.log('Form submitted:', response.data);
    alert('Form submitted successfully!')
    setSuccess('Form submitted successfully!');
    setError('');
  } catch (error) {
    console.error('Error submitting form:', error);
    
    setError('There was an error submitting the form.');
    setSuccess('');
  } finally {
    // Reset the form and loading status
    setFormData({
      name: '',
      emailid: '',
      subject: '',
      message: ''
    });
    setIsLoading(false);
  }
  };

  return (
    <div>
    <h1 id="i1">Contact Us:</h1><br></br>
    <div id="i2">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120821.03486408918!2d79.21146627448185!3d18.857897875716414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcd35e11af0283d%3A0x69277e2f4d319e41!2sV75V%2B5G9%2C%20Subbapally%2C%20Telangana%20504207!3m2!1d18.857916!2d79.293868!5e0!3m2!1sen!2sin!4v1722970369274!5m2!1sen!2sin"
  width="90%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="School Location Map"
></iframe>

       </div>
    <div>
      <h2 id="i3">
        Write To Us On:<br></br><br></br>
        <h3 id="i7">&nbsp;&nbsp;&nbsp;<a href="svavrampus.com">svavrampur.com</a></h3><br></br>

        <h5 id="i4">Registered Address:</h5><br></br>
        <h4 id="i7">
       &nbsp; Sri Vidyaranya Avasa Vidyalayam,<br></br>
       &nbsp; Chokkaram Nagar, Rampur,<br></br>
       &nbsp; Hazipur Mondal, Mancherial district<br></br>
       &nbsp; Telangana state -500301<br></br>
       &nbsp; Phone: 087362 32024

     </h4><br></br>

        <h5 id="i4">Central Office:</h5><br></br>
       
        <h4 id="i7">
       &nbsp; Vidyapeetham,Sree Sharadadhamam,<br></br>
       &nbsp; KismatpurRd, Abhyudaya Nagar,<br></br>
       &nbsp; Bandlaguda Jagir, Hyderabad,<br></br>
       &nbsp; Telangana-500086<br></br>
       &nbsp; Phone: 095538 88801

     </h4>
      </h2>
    </div>

      {/* <br /><br /><br></br> */}

      {/* Add the form here */}
      <div className='hq'>
    <center> <h2 id="kcf">Contact Form</h2></center> 
    <div>
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
              name="emailid"
              value={formData.emailid}
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
    </div>
  );
};

export default ContactUs;