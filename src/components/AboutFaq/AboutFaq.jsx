import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./AboutFaq.css";

const AboutFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Student Job Search Platform?",
      answer:
        "Our platform is designed to help students find part-time, internship, and full-time job opportunities tailored to their needs and schedules. We partner with companies looking to hire students across various industries.",
    },
    {
      question: "How do I create a profile?",
      answer:
        "To create a profile, sign up with your email or social media account. Once registered, you can fill in your personal details, upload your resume, and specify your job preferences such as location, industry, and availability.",
    },
    {
      question: "How does the job search work?",
      answer:
        "After creating a profile, you can use our filters to search for jobs based on location, industry, job type, and more. You can also set up job alerts to get notified when new opportunities match your preferences.",
    },
    {
      question: "How do I apply for a job?",
      answer:
        "Once you find a job that suits your needs, simply click on the job listing to view the details and requirements. You can then submit your application directly through our platform or follow the company's application process as outlined in the listing.",
    },
  ];

  return (
    <div className="section faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </button>
            <div
              style={{
                transition: "all 0.3s ease",
                opacity: activeIndex === index ? 1 : 0,
                maxHeight: activeIndex === index ? "500px" : "0px",
                overflow: "hidden",
              }}
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFAQ;
