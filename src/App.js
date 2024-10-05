import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { EventProvider } from './context/EventContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import CreateEvent from './components/CreateEvent';
import EditEvent from './components/EditEvent';
import Login from './components/Login';
import Register from './components/Register';


const AppContent = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="App flex flex-col min-h-screen">
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <EventProvider>
        <Router>
          <AppContent />
        </Router>
      </EventProvider>
    </UserProvider>
  );
}

export default App;