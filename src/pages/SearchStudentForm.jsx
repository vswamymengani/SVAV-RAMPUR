import  { useState } from 'react';
import UpdateStudentForm from './UpdateStudentForm';

const SearchStudentForm = () => {
  const [stdadmid, setStdadmid] = useState('');
  const [searchedId, setSearchedId] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!stdadmid) {
      setError('Please enter an Admission ID');
    } else {
      setSearchedId(stdadmid);
      setError('');
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px',marginLeft:"20px" }}>
      <center><h2>Search Student by Admission ID</h2></center>
      <br />
      <input
        type="text"
        value={stdadmid}
        onChange={(e) => setStdadmid(e.target.value)}
        placeholder="Enter Admission ID"
        style={{ width: '400px', padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleSearch} style={{ padding: '10px 20px' }}>Search</button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      <br />
      {searchedId && <UpdateStudentForm stdadmid={searchedId} />}
    </div>
  );
};

export default SearchStudentForm;
