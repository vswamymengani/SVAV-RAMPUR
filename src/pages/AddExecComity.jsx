import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

// Updated validation schema
const schema = yup.object({
  sno: yup.string().required('SNO is required'),
  designation: yup.string().required('Designation is required'),
  name: yup.string().required('Name is required'),
  address: yup.string().required('Address is required'),
});

const AddExecComity = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://18.60.190.183:3001/api/committee_members', data);
      alert('Faculty registered successfully!');
      console.log('Faculty registered successfully:', response.data);
      reset();
    } catch (error) {
      console.error('Error registering faculty:', error);
    }
  };

  const handleClose = () => {
    reset(); // Clears the form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1300px', margin: 'auto', marginTop: '20px' }}>
      <center><h2>Executive Committee Registration Form</h2></center>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>SNO:</label>
          <input {...register('sno')} style={{ width: '300px' }} />
          {errors.sno && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.sno.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Designation:</label>
          <input {...register('designation')} style={{ width: '300px' }} />
          {errors.designation && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.designation.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Name:</label>
          <input {...register('name')} style={{ width: '300px' }} />
          {errors.name && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.name.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Address:</label>
          <input {...register('address')} style={{ width: '300px' }} />
          {errors.address && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.address.message}</p>}
        </div>
      </div>
      <br /><br />
      <button type="submit" style={{ marginRight: '10px', marginLeft: "460px" }}>Register</button>
      <button type="button" style={{ marginLeft: "50px" }} onClick={handleClose}>Close</button>
    </form>
  );
};

export default AddExecComity;