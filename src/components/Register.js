import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthService from '../services/auth.service';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    try {
      await AuthService.register(username, email, password);
      toast.success('Registration successful! Please log in.');
      navigate("/login");
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container-fluid bg-transparent register-background min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="register-card shadow-lg" style={{maxWidth: '400px'}}>
        <div className=" ">
          <h2 className="card-title text-center mb-4 text-white">Create Account</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-white">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success btn-lg ">Register</button>
            </div>
          </form>
          <p className="text-center mt-3 text-white">
            Already have an account? <Link to="/login" className="text-decoration-none">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;