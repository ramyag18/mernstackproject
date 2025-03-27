import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Timeline from "./pages/Timeline";
import Team from "./pages/Team";
import MPage from "./pages/MPage";
import Dashboard from "./components/Dashboard";
import ProjectImportance from "./components/ProjectImportance";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const Layout = () => {
  const location = useLocation();
  const hideSidebar = location.pathname === "/team";
  const showProjectImportance = location.pathname === "/";

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        {!hideSidebar && <Sidebar />}
        <div
          style={{
            flex: 1,
            padding: "20px",
            marginLeft: hideSidebar ? "0" : "250px",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Home/Dashboard */}
            <Route path="/team" element={<Team />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {showProjectImportance && <ProjectImportance />}
        </div>
      </div>
      <ToastContainer /> {/* ✅ Toast Notifications */}
    </>
  );
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        navigate("/"); // ✅ Redirect to Dashboard
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome, navigate]);

  return showWelcome ? <MPage /> : <Layout />;
};

export default App;
