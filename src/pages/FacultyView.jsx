import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './Studentview.css';

// Define the columns for the table with updated fields
const columns = [
 {
  name: 'Faculty ID',
  selector: (row) => row.facultyid,
  sortable: true,
  width: '100px',
 },
 {
  name: 'Admission ID',
  selector: (row) => row.facultyadmid,
  sortable: true,
  wrap: true,
 },
 {
  name: 'Aadhar',
  selector: (row) => row.facultyaadhar,
  sortable: true,
  wrap: true,
 },
 {
  name: 'Name',
  selector: (row) => row.facultyname,
  sortable: true,
  wrap: true,
 },
 {
  name: 'Subject',
  selector: (row) => row.subject,
  sortable: true,
  wrap: true,
 },
 {
  name: 'Qualification',
  selector: (row) => row.qualification,
  sortable: true,
  wrap: true,
 },
 {
  name: 'Experience',
  selector: (row) => row.experience,
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
  name: 'Email ID',
  selector: (row) => row.emailid,
  sortable: true,
  wrap: true,
 },
 {
  name: 'Address',
  selector: (row) => row.address,
  sortable: true,
  wrap: true,
 },
 {
  name: 'Gender',
  selector: (row) => row.gender,
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
    const response = await axios.get('http://www.svavrampur.com/api/faculty'); // Adjust the API endpoint accordingly
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

export default FacultyView;
