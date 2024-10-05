import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import AuthService from '../services/auth.service';
import { toast } from 'react-toastify';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="bg-header text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Event Management System</Link>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/events" className="mr-4">Events</Link>
          {user ? (
            <>
              <Link to="/create-event" className="mr-4">Create Event</Link>
        
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;