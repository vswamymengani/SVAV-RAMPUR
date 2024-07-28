// src/components/Layout/Layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Header'; // Adjust the import path if necessary
import Footer from '../../components/Footer/Footer'; // Adjust the import path if necessary
import Home from '../../pages/Home'
import './Layout.css'; // Optional: Create a CSS file for layout-specific styles
// import ContactForm from '../../pages/ContactForm';
const Layout = () => {
    return (
        <div className="layout">
            <Header />
  
            <main className="content">
               <Home /> {/* This will render the component corresponding to the route */}
            </main>
            
            <Footer />
        </div>
    );
};

export default Layout;
