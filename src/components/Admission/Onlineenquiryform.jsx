import React, { useState } from 'react';
import './Onlineenquiryform.css';

const Onlineenquiryform = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    occupation: '',
    address: '',
    presentSchool: '',
    admissionSought: '',
    phone: '',
    email: '',
    daycareRequest: false,
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to a server or display it
    console.log('Form data submitted:', formData);
    // Clear form after submission
    setFormData({
      studentName: '',
      parentName: '',
      occupation: '',
      address: '',
      presentSchool: '',
      admissionSought: '',
      phone: '',
      email: '',
      daycareRequest: false,
      remarks: '',
    });
  };

  return (
    <div className="enquiry-form-container">
      <h1>Online Enquiry Form</h1>
      <form onSubmit={handleSubmit} className="enquiry-form">
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentName">Parent Name:</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="presentSchool">Present School:</label>
          <input
            type="text"
            id="presentSchool"
            name="presentSchool"
            value={formData.presentSchool}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="admissionSought">Admission Sought Into:</label>
          <input
            type="text"
            id="admissionSought"
            name="admissionSought"
            value={formData.admissionSought}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="daycareRequest">Daycare Request:</label>
          <input
            type="checkbox"
            id="daycareRequest"
            name="daycareRequest"
            checked={formData.daycareRequest}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Remarks:</label>
          <textarea
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Onlineenquiryform;
