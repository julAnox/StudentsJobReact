import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewResume.css";

function ViewResume() {
  const location = useLocation();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showBothButtons, setShowBothButtons] = useState(true);

  useEffect(() => {
    const selectedResume = location.state?.resume || null;
    setResume(selectedResume);
  }, [location.state]);

  const handleSave = () => {
    if (showBothButtons) {
      navigate("/showresumes");
    } else {
      const updatedResumes = JSON.parse(localStorage.getItem("resumes")) || [];
      const index = updatedResumes.findIndex((r) => r.email === resume.email);
      if (index !== -1) {
        updatedResumes[index] = resume;
        localStorage.setItem("resumes", JSON.stringify(updatedResumes));
      }

      setIsEditing(false);
      setShowBothButtons(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResume((prevResume) => ({
      ...prevResume,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowBothButtons(false);
  };

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-view-res">
      <div className="resume-page-container">
        <h1 className="resume-page-title">Resume</h1>
        <div className="resume-page-content">
          {[
            "name",
            "surname",
            "dateOfBirth",
            "gender",
            "country",
            "city",
            "phone",
            "email",
            "profession",
            "experience",
            "education",
            "institution",
            "graduationYear",
            "specialization",
            "contacts",
          ].map((field, index) => (
            <div
              className={`resume-page-section ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={field}
            >
              <h2 className="resume-page-section-title">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </h2>
              {isEditing ? (
                <input
                  type="text"
                  name={field}
                  value={resume[field] || ""}
                  maxLength={50}
                  onChange={handleChange}
                />
              ) : (
                <p className="resume-page-section-content">{resume[field]}</p>
              )}
            </div>
          ))}

          <div className="resume-page-section skills">
            <h2 className="resume-page-section-title">Skills</h2>
            {isEditing ? (
              <textarea
                name="skills"
                value={resume.skills.join(", ")}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "skills",
                      value: e.target.value.split(","),
                    },
                  })
                }
                maxLength={200}
                rows={3}
              />
            ) : (
              <p className="resume-page-section-content">
                {resume.skills.length > 0
                  ? resume.skills.join(", ")
                  : "No skills listed"}
              </p>
            )}
          </div>
        </div>

        <div className="resume-page-footer">
          {showBothButtons && (
            <>
              <button className="resume-page-button edit" onClick={handleEdit}>
                Edit Resume
              </button>
              <button className="resume-page-button save" onClick={handleSave}>
                Save Changes
              </button>
            </>
          )}
          {!showBothButtons && (
            <button className="resume-page-button save" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewResume;
