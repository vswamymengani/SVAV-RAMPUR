import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import PropTypes from 'prop-types';

// Validation schema
const schema = yup.object({
  facultyadmid: yup.string().required('Admission ID is required'),
  facultyaadhar: yup.string().required('Aadhar is required'),
  facultyname: yup.string().required('Name is required'),
  subject: yup.string().required('Subject is required'),
  qualification: yup.string().required('Qualification is required'),
  experience: yup.string().required('Experience is required'),
  contactnum: yup
    .string()
    .matches(/^\d{10}$/, 'Contact number must be 10 digits')
    .required('Contact number is required'),
  emailid: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  address: yup.string().required('Address is required'),
  gender: yup
    .string()
    .oneOf(['male', 'female', 'other'], 'Gender is required')
    .required('Gender is required'),
});

const UpdateFacultyForm = (props) => {
  const { facultyadmid } = props; // facultyid prop to fetch faculty data
  const [faculty, setFaculty] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchFacultyData = async () => {
      if (facultyadmid) {
        try {
          const response = await axios.get(`http://18.60.190.183:3001/api/faculty/${facultyadmid}`);
          console.log('Fetched faculty data:', response.data);

          const fetchedFaculty = response.data; // Assuming response is an object, not an array
          setFaculty(fetchedFaculty);
          reset(fetchedFaculty); // Reset form with fetched data
        } catch (error) {
          console.error('Error fetching faculty data:', error);
        }
      }
    };
    fetchFacultyData();
  }, [facultyadmid, reset]);

  const onSubmit = async (data) => {
    console.log('Submitting data:', data);
    try {
      const response = await axios.put(`http://18.60.190.183:3001/api/faculty/${facultyadmid}`, data);
      alert('Faculty updated successfully!');
      console.log('Faculty updated successfully:', response.data);
      reset(); // Consider passing the updated data if needed
    } catch (error) {
      console.error('Error updating faculty:', error);
    }
  };

  const handleClose = () => {
    reset(); // Clears the form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1300px', margin: 'auto', marginTop: '20px' }}>
      <center><h2>Update Faculty Information</h2></center>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Admission ID:</label>
          <input {...register('facultyadmid')} style={{ width: '300px' }} readOnly />
          {errors.facultyadmid && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.facultyadmid.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Aadhar:</label>
          <input {...register('facultyaadhar')} style={{ width: '300px' }} />
          {errors.facultyaadhar && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.facultyaadhar.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Name:</label>
          <input {...register('facultyname')} style={{ width: '300px' }} />
          {errors.facultyname && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.facultyname.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Subject:</label>
          <input {...register('subject')} style={{ width: '300px' }} />
          {errors.subject && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.subject.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Qualification:</label>
          <input {...register('qualification')} style={{ width: '300px' }} />
          {errors.qualification && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.qualification.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Experience:</label>
          <input {...register('experience')} style={{ width: '300px' }} />
          {errors.experience && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.experience.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Contact No:</label>
          <input {...register('contactnum')} style={{ width: '300px' }} />
          {errors.contactnum && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.contactnum.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Email:</label>
          <input {...register('emailid')} style={{ width: '300px' }} />
          {errors.emailid && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.emailid.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Address:</label>
          <input {...register('address')} style={{ width: '300px' }} />
          {errors.address && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.address.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Gender:</label>
          <select {...register('gender')} style={{ width: '300px' }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.gender.message}</p>}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button type="submit" style={{ marginRight: '10px' }}>Update</button>
        <button type="button" onClick={handleClose} style={{ marginLeft: '10px' }}>Cancel</button>
      </div>
    </form>
  );
};

UpdateFacultyForm.propTypes = {
  facultyadmid: PropTypes.string.isRequired,
};

export default UpdateFacultyForm;
