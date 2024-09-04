import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { NewsProvider } from '../src/pages/NewsContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsProvider>
        
          <Routes />


        

      </NewsProvider>
    </BrowserRouter>
  </React.StrictMode>
);