import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Supportus from './components/Aboutus/Supportus';
import Vidhya from './components/Aboutus/Vidhya';
import Commite from './components/Aboutus/Commite';
import Classroom from './components/Facilities/Classroom';
import Donate from './components/Donate/Donate';
import Sportsroom from './components/Facilities/Sportsroom';
import Labroom from './components/Facilities/Labroom';
import Boardingroom from './components/Facilities/Boardingroom';
import Onlineenquiryform from './components/Admission/Onlineenquiryform';
import Contact from './components/Facilities/Contact/ContactUs';
import Cirriculum from './components/Academic/Curriculum';
import AdmissionProcess from './components/Admission/AdmissionProcess';


const routes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Supportus' element={<Supportus/>}/>
        <Route path='/Vidhya' element={<Vidhya/>}/>
        <Route path='/Commite' element={<Commite/>}/>
        <Route path='/Classroom' element={<Classroom/>}/>
        <Route path='/Sportsroom' element={<Sportsroom/>}/>
        <Route path='/Labroom' element={<Labroom/>}/>
        <Route path='/Boardingroom' element={<Boardingroom/>}/>
        <Route path='/Onlineenquiryform' element={<Onlineenquiryform/>}/>
        {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path='/AdmissionProcess' element={<AdmissionProcess/>}/>    
        <Route path="/Cirriculum" element={<Cirriculum />} />

        <Route path='/Donate' element={<Donate/>}/>    
            
          
      </Routes>
      
  )
}

export default routes
