// NewsContext.js
import { createContext, useState, useContext } from 'react';

// Create a Context for the news
const NewsContext = createContext();

// Create a Provider component
export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState({
    jobOpenings: 'Job Openings: Join our Team of teachers and admin by applying at careers@svav.ind.in or hr@svav.ind.in',
    latestEvent: 'Latest Event: Laying Foundation for Bhumipuja Ceremony for School Modernization on 19th August 2024'
  });

  const updateNews = (newJobOpenings, newLatestEvent) => {
    setNews({
      jobOpenings: newJobOpenings,
      latestEvent: newLatestEvent
    });
  };

  return (
    <NewsContext.Provider value={{ news, updateNews }}>
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook to use the NewsContext
export const useNews = () => useContext(NewsContext);