import { useState, useEffect } from 'react';
import axios from 'axios';
import './Welcome.css';
import Addstd from './Addstd';
import Addfcty from './Addfcty';
import Addalumini from './Addalumini';
import AddExecComity from './AddExecComity';
import Studentview from './Studentview';
import FacultyView from './FacultyView'; 
import AlumniView from './AlumniView';
import ExecComityView from './ExecComityView';
import ContactUsView from './ContactUsView';
import SearchStudentForm from './SearchStudentForm';
import SearchAluminiForm from './SearchAluminiForm';
import SearchExecComityForm from './SearchExecComityForm';
import SearchFactyForm from './SearchFactyForm';
import { useNavigate } from 'react-router-dom';
//welcome screen
const Welcome = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [studentCount, setStudentCount] = useState(0);
  const [facultyCount, setFacultyCount] = useState(0);
  const [alumniCount, setAlumniCount] = useState(0);
  const [execComityCount, setExecComityCount] = useState(0);
  const [requestcount, setRequestcount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the counts when the component mounts
    axios.get('https://www.svavrampur.com/api/students/count')
      .then(response => {
        setStudentCount(response.data.totalStudents);
      })
      .catch(error => {
        console.error('Error fetching the student count:', error);
      });

    axios.get('https://www.svavrampur.com/api/faculty/count')
      .then(response => {
        setFacultyCount(response.data.totalFaculty);
      })
      .catch(error => {
        console.error('Error fetching the faculty count:', error);
      });

    axios.get('https://www.svavrampur.com/api/alumni/count')
      .then(response => {
        setAlumniCount(response.data.totalAlumni);
      })
      .catch(error => {
        console.error('Error fetching the alumni count:', error);
      });

    axios.get('https://www.svavrampur.com/api/committee_members/count')
      .then(response => {
        setExecComityCount(response.data.totalCommitteeMembers);
      })
      .catch(error => {
        console.error('Error fetching the exec comity count:', error);
      });
      axios.get('https://www.svavrampur.com/api/count/contact_us')
      .then(response => {
        setRequestcount(response.data.totalContactRequests);
      })
      .catch(error => {
        console.error('Error fetching the exec comity count:', error);
      });
  }, []);

  const handleComponentView = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleLogin}>Logout</button><br />
      <form className="button-forms">
        <div className='button-container'>
          <button type="button" onClick={() => handleComponentView('Studentview')}>Std_dtl</button>
          <button type="button" onClick={() => handleComponentView('Facultyview')}>Faculty_dtl</button>
          <button type="button" onClick={() => handleComponentView('AlumniView')}>Alumni</button>
          <button type="button" onClick={() => handleComponentView('ExecComityView')}>Exec_Comity</button>
          <button type="button" onClick={() => handleComponentView('ContactUsView')}>Contact_Us</button>
        </div> 
      </form> 
      
      <div className='dashboard'>
        <center><h1>Dashboard</h1></center> 
        <div className='box-container'>
          <div className='box'>
            TOTAL STUDENTS<br /><br />{studentCount}<br /><br />
            <a href="#" onClick={() => handleComponentView('Studentview')}>View</a>&nbsp;&nbsp;    
            <a href="#" onClick={() => handleComponentView('Addstd')}>Add</a>&nbsp;&nbsp;    
            <a href="#" onClick={() => handleComponentView('SearchStudentForm')}>Update</a>
          </div>
          <div className='box'>
            TOTAL FACULTY<br /><br />{facultyCount}<br /><br />
            <a href="#" onClick={() => handleComponentView('Facultyview')}>View</a>&nbsp;&nbsp;   
            <a href="#" onClick={() => handleComponentView('Addfcty')}>Add</a> &nbsp;&nbsp;   
            <a href="#" onClick={() => handleComponentView('SearchFactyForm')}>Update</a>
          </div>
          <div className='box'>
            TOTAL ALUMNI<br /><br />{alumniCount}<br /><br />
            <a href="#" onClick={() => handleComponentView('AlumniView')}>View</a>  &nbsp;&nbsp;  
            <a href="#" onClick={() => handleComponentView('Addalumini')}>Add</a>&nbsp;&nbsp;    
            <a href="#" onClick={() => handleComponentView('SearchAluminiForm')}>Update</a>
          </div>
          <div className='box'>
            TOTAL EXEC COMITY<br /><br />{execComityCount}<br /><br />
            <a href="#" onClick={() => handleComponentView('ExecComityView')}>View</a> &nbsp;&nbsp;   
            <a href="#" onClick={() => handleComponentView('AddExecComity')}>Add</a> &nbsp;&nbsp;   
            <a href="#" onClick={() => handleComponentView('SearchExecComityForm')}>Update</a>
          </div>
          <div className='box'>
            TOTAL REQUESTS<br /><br />{requestcount}<br /><br /><br />
            <a href="#" onClick={() => handleComponentView('ContactUsView')}>View</a> &nbsp;&nbsp;   
          </div>
          <div className='box'>
            TOTAL ACCOUNT<br /><br /><br /><br /><br />
            <a href="#">View</a>  &nbsp;&nbsp;  
            <a href="#">Add</a> &nbsp;&nbsp;   
            <a href="#">Update</a>
          </div>
        </div>
        
        <div>
          {activeComponent === 'Studentview' && <Studentview />}
          {activeComponent === 'Facultyview' && <FacultyView />}
          {activeComponent === 'AlumniView' && <AlumniView />}
          {activeComponent === 'ExecComityView' && <ExecComityView />}
          {activeComponent === 'ContactUsView' && <ContactUsView />}
          {activeComponent === 'Addstd' && <Addstd />}
          {activeComponent === 'Addfcty' && <Addfcty />}
          {activeComponent === 'Addalumini' && <Addalumini />}
          {activeComponent === 'AddExecComity' && <AddExecComity />}
          {activeComponent === 'SearchStudentForm' && <SearchStudentForm />}
          {activeComponent === 'SearchFactyForm' && <SearchFactyForm />}
          {activeComponent === 'SearchAluminiForm' && <SearchAluminiForm />}
          {activeComponent === 'SearchExecComityForm' && <SearchExecComityForm />}
        </div>
      </div>
    </div>
  );
};

export default Welcome;