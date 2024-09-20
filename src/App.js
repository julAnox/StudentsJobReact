import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import VacanciesPage from "./pages/VacanciesPage/VacanciesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
