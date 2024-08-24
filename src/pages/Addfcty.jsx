import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

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

const FacultyRegistrationForm = () => {
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
      const response = await axios.post('https://www.svavrampur.com/api/faculty', data);
      alert('Faculty registered successfully!'); // Show success message after form submission
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
      <center><h2>Faculty Registration Form</h2></center>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '100px' }}>Admission ID:</label>
          <input {...register('facultyadmid')} style={{ width: '300px' }} />
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
          <label style={{ width: '100px' }}>Contact Number:</label>
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
          <label style={{ width: '100px' }}>Address:</label>
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

export default FacultyRegistrationForm;
