import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthService from '../services/auth.service';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password);
      toast.success('Login successful!');
      navigate("/");
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container-fluid bg-transparent register-background min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="register-card shadow-lg" style={{maxWidth: '400px'}}>
        <div className="">
          <h1 className="card-title text-2xl text-center mb-4 text-white">Login</h1>
          <form onSubmit={handleLogin}>
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
            <center>
            <div className="d-grid">
              <button type="submit" className="btn btn-success btn-lg">Login</button>
            </div>  
            </center>
          </form>
          <p className="text-center mt-3 text-white">
            Don't have an account? <Link to="/register" className="text-decoration-none">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;