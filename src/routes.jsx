// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Supportus from './components/Aboutus/Supportus';
// import Vidhya from './components/Aboutus/Vidhya';
// import Commite from './components/Aboutus/Commite';
// import Classroom from './components/Facilities/Classroom';
// import Donate from './components/Donate/Donate';
// import Sportsroom from './components/Facilities/Sportsroom';
// import Labroom from './components/Facilities/Labroom';
// import Boardingroom from './components/Facilities/Boardingroom';
// import Onlineenquiryform from './components/Admission/Onlineenquiryform';
// import Contact from './components/Facilities/Contact/ContactUs';
// import Cirriculum from './components/Academic/Curriculum';
// import AdmissionProcess from './components/Admission/AdmissionProcess';


// const routes = () => {
//   return (
  

  
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/Supportus' element={<Supportus/>}/>
//         <Route path='/Vidhya' element={<Vidhya/>}/>
//         <Route path='/Commite' element={<Commite/>}/>
//         <Route path='/Classroom' element={<Classroom/>}/>
//         <Route path='/Sportsroom' element={<Sportsroom/>}/>
//         <Route path='/Labroom' element={<Labroom/>}/>
//         <Route path='/Boardingroom' element={<Boardingroom/>}/>
//         <Route path='/Onlineenquiryform' element={<Onlineenquiryform/>}/>
//         <Route path="/contact" element={<Contact />} />
//         <Route path='/AdmissionProcess' element={<AdmissionProcess/>}/>    
//         <Route path="/Cirriculum" element={<Cirriculum />} />

//         <Route path='/Donate' element={<Donate/>}/>    
            
          
//       </Routes>
    
      
//   )
// }

// export default routes


// src/routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // Import the Layout component
import Home from './pages/Home';
import Supportus from './components/Aboutus/Supportus';
import Vidhya from './components/Aboutus/Vidhya';
import Commite from './components/Aboutus/Commite';
import Classroom from './components/Facilities/Classroom';
import Donate from './components/Donate/Donate';
import Sportsroom from './components/Facilities/Sportsroom';
import Labroom from './components/Facilities/Labroom';
import Medical from './components/Facilities/Medical';
import Laboratories from './components/Facilities/Laboratories';
import Boardingroom from './components/Facilities/Boardingroom';
import Onlineenquiryform from './components/Admission/Onlineenquiryform';
import Contact from './components/Facilities/Contact/ContactUs';
import Cirriculum from './components/Academic/Curriculum';
import AdmissionProcess from './components/Admission/AdmissionProcess';
import Halloffame from './components/News and Letter/Halloffame';
import Library from './components/Facilities/Library';
import Auditorium from './components/Facilities/Auditorium';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="Supportus" element={<Supportus />} />
                <Route path="Vidhya" element={<Vidhya />} />
                <Route path="Commite" element={<Commite />} />
                <Route path="Classroom" element={<Classroom />} />
                <Route path="Sportsroom" element={<Sportsroom />} />
                <Route path="Labroom" element={<Labroom />} />
                <Route path="Medical" element={<Medical />} />
                <Route path="Library" element={<Library />} />
                <Route path="Laboratories" element={<Laboratories />} />
                <Route path="Auditorium" element={<Auditorium />} />
                <Route path="Boardingroom" element={<Boardingroom />} />
                <Route path="Onlineenquiryform" element={<Onlineenquiryform />} />
                <Route path="contact" element={<Contact />} />
                <Route path="AdmissionProcess" element={<AdmissionProcess />} />
                <Route path="Cirriculum" element={<Cirriculum />} />
                <Route path="Halloffame" element={<Halloffame />} />
                <Route path="Donate" element={<Donate />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
