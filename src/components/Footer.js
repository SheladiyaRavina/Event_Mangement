import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-footer text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h2 className="h4 mb-3">
              <i className="bi bi-calendar-event me-2"></i>
              Event Manager
            </h2>
            <p className="text-white">Bringing people together through amazing events.</p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h3 className="h5 mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Create Event
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h3 className="h5 mb-3">Contact Us</h3>
            <p className="text-white mb-1">
              <i className="bi bi-envelope me-2"></i> info@eventmanager.com
            </p>
            <p className="text-white">
              <i className="bi bi-telephone me-2"></i> (123) 456-7890
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="h5 mb-3">Follow Us</h3>
            <div className="d-flex">
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center text-white">
          <small>
            <i className="bi bi-c-circle me-1"></i> 2023 Event Manager. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;