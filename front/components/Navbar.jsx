import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({ onTaskClick, onHomeClick }) => {
  const navigate = useNavigate();

  const handleHomeClick = (event) => {
    event.preventDefault(); // Prevents unnecessary reload
    if (onHomeClick) {
      onHomeClick(); // Call the home click function if provided
    }
    navigate("/"); // Navigate to the home page
  };

  return (
    <nav className="navbar">
      <div className="logo">Project Management Dashboard</div>
      <ul className="nav-links">
        <li>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
        </li>
        <li>
          <Link to="/timeline" onClick={onTaskClick}>Task Tracking</Link>
        </li>
        <li>
          <Link to="/team">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
