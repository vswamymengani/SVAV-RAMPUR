import  { useState } from 'react';
import './Events.css';
import abc from './events1.jpg';
import cd from './cricket.jpg';
import abcd from './svav-new model.jpg';


const events = [
  {
    id: 1,
    name: 'BhumiPooja Event',
    date: '2024-08-19',
    description: 'Detailed description for event 1. The tradition of offering prayers to the Almighty, Mother Earth and the other forces of Nature before starting construction activities or land tilling activities for agricultural purposes, is referred to as Bhumi Pujan. During the Bhumi Pujan, the foundation stone is also laid.',
    imageUrl: abcd,
    linkUrl: 'https://example.com/event1',
  },
  {
    id: 2,
    name: 'Independence Day Event',
    date: '2024-08-15',
    description: 'Detailed description for event 2. This can include more information, images, and other relevant details about the event.',
    imageUrl: abc,
    linkUrl: 'https://example.com/event1',
  },
  {
    id: 3,
    name: 'Cricket Event',
    date: '2024-09-10',
    description: 'Detailed description for event 3. This can include more information, images, and other relevant details about the event.',
    imageUrl: cd,
    linkUrl: 'https://example.com/event2',
  },
  // Add more events as needed
];

const EventTable = () => {
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
            <th>Image</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td><img src={event.imageUrl} alt={event.name} className="event-image" /></td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>
                {event.description.slice(0, 50)}...{' '}
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
            <p>{selectedEvent.date}</p>
            <p>{selectedEvent.description}</p>
            <img src={selectedEvent.imageUrl} alt={selectedEvent.name} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTable;