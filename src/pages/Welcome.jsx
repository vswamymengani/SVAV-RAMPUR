import { useState } from 'react';
import './Welcome.css';
import Addstd from './Addstd';
import Studentview from './Studentview';
import FacultyView from './FacultyView'; 
import AlumniView from './AlumniView';
import ExecComityView from './ExecComityView';
import ContactUsView from './ContactUsView';
import SearchStudentForm from './SearchStudentForm';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const [activeComponent, setActiveComponent] = useState(null); // State to manage the active component
  const navigate = useNavigate();

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
            TOTAL STUDENTS<br /><br />(COUNT)<br /><br />
            <a href="#" onClick={() => handleComponentView('Studentview')}>View</a>&nbsp;&nbsp;    
            <a href="#" onClick={() => handleComponentView('Addstd')}>Add</a>&nbsp;&nbsp;    
            <a href="#" onClick={() => handleComponentView('SearchStudentForm')}>Update</a>
          </div>
          <div className='box'>
            TOTAL FACULTY<br /><br /><br /><br /><br />
            <a href="#" onClick={() => handleComponentView('Facultyview')}>View</a>&nbsp;&nbsp;   
            <a href="#">Add</a> &nbsp;&nbsp;   
            <a href="#">Update</a>
          </div>
          <div className='box'>
            TOTAL ALUMNI<br /><br /><br /><br /><br />
            <a href="#" onClick={() => handleComponentView('AlumniView')}>View</a>  &nbsp;&nbsp;  
            <a href="#">Add</a>&nbsp;&nbsp;    
            <a href="#">Update</a>
          </div>
          <div className='box'>
            TOTAL EXEC COMITY<br /><br /><br /><br /><br />
            <a href="#" onClick={() => handleComponentView('ExecComityView')}>View</a> &nbsp;&nbsp;   
            <a href="#">Add</a> &nbsp;&nbsp;   
            <a href="#">Update</a>
          </div>
          <div className='box'>
            TOTAL REQUESTS<br /><br /><br /><br /><br />
            <a href="#" onClick={() => handleComponentView('ContactUsView')}>View</a> &nbsp;&nbsp;   
            <a href="#">Add</a> &nbsp;&nbsp;   
            <a href="#">Update</a>
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
          {/* Add more components as needed */}
          {activeComponent === 'Addstd' && <Addstd />}
          {/* {activeComponent === 'UpdateStudentForm' && <UpdateStudentForm />} */}
          {activeComponent === 'SearchStudentForm' && <SearchStudentForm />}
        </div>
      </div>
    </div>
  );
};

export default Welcome;