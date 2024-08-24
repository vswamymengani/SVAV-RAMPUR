import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Studentview.css'; // Ensure the correct CSS file is referenced

// Define the columns for the table with updated fields
const columns = [
  {
    name: 'Register ID',
    selector: (row) => row.registerid,
    sortable: true,
    width: '150px',
  },
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Gender',
    selector: (row) => row.gender,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Student/Teacher',
    selector: (row) => row.studentorteacher,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Admission Year',
    selector: (row) => row.admissionyear,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Passout Year',
    selector: (row) => row.passoutyear,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Branch',
    selector: (row) => row.branch,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Contact Number',
    selector: (row) => row.contactnum,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Type of Employee',
    selector: (row) => row.typeofemployee,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Designation',
    selector: (row) => row.designation,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Company Name',
    selector: (row) => row.companyname,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Company Location',
    selector: (row) => row.companylocation,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Facebook URL',
    selector: (row) => row.facebookurl,
    sortable: true,
    wrap: true,
  },
  {
    name: 'LinkedIn URL',
    selector: (row) => row.linkedinurl,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Blog URL',
    selector: (row) => row.blogurl,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Website URL',
    selector: (row) => row.websiteurl,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Comments',
    selector: (row) => row.comments,
    sortable: true,
    wrap: true,
  },
];

const FacultyView = () => {
  const [data, setData] = useState([]); // State to hold the data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Fetch data from API when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://www.svavrampur.com/api/alumni'); // Adjust the API endpoint accordingly
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
    <div className="faculty-container">
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

export default FacultyView;
