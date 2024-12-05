import React from "react";
import { GraduationCap, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import "./SuccessStories.css";

const SuccessStories = () => {
  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "Google",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "Student's Job helped me land my dream role at Google. The platform's resources were invaluable.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Amazon",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "The career guidance and job matching features were exactly what I needed to transition into product management.",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Microsoft",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "From interview prep to salary negotiation, Student's Job supported me every step of the way.",
    },
  ];
  return (
    <section className="summary-pg-name-success-stories summary-pg-name-section">
      <div className="summary-pg-name-container">
        <motion.h2
          className="summary-pg-name-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Success Stories
        </motion.h2>
        <div className="summary-pg-name-stories-grid">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="summary-pg-name-story-card summary-pg-name-glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="summary-pg-name-story-image">
                <img src={story.image} alt={story.name} />
              </div>
              <div className="summary-pg-name-story-content">
                <h3>{story.name}</h3>
                <div className="summary-pg-name-story-role">
                  <GraduationCap size={18} />
                  <span>{story.role}</span>
                </div>
                <div className="summary-pg-name-story-company">
                  <Building2 size={18} />
                  <span>{story.company}</span>
                </div>
                <p className="summary-pg-name-story-quote">{story.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
