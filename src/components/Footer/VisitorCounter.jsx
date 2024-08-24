import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get('http://www.svavrampur.com/api/visitor-count');
        setVisitorCount(response.data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div>
      <h3>Visitor Count: {visitorCount}</h3>
    </div>
  );
};

export default VisitorCounter;