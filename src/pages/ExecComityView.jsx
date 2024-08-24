import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Studentview.css';

// Define the columns for the table with updated fields
const columns = [
  {
    name: 'S.No',
    selector: (row) => row.sno,
    sortable: true,
    width: '100px',
  },
  {
    name: 'Designation',
    selector: (row) => row.designation,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Address',
    selector: (row) => row.address,
    sortable: true,
    wrap: true,
  },
];

const ExecComityView = () => {
  const [data, setData] = useState([]); // State to hold the data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Fetch data from API when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.svavrampur.com/api/committee_members'); // Adjust the API endpoint accordingly
        setData(response.data); // Update state with the fetched data
      } catch (error) {
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
    <div className="student-container">
      <center>
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

export default ExecComityView;
