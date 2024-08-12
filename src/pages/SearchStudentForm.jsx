import  { useState } from 'react';
import axios from 'axios';
import UpdateStudentForm from './UpdateStudentForm';

const SearchStudentForm = () => {
  const [admissionId, setAdmissionId] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/students/${admissionId}`);
      setStudent(response.data);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Student not found');
      setStudent(null); // Clear any previous student data
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '20px' }}>
      <center><h2>Search Student by Admission ID</h2></center>
      <br />
      <input
        type="text"
        value={admissionId}
        onChange={(e) => setAdmissionId(e.target.value)}
        placeholder="Enter Admission ID"
        style={{ width: '400px', padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleSearch} style={{ padding: '10px 20px' }}>Search</button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      <br />
      {student && <UpdateStudentForm student={student} />}
    </div>
  );
};

export default SearchStudentForm;
