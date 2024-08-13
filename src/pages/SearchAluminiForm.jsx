import { useState } from 'react';
import UpdateAluminiForm from './UpdateAluminiForm';

const SearchAluminiForm = () => {
  const [registerid, setRegisterid] = useState('');
  const [searchedId, setSearchedId] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!registerid) {
      setError('Please enter a Register ID');
    } else {
      setSearchedId(registerid);
      setError('');
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px', marginLeft: '20px' }}>
      <center><h2>Search Alumni by Register ID</h2></center>
      <br />
      <input
        type="text"
        value={registerid}
        onChange={(e) => setRegisterid(e.target.value)}
        placeholder="Enter Register ID"
        style={{ width: '400px', padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleSearch} style={{ padding: '10px 20px' }}>Search</button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      <br />
      {searchedId && <UpdateAluminiForm registerid={searchedId} />}
    </div>
  );
};

export default SearchAluminiForm;
