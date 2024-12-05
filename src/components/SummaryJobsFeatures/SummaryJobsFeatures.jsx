import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Building2, MapPin, DollarSign } from "lucide-react";
import "./SummaryJobsFeatures.css";

const SummaryJobsFeatures = () => {
  const featuredJobs = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      type: "Full-time",
      skills: ["React", "Node.js", "TypeScript"],
    },
    {
      title: "UX Designer",
      company: "Creative Studios",
      location: "New York, NY",
      salary: "$90K - $120K",
      type: "Full-time",
      skills: ["Figma", "Adobe XD", "UI Design"],
    },
    {
      title: "Data Analyst",
      company: "Data Insights Co.",
      location: "Chicago, IL",
      salary: "$80K - $100K",
      type: "Remote",
      skills: ["SQL", "Python", "Tableau"],
    },
  ];
  const navigate = useNavigate();

  const handleVacanciesSecondary = () => {
    navigate("/vacancies/secondary");
  };
  return (
    <section className="summary-pg-name-featured-jobs summary-pg-name-section">
      <div className="summary-pg-name-container">
        <motion.h2
          className="summary-pg-name-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Job Opportunities
        </motion.h2>
        <div className="summary-pg-name-jobs-grid">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={index}
              className="summary-pg-name-job-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="summary-pg-name-job-header">
                <h3>{job.title}</h3>
                <span className="summary-pg-name-job-type">{job.type}</span>
              </div>
              <div className="summary-pg-name-job-company">
                <Building2 size={18} />
                <span>{job.company}</span>
              </div>
              <div className="summary-pg-name-job-details">
                <div className="summary-pg-name-job-location">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>
                <div className="summary-pg-name-job-salary">
                  <DollarSign size={18} />
                  <span>{job.salary}</span>
                </div>
              </div>
              <div className="summary-pg-name-job-skills">
                {job.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="summary-pg-name-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              <button
                className="summary-pg-name-btn-apply"
                onClick={handleVacanciesSecondary}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummaryJobsFeatures;
