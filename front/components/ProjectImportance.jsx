import React from "react";
import "./ProjectImportance.css"; // ✅ Keep styles separate for maintainability

const ProjectImportance = () => {
  return (
    <div className="importance-container">
      <h2 className="importance-title">🌟 Why Our Project Matters? 🌟</h2>

      <div className="importance-flex">
        <div className="importance-box">
          <h3>🚀 Streamlined Workflow</h3>
          <p>Our dashboard optimizes task management, ensuring smooth project execution.</p>
        </div>

        <div className="importance-box">
          <h3>🤝 Enhanced Collaboration</h3>
          <p>Real-time updates help teams stay connected and work efficiently.</p>
        </div>

        <div className="importance-box">
          <h3>📅 Structured Timelines</h3>
          <p>Track project deadlines effectively with our intuitive timeline view.</p>
        </div>

        <div className="importance-box">
          <h3>📊 Organized Project Views</h3>
          <p>Get a clear overview of tasks, priorities, and progress in one place.</p>
        </div>

        <div className="importance-box">
          <h3>🔒 Secure & Reliable</h3>
          <p>Data security and reliability are ensured for seamless project management.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectImportance;