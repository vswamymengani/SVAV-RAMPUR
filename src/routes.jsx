import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Supportus from './components/Aboutus/Supportus';
import Vidhya from './components/Aboutus/Vidhya';
import Commite from './components/Aboutus/Commite';
import Classroom from './components/Facilities/Classroom';
import Donate from './components/Donate/Donate';


const routes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Supportus' element={<Supportus/>}/>
        <Route path='/Vidhya' element={<Vidhya/>}/>
        <Route path='/Commite' element={<Commite/>}/>
        <Route path='/Classroom' element={<Classroom/>}/>
        <Route path='/Donate' element={<Donate/>}/>    
            
          
      </Routes>
      
  )
}

export default routes
