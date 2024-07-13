import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can also send the form data to a server here
  };

  return (
    <div>
        
        <form onSubmit={handleSubmit} style={{width:'100%', marginLeft:'100px',marginRight:'400px'}}>
  <div style={{ display: 'flex', alignItems: 'center', width:'100%' }}>
    <h1 style={{ marginRight: '20px' }}>REQUEST A CALL BACK</h1>
    <input 
      type="text" 
      id="name" 
      name="name" 
      value={formData.name} 
      onChange={handleChange} 
      placeholder='Name' 
      style={{ marginRight: '10px' }}
    />
    <input 
      type="email" 
      id="email" 
      name="email" 
      value={formData.email} 
      onChange={handleChange} 
      placeholder='Email' 
      style={{ marginRight: '10px' }}
    />
    <input 
      type="tel" 
      id="phone" 
      name="phone" 
      value={formData.phone} 
      onChange={handleChange} 
      placeholder='Phone' 
      style={{ marginRight: '10px' }}
    />
    <button type="submit">Submit</button>
  </div>
</form>
</div>
  );
}

export default ContactForm;
