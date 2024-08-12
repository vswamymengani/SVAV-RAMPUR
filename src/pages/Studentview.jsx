import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Studentview.css';

// Define the columns for the table
const columns = [
 {
  name: 'Student ID',
  selector: (row) => row.stdid,
  sortable: true,
  width: '100px', // Control the width for better responsiveness
 },
 {
  name: 'Admission ID',
  selector: (row) => row.stdadmid,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Aadhar',
  selector: (row) => row.stdaadhar,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Name',
  selector: (row) => row.stdname,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Class',
  selector: (row) => row.studentclass,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Section',
  selector: (row) => row.section,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Contact Number',
  selector: (row) => row.contactnum,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Email ID',
  selector: (row) => row.emailid,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Address',
  selector: (row) => row.address,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Gender',
  selector: (row) => row.gender,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
 {
  name: 'Admissionyear',
  selector: (row) => row.admissionyear,
  sortable: true,
  wrap: true, // Enable text wrapping
 },
];

const Studentview = () => {
 const [data, setData] = useState([]); // State to hold the data
 const [loading, setLoading] = useState(true); // State to manage loading

 useEffect(() => {
  // Fetch data from API when component mounts
  const fetchData = async () => {
   try {
    const response = await axios.get('http://localhost:3001/api/students'); // Adjust the API endpoint accordingly
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

export default Studentview;