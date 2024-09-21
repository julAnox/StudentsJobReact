import React, { useState } from "react";
import "./AboutFaq.css";

const AboutFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is the Student Job Search Platform?",
      content:
        "Our platform is designed to help students find part-time, internship, and full-time job opportunities tailored to their needs and schedules. We partner with companies looking to hire students across various industries.",
    },
    {
      title: "How do I create a profile?",
      content:
        "To create a profile, sign up with your email or social media account. Once registered, you can fill in your personal details, upload your resume, and specify your job preferences such as location, industry, and availability.",
    },
    {
      title: "How does the job search work?",
      content:
        "After creating a profile, you can use our filters to search for jobs based on location, industry, job type, and more. You can also set up job alerts to get notified when new opportunities match your preferences.",
    },
    {
      title: "How do I apply for a job?",
      content:
        "Once you find a job that suits your needs, simply click on the job listing to view the details and requirements. You can then submit your application directly through our platform or follow the company's application process as outlined in the listing.",
    },
  ];

  return (
    <div className="about-faq">
      <div className="about-content">
        <div className="about-faq-h">
          <h3>FAQ</h3>
        </div>
        <div className="accordion-all">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{activeIndex === index ? "-" : "+"}</span> {item.title}
              </div>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFaq;
