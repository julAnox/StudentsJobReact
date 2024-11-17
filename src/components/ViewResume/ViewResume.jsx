import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ViewResume.css";

function ViewResume() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [resume, setResume] = useState(null);

  // Retrieve the resume data from state passed from ShowResumes or CreateResume
  useEffect(() => {
    const selectedResume = location.state?.resumes?.[id] || null;
    setResume(selectedResume);
  }, [id, location.state]);

  const handleSave = () => {
    // Since we're not using localStorage, you can update the resume here
    // For example, you can use a global state or handle saving in a different way.
    // If needed, you can navigate back or perform another action.

    navigate("/showresumes");
  };

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resume-page-container">
      <div className="resume-page-header">
        <h1 className="resume-page-title">
          {resume.name} {resume.surname}
        </h1>
        <h2 className="resume-page-profession">{resume.profession}</h2>
      </div>
      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Skills</h2>
        <p className="resume-page-section-content">
          {Array.isArray(resume.skills)
            ? resume.skills
                .map((skill) =>
                  typeof skill === "object" ? skill.label : skill
                )
                .join(", ")
            : resume.skills.label}
        </p>
      </div>

      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Experience</h2>
        <p className="resume-page-section-content">{resume.experience}</p>
      </div>
      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Education</h2>
        <p className="resume-page-section-content">{resume.education}</p>
      </div>
      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Institution</h2>
        <p className="resume-page-section-content">{resume.institution}</p>
      </div>
      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Graduation Year</h2>
        <p className="resume-page-section-content">{resume.graduationYear}</p>
      </div>
      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Specialization</h2>
        <p className="resume-page-section-content">{resume.specialization}</p>
      </div>
      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Phone</h2>
        <p className="resume-page-section-content">{resume.phone}</p>
      </div>
      <div className="resume-page-section">
        <h2 className="resume-page-section-title">Contacts</h2>
        <p className="resume-page-section-content">{resume.contacts}</p>
      </div>
      <button className="resume-page-save-button" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

export default ViewResume;
