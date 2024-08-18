import  { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'; // Import axios
import './Commite.css';
import img1 from './sdp1.png';

// Define the columns for the table
const columns = [
  {
    name: 'Id',
    selector: (row) => row.sno,
    sortable: true,
    width: '100px', // Control the width for better responsiveness
  },
 
  {
    name: 'Designation',
    selector: (row) => row.designation,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
  {
    name: 'Address',
    selector: (row) => row.address,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
];

const Commite = () => {
  const [data, setData] = useState([]); // State to hold the data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Fetch data from API when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://18.60.190.183:3001/api/committee_members');
        setData(response.data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error fetching data:', error.message);
      console.error('Error details:', error.response ? error.response.data : 'No response data');
      alert(`Error: ${error.response ? error.response.data.error : error.message}`);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    <div className="committee-container">
      <center>
        <h1 className="c1">Executive Committee</h1>
        <img src={img1} alt="Executive Committee" className="responsive-img" />
        <div className="data-table-wrapper">
          <DataTable
            columns={columns}
            data={data}
            pagination
            responsive
            highlightOnHover
            noHeader
            progressPending={loading} // Show loading indicator while data is being fetched
          />
        </div>
      </center>
    </div>
  );
}

export default Commite;