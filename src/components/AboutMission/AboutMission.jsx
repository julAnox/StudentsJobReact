import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./AboutMission.css";

const AboutMission = () => {
  return (
    <div className="section mission-section">
      <div className="section-grid">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower students in their career journey by
            providing easy access to job opportunities tailored to their skills
            and aspirations. We bridge the gap between young talent and
            employers, offering a platform where students can find meaningful
            work experiences.
          </p>
          <div className="mission-features">
            <div className="feature">
              <div className="about-feature-icon">
                <Mail />
              </div>
              <div>
                <h3>Career Growth</h3>
                <p>Supporting your professional development journey</p>
              </div>
            </div>
            <div className="feature">
              <div className="about-feature-icon">
                <Phone />
              </div>
              <div>
                <h3>Network Building</h3>
                <p>Connect with industry professionals and peers</p>
              </div>
            </div>
            <div className="feature">
              <div className="about-feature-icon">
                <MapPin />
              </div>
              <div>
                <h3>Job Matching</h3>
                <p>Find opportunities that align with your goals</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mission-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Students collaborating"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
