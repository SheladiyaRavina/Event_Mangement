import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);


export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Summer Music Festival",
      description: "A weekend of live music performances from top artists.",
      date: "2024-07-15",
      location: "Central Park, New York",
      image: "https://images.pexels.com/photos/8919754/pexels-photo-8919754.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      description: "Learn about the latest technologies and network with industry professionals.",
      date: "2024-09-22",
      location: "Convention Center, San Francisco",
      image: "https://images.pexels.com/photos/9301249/pexels-photo-9301249.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      description: "Taste cuisines from around the world and sample fine wines.",
      date: "2024-08-05",
      location: "Exhibition Hall, Chicago",
      image: "https://images.pexels.com/photos/11368694/pexels-photo-11368694.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Art Gallery Opening",
      description: "Explore contemporary artworks from emerging artists.",
      date: "2024-10-10",
      location: "Modern Art Museum, Los Angeles",
      image: "https://images.pexels.com/photos/9287918/pexels-photo-9287918.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Marathon for Charity",
      description: "Run for a cause and help raise funds for local charities.",
      date: "2024-11-12",
      location: "Downtown, Boston",
      image: "https://images.pexels.com/photos/17290952/pexels-photo-17290952/free-photo-of-a-group-of-people-riding-bicycles-down-a-road.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Science Fair 2024",
      description: "Witness groundbreaking projects from young scientists.",
      date: "2024-12-01",
      location: "Science Center, Washington D.C.",
      image: "https://images.pexels.com/photos/17260648/pexels-photo-17260648/free-photo-of-robotics-event-for-children.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
  };

  

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const editEvent = (id, updatedEvent) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, ...updatedEvent } : event
    ));
  };
  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent, editEvent }}>
      {children}
    </EventContext.Provider>
  );
};