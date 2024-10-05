import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={event.image} alt={event.title} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{event.title}</h3>
        <p className="text-gray-700 text-base mb-2">{event.description}</p>
        <p className="text-gray-600 text-sm mb-2">Date: {event.date}</p>
        <p className="text-gray-600 text-sm mb-4">Location: {event.location}</p>
        <Link 
          to={`/events/${event.id}`} 
          className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;