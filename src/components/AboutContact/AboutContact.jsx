import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./AboutContact.css";

const AboutContact = () => {
  return (
    <div className="section contact-section">
      <div className="contact-grid">
        <div className="contact-info-about">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? We're here to help you navigate
            your career journey.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@students.job">contact@students.job</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+375 (29) 777 77 77</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div>
                <h4>Location</h4>
                <p>Student's Jobs Street 22, Minsk City</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
