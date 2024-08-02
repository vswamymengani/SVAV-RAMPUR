import { useState } from 'react';
import './Halloffame.css';
import abc from './hall2.jpg';
import cd from './hall3.jpg';
import abcd from './hfimg.png';

const events = [
  {
    id: 1,
    imageUrl: abcd,
    name: 'Colonel B Santosh Babu',
    profession: 'Army Service',
    yearOfStudied: '2024-08-19',
    location: 'India',
    details: 'Colonel B Santosh Babu, the Commanding Officer of the Army’s 16 Bihar unit...',
    linkUrl: 'https://example.com/event1',
  },
  {
    id: 2,
    imageUrl: abc,
    name: 'Deepak Chauhan',
    profession: 'Army Service',
    yearOfStudied: '2024-08-19',
    location: 'India',
    details: 'Squadron Leader Deepak Chauhan, an alumni of Saraswati Shishu Mandir...',
    linkUrl: 'https://example.com/event1',
  },
  {
    id: 3,
    imageUrl: cd,
    name: 'Navdeep Saini',
    profession: 'Cricketer',
    yearOfStudied: '2024-08-19',
    location: 'India',
    details: 'Navdeep Saini - Alumni of Gita Vidya Mandir, Taraori, Karnal...',
    linkUrl: 'https://example.com/event2',
  },
  // Add more events as needed
];

const Halloffame = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleReadMore = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-table-container">
      <table className="event-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Profile</th>
            <th>Person Name</th>
            <th>Profession</th>
            <th>Year of Studied</th>
            <th>Location</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td><img src={event.imageUrl} alt={event.name} className="event-image" /></td>
              <td>{event.name}</td>
              <td>{event.profession}</td>
              <td>{event.yearOfStudied}</td>
              <td>{event.location}</td>
              <td>
                {event.details.slice(0, 50)}...{' '}
                <button className="read-more-button" onClick={() => handleReadMore(event)}>
                  Read more
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEvent && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedEvent.name}</h2>
            <p>Profession: {selectedEvent.profession}</p>
            <p>Year of Studied: {selectedEvent.yearOfStudied}</p>
            <p>Location: {selectedEvent.location}</p>
            <p>{selectedEvent.details}</p>
            <img src={selectedEvent.imageUrl} alt={selectedEvent.name} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Halloffame;
