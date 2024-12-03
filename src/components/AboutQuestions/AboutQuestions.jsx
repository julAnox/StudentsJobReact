import React from "react";
import "./AboutQuestions.css";
const AboutQuestions = () => {
  return (
    <div className="section user-questions-section">
      <h2>User Questions & Solutions</h2>
      <div className="questions-grid">
        <div className="question-item">
          <h3>Q: How can I find internships that fit my schedule?</h3>
          <p>
            <strong>Solution:</strong> Use our job filters to search for
            internships by location, duration, and part-time or remote options.
            This ensures you find opportunities that fit your availability.
          </p>
        </div>
        <div className="question-item">
          <h3>Q: I don’t have much experience. Will I still find jobs?</h3>
          <p>
            <strong>Solution:</strong> Absolutely! We list entry-level roles and
            internships tailored for students and recent graduates to help you
            build your career from the ground up.
          </p>
        </div>
        <div className="question-item">
          <h3>Q: How can I stand out to employers?</h3>
          <p>
            <strong>Solution:</strong> Our platform lets you create a
            professional profile, upload your resume, and highlight your skills
            and achievements. Employers are more likely to notice well-crafted
            profiles.
          </p>
        </div>
        <div className="question-item">
          <h3>Q: Is the platform free to use?</h3>
          <p>
            <strong>Solution:</strong> Yes, our platform is completely free for
            students. You can browse job listings, apply, and create profiles
            without any charges.
          </p>
        </div>
        <div className="question-item">
          <h3>Q: Can I set up alerts for new job postings?</h3>
          <p>
            <strong>Solution:</strong> Yes! Enable job alerts to receive
            notifications about new opportunities that match your preferences
            directly to your inbox.
          </p>
        </div>
        <div className="question-item">
          <h3>Q: How do I contact support if I have issues?</h3>
          <p>
            <strong>Solution:</strong> You can reach out to our support team via
            email or phone. We’re here to assist you with any problems you
            encounter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutQuestions;
