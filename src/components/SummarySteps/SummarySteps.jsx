import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Target, Briefcase, Star } from "lucide-react";
import "./SummarySteps.css";

const SummarySteps = () => {
  const steps = [
    {
      icon: <UserPlus />,
      number: "01",
      title: "Register",
      description:
        "Create your account to access all features on Student's Job",
    },
    {
      icon: <Target />,
      number: "02",
      title: "Define Your Goals",
      description: "Specify your career objectives and desired roles",
    },
    {
      icon: <Briefcase />,
      number: "03",
      title: "Start Your Journey",
      description: "Begin applying to positions that match your profile",
    },
    {
      icon: <Star />,
      number: "04",
      title: "Succeed",
      description: "Land your dream job and start your career",
    },
  ];
  return (
    <section className="summary-pg-name-process-steps summary-pg-name-section">
      <div className="summary-pg-name-container">
        <motion.h2
          className="summary-pg-name-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <motion.div className="summary-pg-name-steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="summary-pg-name-step-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="summary-pg-name-step-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {step.icon}
              </motion.div>
              <motion.div
                className="summary-pg-name-step-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {step.number}
              </motion.div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="summary-pg-name-step-progress-bar" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SummarySteps;
