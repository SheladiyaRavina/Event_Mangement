import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, editEvent } = useEventContext();

  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: ''
  });

  useEffect(() => {
    const eventToEdit = events.find(e => e.id === parseInt(id));
    if (eventToEdit) {
      setEvent(eventToEdit);
    }
  }, [id, events]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editEvent(parseInt(id), event);
    navigate('/events');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-indigo-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Event</h1>
      <form onSubmit={handleSubmit} className="max-w-lg card mx-auto register-background p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-white">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-white">Description</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2 text-white">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 text-white">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={event.location}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-white">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={event.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <center>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Update Event
        </button>
        </center>
      </form>
    </div>
  );
}

export default EditEvent;