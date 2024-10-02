import React from "react";
import "./AboutFoundation.css";

const AboutFoundation = () => {
  return (
    <div>
      <div className="students-job-foundation">
        <div className="students-job-foundation-h">
          <h3>The Student's Job Foundation</h3>
        </div>
        <div className="students-job-foundation-p">
          <p>
            The Student's Job project was founded in May 2023. Initially, this
            project was conceived as a pet project, but it has since undergone
            significant changes. We made major updates to both the design and
            functionality of the website.
            <ul>
              Features we added include:
              <li>A chat where users can communicate with employers.</li>
              <li>
                A simple and user-friendly design that doesn't push users away.
              </li>
              <li>The ability to edit personal profiles.</li>
              <li>
                Filtering options that allow users to sort through and exclude
                unwanted job listings.
              </li>
              <li>And many more details that you can see on our website.</li>
            </ul>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutFoundation;
