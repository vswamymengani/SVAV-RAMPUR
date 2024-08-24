import  { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'; // Import axios
import './Studentview.css';


// Define the columns for the table
const columns = [
  {
    name: 'id',
    selector: (row) => row.id,
    sortable: true,
    width: '100px', // Control the width for better responsiveness
  },
 
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
  {
    name: 'emailid',
    selector: (row) => row.emailid,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
  {
    name: 'subject',
    selector: (row) => row.subject,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
  {
    name: 'message',
    selector: (row) => row.message,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
  {
    name: 'mobilnum',
    selector: (row) => row.mobilnum,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
  {
    name: 'createdat',
    selector: (row) => row.createdat,
    sortable: true,
    wrap: true, // Enable text wrapping
  },
];

const ContactUsView = () => {
  const [data, setData] = useState([]); // State to hold the data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Fetch data from API when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.svavrampur.com/api/contact_us');
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

export default ContactUsView;