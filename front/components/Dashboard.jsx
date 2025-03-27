import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Timeline from "../pages/Timeline";

const Dashboard = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <div className="dashboard">
      <Navbar
        onHomeClick={() => setShowTimeline(false)}
        onTaskClick={() => setShowTimeline(!showTimeline)}
      />
      <div style={{ display: "flex", marginTop: "60px" }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1, padding: "20px", marginLeft: "320px" }}>
          {!showTimeline ? (
            <h2 style={{ textAlign: "left", marginLeft: "-50px" }}>
              Welcome to Project Management Dashboard
            </h2>
          ) : (
            <Timeline />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;