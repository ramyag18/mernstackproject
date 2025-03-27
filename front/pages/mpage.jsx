import React from "react";
import "./mpage.css"; // Importing the CSS file

const MPage = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Translucent effect */}
      <div className="content">
        <h1>Welcome to Project Management Dashboard</h1>
        <p>Manage your projects, track tasks, and collaborate with your team efficiently.</p>
      </div>
      <div className="loading-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default MPage;