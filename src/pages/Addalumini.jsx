import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

// Updated validation schema
const schema = yup.object({
  registerid: yup.string().required('Register ID is required'),
  name: yup.string().required('Name is required'),
  gender: yup.string().oneOf(['male', 'female', 'other'], 'Gender is required').required('Gender is required'),
  studentorteacher: yup.string().oneOf(['student', 'teacher'], 'Select either student or teacher').required('Student or Teacher is required'),
  admissionyear: yup.string().required('Admission Year is required'),
  passoutyear: yup.string().required('Passout Year is required'),
  branch: yup.string().required('Branch is required'),
  contactnum: yup.string().matches(/^\d{10}$/, 'Contact number must be 10 digits').required('Contact number is required'),
  typeofemployee: yup.string().required('Type of Employee is required'),
  designation: yup.string().required('Designation is required'),
  companyname: yup.string().required('Company Name is required'),
  companylocation: yup.string().required('Company Location is required'),
  facebookurl: yup.string().url('Invalid URL'),
  linkedinurl: yup.string().url('Invalid URL'),
  blogurl: yup.string().url('Invalid URL'),
  websiteurl: yup.string().url('Invalid URL'),
  comments: yup.string(),
});

const AluminiRegistrationForm = () => {
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
      const response = await axios.post('https://www.svavrampur.com/api/alumni', data);
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
      <center><h2>Alumni Registration Form</h2></center>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Register ID:</label>
          <input {...register('registerid')} style={{ width: '300px' }} />
          {errors.registerid && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.registerid.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Name:</label>
          <input {...register('name')} style={{ width: '300px' }} />
          {errors.name && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.name.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Gender:</label>
          <select {...register('gender')} style={{ width: '300px' }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.gender.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Student/Teacher:</label>
          <select {...register('studentorteacher')} style={{ width: '300px' }}>
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          {errors.studentorteacher && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.studentorteacher.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Admission Year:</label>
          <input {...register('admissionyear')} style={{ width: '300px' }} />
          {errors.admissionyear && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.admissionyear.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Passout Year:</label>
          <input {...register('passoutyear')} style={{ width: '300px' }} />
          {errors.passoutyear && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.passoutyear.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Branch:</label>
          <input {...register('branch')} style={{ width: '300px' }} />
          {errors.branch && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.branch.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Contact Number:</label>
          <input {...register('contactnum')} style={{ width: '300px' }} />
          {errors.contactnum && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.contactnum.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Type of Employee:</label>
          <input {...register('typeofemployee')} style={{ width: '300px' }} />
          {errors.typeofemployee && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.typeofemployee.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Designation:</label>
          <input {...register('designation')} style={{ width: '300px' }} />
          {errors.designation && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.designation.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Company Name:</label>
          <input {...register('companyname')} style={{ width: '300px' }} />
          {errors.companyname && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.companyname.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Company Location:</label>
          <input {...register('companylocation')} style={{ width: '300px' }} />
          {errors.companylocation && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.companylocation.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Facebook URL:</label>
          <input {...register('facebookurl')} style={{ width: '300px' }} />
          {errors.facebookurl && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.facebookurl.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>LinkedIn URL:</label>
          <input {...register('linkedinurl')} style={{ width: '300px' }} />
          {errors.linkedinurl && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.linkedinurl.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Blog URL:</label>
          <input {...register('blogurl')} style={{ width: '300px' }} />
          {errors.blogurl && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.blogurl.message}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px" }}>
          <label style={{ width: '150px' }}>Website URL:</label>
          <input {...register('websiteurl')} style={{ width: '300px' }} />
          {errors.websiteurl && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.websiteurl.message}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "80px" }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <label style={{ width: '150px' }}>Comments:</label>
          <textarea {...register('comments')} style={{ width: '300px', height: '100px' }} />
          {errors.comments && <p style={{ color: 'red', marginLeft: '10px' }}>{errors.comments.message}</p>}
        </div>
      </div>
      <br /><br />
      <button type="submit" style={{ marginRight: '10px', marginLeft: "460px" }}>Register</button>
      <button type="button" style={{ marginLeft: "50px" }} onClick={handleClose}>Close</button>
    </form>
  );
};

export default AluminiRegistrationForm;
