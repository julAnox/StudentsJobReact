import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root")); // Используй createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
