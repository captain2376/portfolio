// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/favicon.ico" alt="Logo" className="logo" />
        <h1 className="navbar-name">Sindhuja Dindigala</h1>  
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
