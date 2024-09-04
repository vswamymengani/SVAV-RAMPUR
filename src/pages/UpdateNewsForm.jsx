// UpdateNewsForm.js
import { useState } from 'react';
import { useNews } from './NewsContext'; // Import the custom hook

const UpdateNewsForm = () => {
  // Get the current news and the function to update it from the context
  const { news, updateNews } = useNews();
  const [jobOpenings, setJobOpenings] = useState(news.jobOpenings);
  const [latestEvent, setLatestEvent] = useState(news.latestEvent);

  // Function to handle form submission
  const handleSubmit = (event) => {
    alert("Successfully Submitted");
    event.preventDefault();
    // Use the context function to update the news
    updateNews(jobOpenings, latestEvent);
  };
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Job Openings:
            <input
              type="text"
              value={jobOpenings}
              onChange={(e) => setJobOpenings(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Latest Event:
            <input
              type="text"
              value={latestEvent}
              onChange={(e) => setLatestEvent(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" onClick={{handleSubmit}}>Update News</button>
      </form>
      <marquee>
        {jobOpenings} / {latestEvent}
      </marquee>
    </div>
  );
};

export default UpdateNewsForm;