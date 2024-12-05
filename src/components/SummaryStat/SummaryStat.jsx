import React from "react";
import "./SummaryStat.css";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

const SummaryStat = () => {
  const statistics = [
    { value: 250000, suffix: "+", label: "Active Job Listings" },
    { value: 1500, suffix: "+", label: "Partner Companies" },
    { value: 95, suffix: "%", label: "Success Rate" },
    { value: 50000, suffix: "+", label: "Successful Placements" },
  ];
  return (
    <section className="summary-pg-name-statistics summary-pg-name-section">
      <div className="summary-pg-name-container">
        <div className="summary-pg-name-statistics-grid">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="summary-pg-name-stat-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AnimatedCounter
                end={stat.value}
                duration={2000}
                suffix={stat.suffix}
              />
              <h3>{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummaryStat;
