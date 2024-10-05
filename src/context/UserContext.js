import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const authenticate = (email, password) => {
    console.log('Authenticating:', email, password); // Debug log
    
    // For testing purposes, let's accept any non-empty email and password
    if (email.trim() !== '' && password.trim() !== '') {
      const userData = { email, name: email.split('@')[0] }; // Use part of email as name
      login(userData);
      console.log('Authentication successful'); // Debug log
      return true;
    }
    
    console.log('Authentication failed'); // Debug log
    return false;
  };

  const login = (userData) => {
    console.log('Logging in user:', userData); // Debug log
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, authenticate }}>
      {children}
    </UserContext.Provider>
  );
};