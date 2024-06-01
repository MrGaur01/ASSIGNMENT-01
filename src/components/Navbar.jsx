import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-buttons">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/about" className="nav-button">About</Link>
      <Link to="/projects" className="nav-button">Projects</Link>
      <Link to="/services" className="nav-button">Services</Link>
      <Link to="/contact" className="nav-button">Contact</Link>
    </nav>
  );
}

export default Navbar;
