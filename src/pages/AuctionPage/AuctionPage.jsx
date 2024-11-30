import { useState, useEffect } from "react";
import { Timer, Trophy, Briefcase, MapPin, Clock } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AuctionPage.css";

function AuctionPage() {
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 0,
    seconds: 30,
  });
  const [currentBid, setCurrentBid] = useState("100");
  const [bidAmount, setBidAmount] = useState("");
  const [currentPhase, setCurrentPhase] = useState("salary");
  const [activeBidder, setActiveBidder] = useState(0);
  const [bidHistory, setBidHistory] = useState([]);

  const companies = [
    { name: "TechCorp", logo: "TC", marketCap: "10B" },
    { name: "InnoSoft", logo: "IS", marketCap: "5B" },
    { name: "DevHub", logo: "DH", marketCap: "2B" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          if (currentPhase === "salary") {
            setCurrentPhase("equity");
            return { minutes: 5, seconds: 0 };
          }
          clearInterval(timer);
          return prev;
        }

        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentPhase]);

  const handleBid = (companyIndex) => {
    if (companyIndex !== activeBidder) return;

    if (!bidAmount) return;

    const newBid = parseInt(bidAmount.replace(/,/g, ""));
    const currentBidNum = parseInt(currentBid.replace(/,/g, ""));

    if (newBid > currentBidNum) {
      setCurrentBid(bidAmount);
      setBidHistory((prev) => [
        ...prev,
        {
          company: companies[companyIndex].name,
          amount: bidAmount,
          phase: currentPhase,
        },
      ]);
      setActiveBidder((companyIndex + 1) % companies.length);
      setBidAmount("");
    }
  };

  const formatTime = (minutes, seconds) => {
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <Navbar />
      <div className="auction-container">
        <div className="auction-header">
          <h1 className="auction-title">Live Talent Auction</h1>
          <p className="candidate-info">
            Candidate: Alex Johnson - Full Stack Developer
          </p>
        </div>

        <div className="auction-grid">
          <div className="profile-section">
            <div className="profile-card">
              <div className="profile-image-container">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                  alt="Alex Johnson"
                  className="profile-image"
                />
                <div className="status-indicator"></div>
              </div>

              <h3 className="profile-name">Alex Johnson</h3>

              <div className="profile-details">
                <div className="detail-item">
                  <Briefcase className="icon" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="detail-item">
                  <Clock className="icon" />
                  <span>3 Years Experience</span>
                </div>
                <div className="detail-item">
                  <MapPin className="icon" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="skills-section">
                <h4 className="skills-title">Skills</h4>
                <div className="skills-grid">
                  {["React", "Node.js", "TypeScript", "AWS", "Docker"].map(
                    (skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="auction-content">
            <div className="status-cards">
              <div className="status-card">
                <div className="status-card-content">
                  <Timer className="status-icon" />
                  <div>
                    <div className="status-label">
                      {currentPhase === "salary"
                        ? "Salary Bidding Time"
                        : "Equity Bidding Time"}
                    </div>
                    <div className="status-value">
                      {formatTime(timeRemaining.minutes, timeRemaining.seconds)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="status-card">
                <div className="status-card-content">
                  <Trophy className="status-icon" />
                  <div>
                    <div className="status-label">
                      Current Highest{" "}
                      {currentPhase === "salary" ? "Salary" : "Equity"}
                    </div>
                    <div className="status-value">
                      {currentPhase === "salary"
                        ? `$${currentBid}`
                        : `${currentBid}%`}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bidding-section">
              <h3 className="section-title">Active Bidding</h3>
              <div className="company-grid">
                {companies.map((company, index) => (
                  <div
                    key={company.name}
                    className={`company-card ${
                      index === activeBidder ? "active" : ""
                    }`}
                  >
                    <div className="company-header">
                      <div className="company-logo">
                        <span>{company.logo}</span>
                      </div>
                      <div className="company-info">
                        <span className="company-name">{company.name}</span>
                        <div className="company-cap">
                          Market Cap: ${company.marketCap}
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={index === activeBidder ? bidAmount : ""}
                      onChange={(e) =>
                        index === activeBidder && setBidAmount(e.target.value)
                      }
                      placeholder={`Enter ${
                        currentPhase === "salary" ? "salary" : "equity"
                      }`}
                      disabled={
                        index !== activeBidder ||
                        (currentPhase === "equity" &&
                          timeRemaining.minutes === 5)
                      }
                      className="bid-input"
                    />
                    <button
                      onClick={() => handleBid(index)}
                      disabled={
                        index !== activeBidder ||
                        (currentPhase === "equity" &&
                          timeRemaining.minutes === 5)
                      }
                      className="bid-button"
                    >
                      Place Bid
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="history-section">
              <h3 className="section-title">Bid History</h3>
              <div className="history-list">
                {bidHistory.map((bid, index) => (
                  <div key={index} className="history-item">
                    <div className="history-content">
                      <div>
                        <div className="history-company">{bid.company}</div>
                        <div className="history-phase">
                          {bid.phase === "salary" ? "Salary Bid" : "Equity Bid"}
                        </div>
                      </div>
                      <div className="history-amount">
                        {bid.phase === "salary"
                          ? `$${bid.amount}`
                          : `${bid.amount}%`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AuctionPage;
