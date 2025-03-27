import React from "react";
import ReactDOM from "react-dom/client"; // Ensure this import is correct
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // No need for .jsx
import "./index.css"; // Keep if you have global styles

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ Root element not found! Check if <div id='root'></div> exists in index.html.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
