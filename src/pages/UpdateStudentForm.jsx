import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import PropTypes from 'prop-types';

// Validation schema
const schema = yup.object({
  stdadmid: yup.string().required('Admission ID is required'),
  stdaadhar: yup.string().required('Aadhar is required'),
  stdname: yup.string().required('Name is required'),
  studentclass: yup.string().required('Class is required'),
  section: yup.string().required('Section is required'),
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
  admissionyear: yup.string().required('Admission year is required'), // Corrected typo
});

const UpdateStudentForm = (props) => {
  const { stdadmid } = props; // admissionId prop to fetch student data
  const [student, setStudent] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (stdadmid) {
      // Fetch student data based on Admission ID
      const fetchStudentData = async () => {
        try {
          const response = await axios.get(`http://www.svavrampur.com/api/students/${stdadmid}`);
          console.log('Fetched student data:', response.data);

          // Assuming the response is an array, get the first item
          const fetchedStudent = response.data[0];
          setStudent(fetchedStudent);
          reset(fetchedStudent); // Reset form with fetched data
        } catch (error) {
          console.error('Error fetching student data:', error);
        }
      };
      fetchStudentData();
    }
  }, [stdadmid, reset]);

  const onSubmit = async (data) => {
    console.log('Submitting data:', data); // Debugging line
    try {
      const response = await axios.put(`http://www.svavrampur.com/api/students/${stdadmid}`, data);
      alert('Student updated successfully!');
      console.log('Student updated successfully:', response.data);
      reset(); // Consider passing the updated data if needed
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleClose = () => {
    reset(); // Clears the form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1300px', margin: 'auto', marginTop: '20px' }}>
      <center><h2>Update Student Information</h2></center>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Admission ID:</label>
          <input {...register('stdadmid')} style={{ width: '300px' }} readOnly />
          {errors.stdadmid && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.stdadmid.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Aadhar:</label>
          <input {...register('stdaadhar')} style={{ width: '300px' }} />
          {errors.stdaadhar && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.stdaadhar.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Name:</label>
          <input {...register('stdname')} style={{ width: '300px' }} />
          {errors.stdname && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.stdname.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Class:</label>
          <input {...register('studentclass')} style={{ width: '300px' }} />
          {errors.studentclass && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.studentclass.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Section:</label>
          <input {...register('section')} style={{ width: '300px' }} />
          {errors.section && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.section.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Contact Number:</label>
          <input {...register('contactnum')} style={{ width: '300px' }} />
          {errors.contactnum && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.contactnum.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Email:</label>
          <input {...register('emailid')} style={{ width: '300px' }} />
          {errors.emailid && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.emailid.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Address:</label>
          <input {...register('address')} style={{ width: '300px' }} />
          {errors.address && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.address.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Gender:</label>
          <select {...register('gender')} style={{ width: '300px' }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.gender.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '100px' }}>Admission year:</label>
          <input {...register('admissionyear')} style={{ width: '300px' }} />
          {errors.admissionyear && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.admissionyear.message}</p>}
        </div>
      </div>
      <br /><br />
      <button type="submit" style={{ marginRight: '10px', marginLeft: "460px" }}>Update</button>
      <button type="button" style={{ marginLeft: "50px" }} onClick={handleClose}>Close</button>
    </form>
  );
};

// Prop validation
UpdateStudentForm.propTypes = {
  stdadmid: PropTypes.string.isRequired, // Expecting admissionId prop
};

export default UpdateStudentForm;
