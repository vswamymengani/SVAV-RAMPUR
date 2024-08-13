import { useState } from 'react';
import UpdateFacultyForm from './UpdateFacultyForm';

const SearchFacultyForm = () => {
  const [facultyadmid, setFacultyadmid] = useState(''); // State to manage the input value
  const [searchedId, setSearchedId] = useState(''); // State to store the searched ID
  const [error, setError] = useState(''); // State to manage error messages

  // Function to handle search action
  const handleSearch = () => {
    if (!facultyadmid) {
      setError('Please enter an Admission ID');
    } else {
      setSearchedId(facultyadmid); // Set the searched ID
      setError(''); // Clear any previous error messages
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px', marginLeft: '20px' }}>
      <center><h2>Search Faculty by Admission ID</h2></center>
      <br />
      <input
        type="text"
        value={facultyadmid}
        onChange={(e) => setFacultyadmid(e.target.value)} // Update state on change
        placeholder="Enter Admission ID"
        style={{ width: '400px', padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleSearch} style={{ padding: '10px 20px' }}>Search</button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      <br />
      {searchedId && <UpdateFacultyForm facultyadmid={searchedId} />} {/* Render form if searchedId is set */}
    </div>
  );
};

export default SearchFacultyForm;
