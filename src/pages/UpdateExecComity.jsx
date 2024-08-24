import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import PropTypes from 'prop-types';

// Updated validation schema
const schema = yup.object({
  sno: yup.string().required('SNO is required'),
  designation: yup.string().required('Designation is required'),
  name: yup.string().required('Name is required'),
  address: yup.string().required('Address is required'),
});

const UpdateExecComity = (props) => {
  const { sno } = props; // sno prop to fetch student data
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
    if (sno) {
      // Fetch student data based on SNO
      const fetchStudentData = async () => {
        try {
          const response = await axios.get(`http://www.svavrampur.com/api/committee_members/${sno}`);
          console.log('Fetched student data:', response.data);

          const fetchedStudent = response.data; // Adjust if the response structure differs
          setStudent(fetchedStudent);
          reset(fetchedStudent); // Reset form with fetched data
        } catch (error) {
          console.error('Error fetching student data:', error);
          setStudent(null); // Clear student data on error
        }
      };
      fetchStudentData();
    }
  }, [sno, reset]);

  const onSubmit = async (data) => {
    console.log('Submitting data:', data); // Debugging line
    try {
      const response = await axios.put(`http://www.svavrampur.com/api/committee_members/${sno}`, data);
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
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1300px', margin: 'auto', marginTop: '0px', maxHeight:'900px'}}>
      <center><h2>Update Exec_Comity Information</h2></center>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>SNO:</label>
          <input {...register('sno')} style={{ width: '300px' }} readOnly />
          {errors.sno && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.sno.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '140px' }}>
          <label style={{ width: '150px' }}>Designation:</label>
          <input {...register('designation')} style={{ width: '300px' }} />
          {errors.designation && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.designation.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Name:</label>
          <input {...register('name')} style={{ width: '300px' }} />
          {errors.name && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.name.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '140px' }}>
          <label style={{ width: '150px' }}>Address:</label>
          <input {...register('address')} style={{ width: '300px' }} />
          {errors.address && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.address.message}</p>}
        </div>
      </div>
      <br /><br />
      <button type="submit" style={{ marginRight: '10px', marginLeft: '460px' }}>Update</button>
      <button type="button" style={{ marginLeft: '50px' }} onClick={handleClose}>Close</button>
    </form>
  );
};

// Prop validation
UpdateExecComity.propTypes = {
  sno: PropTypes.string.isRequired, // Expecting sno prop
};

export default UpdateExecComity;