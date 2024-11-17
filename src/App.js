import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import VacanciesPage from "./pages/VacanciesPage/VacanciesPage";
import VacanciesSecondaryPage from "./pages/VacanciesSecondaryPage/VacanciesSecondaryPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import SummarySecondaryPage from "./pages/SummarySecondaryPage/SummarySecondaryPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import AuctionPage from "./pages/AuctionPage/AuctionPage";

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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/auction" element={<AuctionPage />} />

          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/summary/secondary" element={<SummarySecondaryPage />} />

          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route
            path="/vacancies/secondary"
            element={<VacanciesSecondaryPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
