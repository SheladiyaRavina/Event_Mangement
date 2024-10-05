import React, { useState } from 'react';
import { useEventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  // State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  // Get the addEvent function from EventContext
  const { addEvent } = useEventContext();
  // Get the navigate function for redirection
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new event object
    const newEvent = {
      title,
      description,
      date,
      location,
      image: image || `https://source.unsplash.com/random/800x600?${title}` // Use provided image or generate a random one
    };

    addEvent(newEvent);

    navigate('/events');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-indigo-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Event</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto card p-4 register-background">
        <div className="mb-4 ">
          <label htmlFor="title " className="block mb-2 text-white">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-white">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2 text-white">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 text-white">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-white">Image URL (optional)</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <center>
        <button type="submit" className="btn btn-success text-white px-4 py-2 rounded hover:bg-blue-600 ">
          Create Event
        </button>
        </center>
      </form>
    </div>
  );
}

export default CreateEvent;