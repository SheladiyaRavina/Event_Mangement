import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';

function EventDetails() {
  const { id } = useParams();
  const { events } = useEventContext();


  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="container mx-auto px-4 py-8">Event not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{event.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={event.image} alt={event.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-gray-600 mb-4">{event.date}</p>
          <p className="text-gray-800 mb-4">{event.location}</p>
          <p className="text-gray-700 mb-6">{event.description}</p>
          <Link to="/events" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;