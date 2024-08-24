
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

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
});

const StudentRegistrationForm = () => {
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
      const response = await axios.post('http://www.svavrampur.com/api/students', data);
      alert('Student registered successfully!'); // Show success message after form submission
      console.log('Student registered successfully:', response.data);
      reset();
    } catch (error) {
      console.error('Error registering student:', error);
    }
  };

  const handleClose = () => {
    reset(); // Clears the form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1300px', margin: 'auto', marginTop: '20px' }}>
      <center><h2>Student Registration Form</h2></center>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Admission ID:</label>
          <input {...register('stdadmid')} style={{ width: '300px' }} />
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
        <div style={{ display: 'flex', alignItems: 'center',marginRight: '20px' }}>
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
          <label style={{ width: '100px' }}>Admission Year:</label>
          <input {...register('admissionyear')} style={{ width: '300px' }} />
          {errors.admissionyear && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.admissionyear.message}</p>}
        </div>
      </div>
      <br /><br />
      <button type="submit" style={{ marginRight: '10px', marginLeft: "460px" }}>Register</button>
      <button type="button" style={{ marginLeft: "50px" }} onClick={handleClose}>Close</button>
    </form>
  );
};

export default StudentRegistrationForm;