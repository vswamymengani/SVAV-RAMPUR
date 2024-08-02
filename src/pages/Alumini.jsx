import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import aluminimg1 from './aluminimg1.jpg';
import aluminimg2 from './aluminimg2.jpg';
import { useState } from 'react';
import './Alumini.css';

const Alumini = () => {

  // const [country, setCountry] = useState('');

  // const handleChange3 = (event) => {
  //   setCountry(event.target.value);
  // };

  // const [roles, setRoles] = useState({
  //   teacher: false,
  //   alumni: false,
  // });

  // const handleRoleChange = (event) => {
  //   const { id, checked } = event.target;
  //   setRoles((prevRoles) => ({
  //     ...prevRoles,
  //     [id]: checked,
  //   }));
  // };

  // const handleSubmit1 = (event) => {
  //   event.preventDefault();
   
  //   const selectedRoles = Object.keys(roles).filter(role => roles[role]);
  //   alert(`Selected Roles: ${selectedRoles.join(', ')}`);
  // };

  // const [formData, setFormData] = useState({
  //   fullname: '',
  //   email: '',
  //   mobile: '',
  //   profession: '',
  //   jobLocation: '',
  //   dob: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data Submitted: ', formData);
    
  // };

  return (
    <div>
      <div className="carousel-wrapper">
        <Carousel
          showArrows={true} // Display navigation arrows
          showThumbs={false} // Hide thumbnail indicators
          infiniteLoop={true} // Enable infinite looping
          autoPlay={true} // Auto-play the slides
          interval={1800} // Change slides every 1.8 seconds
          showStatus={false} // Hide the current slide indicator
          stopOnHover={true} // Stop auto-play on hover
        >
          <div className="carousel-slide">
            <img src={aluminimg1} alt="School Campus View 1" style={{ width: '100%', height: '600px' }} />
          </div>
          <div className="carousel-slide">
            <img src={aluminimg2} alt="School Campus View 2" style={{ width: '100%', height: '600px' }} />
          </div>
        </Carousel>
      </div>
      <br></br><br></br><br></br>
      <center><div style={{fontSize:"30px"}}>Alumini/Teacher Registration Form</div></center>
      <br></br><br></br>
      <center><div style={{color:"red",fontSize:"24px"}}>Note: The portal is currently undergoing maintenance. Please register using the provided Google Form</div></center>
      <center><div style={{color:"red",fontSize:"24px"}}>link:<button className="my-link1"><a href="https://docs.google.com/forms/d/1wowPkKmFhUbTjGhGPQKP8PCefB7kn8XeG_pc9ApgknY/edit" >click here to register</a></button></div></center>
     
      <br></br><br></br>
{/* 
      <div className="account-details-form">
        <h2></h2>
       
        <form onSubmit={handleSubmit}>
          <div className="horizontal-group">
            <div>
              <label>Full Name:</label>
              <input 
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email ID:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Mobile No:</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="horizontal-group">
            <div>
              <label>Current Profession:</label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
              >
                <option value="" disabled> - Select - </option>
                <option value="student">Student</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
                <option value="teacher">Teacher</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Job Location:</label>
              <input
                type="text"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br></br><br></br><br></br><br></br>
      <div className="registration-form">
    <center>  <h2></h2>  </center> 
      <form onSubmit={handleSubmit1}>
        <div>
          <label>Role(s):</label><br></br><br></br>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="teacher"
                checked={roles.teacher}
                onChange={handleRoleChange}
              />
              <label htmlFor="teacher">Teacher</label>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="alumni"
                checked={roles.alumni}
                onChange={handleRoleChange}
              />
              <label htmlFor="alumni">Alumni</label>
            </div>
          </div>
          <span>You can register as both alumni and teacher if you have studied as well as taught in one of the Vidya Bharati Schools.</span>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
       
    <div className="address-details-form">
    <center>  <h2></h2>  </center> 
    <form>
    
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        name="country"
        value={country}
        onChange={handleChange3}
      >
        <option value="">Select a country</option>
        <option value="usa">United States</option>
        <option value="can">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="aus">Australia</option>
        <option value="ind">India</option>
        Add more options as needed
      </select>

    </form> */}
             
          
    {/* </div> */}
    </div>
  );
}

export default Alumini;
