import React from 'react';
import { useEventContext } from '../context/EventContext';
import { Link } from 'react-router-dom';

function EventList() {
  const { events, deleteEvent } = useEventContext();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Event List</h1>
      
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td className="py-2 px-4 border-b">{event.title}</td>
              <td className="py-2 px-4 border-b">{event.date}</td>
              <td className="py-2 px-4 border-b">{event.location}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/events/${event.id}`} className="text-blue-500 hover:underline mr-2">View</Link>
                <Link to={`/edit-event/${event.id}`} className="text-green-500 hover:underline mr-2">Edit</Link>
                <button 
                  onClick={() => handleDelete(event.id)} 
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr>
      </hr> <br></br>
      <Link to="/create-event" className="text-dark hover:text-danger mb-4 ">
        Create New Event
      </Link>
    </div>
  );
}

export default EventList;