import { useState, useEffect } from "react";
import { Timer, Trophy, Briefcase, MapPin, Clock } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AuctionPage.css";

function AuctionPage() {
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 0,
    seconds: 20,
  });
  const [currentBid, setCurrentBid] = useState("100");
  const [bidAmount, setBidAmount] = useState({});
  const [currentPhase, setCurrentPhase] = useState("salary");
  const [activeBidder, setActiveBidder] = useState(0);
  const [bidHistory, setBidHistory] = useState([]);
  const [finalResults, setFinalResults] = useState(null);
  const [positions, setPositions] = useState({});
  const [benefits, setBenefits] = useState({});

  const companies = [
    { name: "TechCorp", logo: "TC", marketCap: "10B" },
    { name: "InnoSoft", logo: "IS", marketCap: "5B" },
    { name: "DevHub", logo: "DH", marketCap: "2B" },
  ];

  const phases = ["salary", "equity", "position", "benefits"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          const currentPhaseIndex = phases.indexOf(currentPhase);
          if (currentPhaseIndex < phases.length - 1) {
            if (currentPhase === "position") {
              companies.forEach((company) => {
                if (bidAmount[company.name]) {
                  setPositions((prev) => ({
                    ...prev,
                    [company.name]: bidAmount[company.name],
                  }));
                }
              });
            } else if (currentPhase === "benefits") {
              companies.forEach((company) => {
                if (bidAmount[company.name]) {
                  setBenefits((prev) => ({
                    ...prev,
                    [company.name]: bidAmount[company.name],
                  }));
                }
              });
            }
            setCurrentPhase(phases[currentPhaseIndex + 1]);
            setCurrentBid(currentPhase === "salary" ? "0" : "");
            setBidAmount({});
            return { minutes: 1, seconds: 0 };
          } else {
            companies.forEach((company) => {
              if (bidAmount[company.name]) {
                setBenefits((prev) => ({
                  ...prev,
                  [company.name]: bidAmount[company.name],
                }));
              }
            });
            generateFinalResults();
            clearInterval(timer);
          }
          return prev;
        }

        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentPhase, bidAmount]);

  const generateFinalResults = () => {
    const results = companies.map((company) => ({
      company: company.name,
      salary:
        bidHistory
          .filter(
            (bid) => bid.company === company.name && bid.phase === "salary"
          )
          .pop()?.amount || "-",
      equity:
        bidHistory
          .filter(
            (bid) => bid.company === company.name && bid.phase === "equity"
          )
          .pop()?.amount || "-",
      position: positions[company.name] || "-",
      benefits: benefits[company.name] || "-",
    }));
    setFinalResults(results);
  };

  const handleBid = (companyIndex) => {
    const company = companies[companyIndex];

    if (currentPhase === "position" || currentPhase === "benefits") {
      if (currentPhase === "position") {
        setPositions((prev) => ({
          ...prev,
          [company.name]: bidAmount[company.name] || "",
        }));
      } else {
        setBenefits((prev) => ({
          ...prev,
          [company.name]: bidAmount[company.name] || "",
        }));
      }
      setBidAmount((prev) => ({
        ...prev,
        [company.name]: "",
      }));
      return;
    }

    if (!bidAmount[company.name]) return;

    if (currentPhase === "salary") {
      const newBid = parseInt(bidAmount[company.name].replace(/,/g, ""));
      const currentBidNum = parseInt(currentBid.replace(/,/g, ""));
      if (newBid <= currentBidNum) return;
      setCurrentBid(bidAmount[company.name]);
    } else if (currentPhase === "equity") {
      const newBid = parseFloat(bidAmount[company.name]);
      if (newBid < 0 || newBid > 20) return;
      setCurrentBid(bidAmount[company.name]);
    }

    setBidHistory((prev) => [
      ...prev,
      {
        company: company.name,
        amount: bidAmount[company.name],
        phase: currentPhase,
      },
    ]);

    setBidAmount((prev) => ({ ...prev, [company.name]: "" }));
    setActiveBidder((companyIndex + 1) % companies.length);
  };

  const formatTime = (minutes, seconds) => {
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getPhaseTitle = () => {
    switch (currentPhase) {
      case "salary":
        return "Salary Bidding Phase";
      case "equity":
        return "Equity Bidding Phase (0-20%)";
      case "position":
        return "Position & Career Growth";
      case "benefits":
        return "Benefits Package";
      default:
        return "";
    }
  };

  const handleInputChange = (companyName, value) => {
    setBidAmount((prev) => ({
      ...prev,
      [companyName]: value,
    }));
  };

  const getPositionColor = (position) => {
    const lowPositions = ["junior", "intern", "trainee"];
    const mediumPositions = ["developer", "engineer", "analyst"];
    const highPositions = ["senior", "lead", "architect"];
    const topPositions = ["principal", "head", "director", "cto", "vp"];

    position = position.toLowerCase();

    if (topPositions.some((p) => position.includes(p))) return "position-top";
    if (highPositions.some((p) => position.includes(p))) return "position-high";
    if (mediumPositions.some((p) => position.includes(p)))
      return "position-medium";
    if (lowPositions.some((p) => position.includes(p))) return "position-low";
    return "";
  };

  const renderInput = (company) => {
    if (currentPhase === "position") {
      return (
        <input
          type="text"
          value={bidAmount[company.name] || ""}
          onChange={(e) => handleInputChange(company.name, e.target.value)}
          placeholder="Enter position title"
          className={`position-input ${getPositionColor(
            bidAmount[company.name] || ""
          )}`}
        />
      );
    }

    if (currentPhase === "benefits") {
      return (
        <textarea
          value={bidAmount[company.name] || ""}
          onChange={(e) => handleInputChange(company.name, e.target.value)}
          placeholder="Enter benefits package details"
          className="benefits-input"
        />
      );
    }

    return (
      <input
        type="text"
        value={bidAmount[company.name] || ""}
        onChange={(e) => handleInputChange(company.name, e.target.value)}
        placeholder={`Enter ${
          currentPhase === "salary" ? "salary" : "equity %"
        }`}
        disabled={
          (currentPhase === "salary" || currentPhase === "equity") &&
          company.name !== companies[activeBidder].name
        }
        className="bid-input"
      />
    );
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

        <div className="phase-indicator">
          {phases.map((phase) => (
            <div
              key={phase}
              className={`phase-dot ${currentPhase === phase ? "active" : ""}`}
              title={phase.charAt(0).toUpperCase() + phase.slice(1)}
            />
          ))}
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

          <div className="auction-content">
            <div
              className="status-cards"
              style={{
                gridTemplateColumns:
                  currentPhase === "position" || currentPhase === "benefits"
                    ? "1fr"
                    : undefined,
              }}
            >
              <div className="status-card">
                <div className="status-card-content">
                  <Timer className="status-icon" />
                  <div>
                    <div className="status-label">{getPhaseTitle()}</div>
                    <div className="status-value">
                      {formatTime(timeRemaining.minutes, timeRemaining.seconds)}
                    </div>
                  </div>
                </div>
              </div>

              {(currentPhase === "salary" || currentPhase === "equity") && (
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
              )}
            </div>

            {!finalResults ? (
              <div className="bidding-section">
                <h3 className="section-title">Active Bidding</h3>
                <div className="company-grid">
                  {companies.map((company, index) => (
                    <div
                      key={company.name}
                      className={`company-card ${
                        (currentPhase === "salary" ||
                          currentPhase === "equity") &&
                        index === activeBidder
                          ? "active"
                          : ""
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
                      {renderInput(company)}
                      <button
                        onClick={() => handleBid(index)}
                        disabled={
                          (currentPhase === "salary" ||
                            currentPhase === "equity") &&
                          index !== activeBidder
                        }
                        className="bid-button"
                      >
                        {currentPhase === "position" ||
                        currentPhase === "benefits"
                          ? "Submit"
                          : "Place Bid"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bidding-section">
                <h3 className="section-title">Final Results</h3>
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Final Salary</th>
                      <th>Equity</th>
                      <th>Position</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finalResults.map((result, index) => (
                      <tr key={index}>
                        <td>{result.company}</td>
                        <td>${result.salary}</td>
                        <td>{result.equity}%</td>
                        <td className={getPositionColor(result.position)}>
                          {result.position}
                        </td>
                        <td>{result.benefits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

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
