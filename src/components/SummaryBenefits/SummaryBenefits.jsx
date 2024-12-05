import React from "react";
import { motion } from "framer-motion";
import { Rocket, Award, BookOpen } from "lucide-react";
import "./SummaryBenefits.css";

const SummaryBenefits = () => {
  return (
    <section className="summary-pg-name-benefits summary-pg-name-section">
      <div className="summary-pg-name-container">
        <motion.h2
          className="summary-pg-name-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Join Student's Job
        </motion.h2>
        <div className="summary-pg-name-benefits-grid">
          <motion.div
            className="summary-pg-name-benefit-card summary-pg-name-glass-effect"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Rocket className="summary-pg-name-benefit-icon" />
            <h3>Career Growth</h3>
            <p>
              Access exclusive opportunities and accelerate your career path
            </p>
          </motion.div>
          <motion.div
            className="summary-pg-name-benefit-card summary-pg-name-glass-effect"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="summary-pg-name-benefit-icon" />
            <h3>Industry Recognition</h3>
            <p>Get certified and build credibility in your field</p>
          </motion.div>
          <motion.div
            className="summary-pg-name-benefit-card summary-pg-name-glass-effect"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <BookOpen className="summary-pg-name-benefit-icon" />
            <h3>Learning Resources</h3>
            <p>Access comprehensive learning materials and workshops</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SummaryBenefits;
