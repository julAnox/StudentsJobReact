import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import { FaReact, FaNodeJs, FaJsSquare, FaPython } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import "./CreateResume.css";

const skillOptions = [
  {
    value: "JavaScript",
    label: (
      <>
        <FaJsSquare /> JavaScript
      </>
    ),
  },
  {
    value: "React",
    label: (
      <>
        <FaReact /> React
      </>
    ),
  },
  {
    value: "Node.js",
    label: (
      <>
        <FaNodeJs /> Node.js
      </>
    ),
  },
  {
    value: "Python",
    label: (
      <>
        <FaPython /> Python
      </>
    ),
  },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const professionOptions = [
  { value: "Developer", label: "Developer" },
  { value: "Designer", label: "Designer" },
  { value: "Manager", label: "Manager" },
];

const CreateResume = () => {
  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    city: "",
    phone: "",
    citizenship: "",
    profession: "",
    experience: "",
    education: "",
    institution: "",
    graduationYear: "",
    specialization: "",
    skills: [],
    contacts: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));
  };

  const navigateStep = (direction) => {
    setCurrentStep((prevStep) =>
      Math.min(4, Math.max(1, prevStep + direction))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentStep === 4) {
      console.log(formData);
      navigate("/showresumes", { state: { newResume: formData } });
    } else {
      navigateStep(1);
    }
  };

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="unique-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Enter your surname"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="citizenship">Citizenship</label>
              <input
                type="text"
                id="citizenship"
                name="citizenship"
                value={formData.citizenship}
                onChange={handleChange}
                placeholder="Enter your citizenship"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="gender">Gender</label>
              <Select
                name="gender"
                options={genderOptions}
                value={genderOptions.find(
                  (opt) => opt.value === formData.gender
                )}
                onChange={(selectedOption) =>
                  handleSelectChange(selectedOption, "gender")
                }
                placeholder="Select your gender"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="phone">Phone</label>
              <PhoneInput
                country="by"
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{ name: "phone", required: true, autoFocus: true }}
                disableDropdown
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="unique-form-group">
              <label htmlFor="profession">Profession</label>
              <Select
                name="profession"
                options={professionOptions}
                value={professionOptions.find(
                  (opt) => opt.value === formData.profession
                )}
                onChange={(selectedOption) =>
                  handleSelectChange(selectedOption, "profession")
                }
                placeholder="Select your profession"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="experience">Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Describe your experience"
              />
            </div>
          </>
        );
      case 3:
        const handleTileSelect = (educationLevel) => {
          setFormData((prevData) => ({
            ...prevData,
            education: educationLevel,
          }));
          localStorage.setItem("selectedEducation", educationLevel);
        };

        return (
          <>
            <div className="unique-form-group">
              <label htmlFor="education">Education</label>
              <div className="unique-tile-container">
                {[
                  "High School",
                  "Vocational",
                  "Incomplete Higher",
                  "Higher",
                  "Bachelor's",
                  "Master's",
                  "PhD",
                  "Doctor of Sciences",
                ].map((educationLevel, index) => (
                  <div
                    key={index}
                    className={`unique-tile ${
                      formData.education === educationLevel ? "selected" : ""
                    }`}
                    onClick={() => handleTileSelect(educationLevel)}
                  >
                    {educationLevel}
                  </div>
                ))}
              </div>
            </div>
            <div className="unique-form-group">
              <label htmlFor="institution">Institution Name</label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Enter institution name"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="graduationYear">Graduation Year</label>
              <input
                type="number"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="Enter graduation year"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="specialization">Specialization</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Enter your specialization"
              />
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="unique-form-group">
              <label htmlFor="skills">Skills</label>
              <Select
                isMulti
                name="skills"
                options={skillOptions}
                value={skillOptions.filter((option) =>
                  formData.skills.includes(option.value)
                )}
                onChange={(selectedOptions) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    skills: selectedOptions
                      ? selectedOptions.map((option) => option.value)
                      : [],
                  }))
                }
                placeholder="Select your skills"
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="contacts">Contacts</label>
              <textarea
                id="contacts"
                name="contacts"
                value={formData.contacts}
                onChange={handleChange}
                placeholder="Enter your contact details"
                rows="5"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <div className="unique-wrapper-create-res">
      <div className="unique-container">
        <div className="unique-form-container">
          <h2 className="unique-title">Create your resume on Student's Job</h2>
          <div className="unique-progress-text">Step {currentStep} of 4</div>
          <div className="unique-progress-bar-container">
            <div
              className="unique-progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <form onSubmit={handleSubmit}>
            {renderFormContent()}
            <div className="unique-form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => navigateStep(-1)}
                  className="unique-button"
                >
                  Back
                </button>
              )}
              <button type="submit" className="unique-button">
                {currentStep === 4 ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
