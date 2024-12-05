import React from "react";
import { motion } from "framer-motion";
import { Search, Users, Bell } from "lucide-react";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import "./SummaryFeatures.css";

const SummaryFeatures = () => {
  const features = [
    {
      icon: <Search className="feature-icon" />,
      title: "Your Resume is Seen by Employers",
      description:
        "75% of employers actively search for candidates on our platform. Increase your chances of getting noticed.",
      percentage: 75,
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Find Jobs Matching Your Skills",
      description:
        "Over 90% of job postings are matched with relevant resumes. Get job recommendations that fit your profile.",
      percentage: 90,
    },
    {
      icon: <Bell className="feature-icon" />,
      title: "Receive Personalized Job Alerts",
      description:
        "Get alerts for jobs that match your profile and never miss out on a new opportunity.",
      percentage: 85,
    },
  ];
  return (
    <section className="summary-pg-name-features summary-pg-name-section">
      <div className="summary-pg-name-container">
        <motion.h2
          className="summary-pg-name-section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Student's Job?
        </motion.h2>
        <motion.div
          className="summary-pg-name-features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="summary-pg-name-feature-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="summary-pg-name-feature-header">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <AnimatedCounter
                  end={feature.percentage}
                  duration={2000}
                  suffix="%"
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SummaryFeatures;
