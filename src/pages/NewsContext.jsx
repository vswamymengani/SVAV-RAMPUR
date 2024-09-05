// NewsContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const initialNews = {
    jobOpenings: "Job Openings: Join our Team of teachers and admin by applying at careers@svav.ind.in or hr@svav.ind.in",
    latestEvent: "Laying Foundation for Bhumipuja Ceremony for School Modernization on 19th August 2024"
  };

  // Retrieve news from localStorage or use the initial news as fallback
  const [news, setNews] = useState(() => {
    const savedNews = localStorage.getItem('news');
    return savedNews ? JSON.parse(savedNews) : initialNews;
  });

  // Function to update the news and save it to localStorage
  const updateNews = (jobOpenings, latestEvent) => {
    const updatedNews = { jobOpenings, latestEvent };
    setNews(updatedNews);
    localStorage.setItem('news', JSON.stringify(updatedNews));
  };

  useEffect(() => {
    const savedNews = localStorage.getItem('news');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    }
  }, []);

  return (
    <NewsContext.Provider value={{ news, updateNews }}>
      {children}
    </NewsContext.Provider>
  );
};