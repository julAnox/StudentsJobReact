import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./ProfilePage.css";
import profiledefault from "../../assets/user-default.png";

function ProfilePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(profiledefault);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      navigate("/login");
      return;
    }

    setEmail(userData.email || "");
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <div className="profile-container-wrapper">
      <div className="profile-container">
        <h1 className="profile-heading">{t("personal_area")}</h1>
        <form id="profile-form" className="profile-form">
          <div className="profile-form-row">
            <label htmlFor="profile-pic" className="profile-label">
              {t("profile_picture")}:
            </label>
            <div className="profile-image-upload">
              <img
                id="profile-preview"
                src={imagePreview}
                alt={t("profile_picture")}
              />
              <input
                type="file"
                id="profile-pic"
                name="img"
                accept="image/*"
                className="profile-input"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="profile-form-row">
            <label htmlFor="first-name" className="profile-label">
              {t("name")}:
            </label>
            <input
              type="text"
              id="first-name"
              name="first_name"
              className="profile-input"
              required
              maxLength="20"
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="last-name" className="profile-label">
              {t("surname")}:
            </label>
            <input
              type="text"
              id="last-name"
              name="last_name"
              className="profile-input"
              required
              maxLength="20"
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="date-input" className="profile-label">
              {t("date_of_birth")}:
            </label>
            <input
              type="date"
              id="date-input"
              name="birthday"
              className="profile-input"
              required
              value={birthDate}
              onChange={handleDateChange}
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="email" className="profile-label">
              {t("email")}:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="profile-input"
              maxLength="40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="select-country" className="profile-label">
              {t("Сountry")}:
            </label>
            <input
              type="text"
              id="select-country"
              name="country"
              className="profile-input"
              value={selectedCountry}
              onChange={handleCountryChange}
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="select-city" className="profile-label">
              {t("city")}:
            </label>
            <input
              type="text"
              id="select-city"
              name="city"
              className="profile-input"
              value={selectedCity}
              onChange={handleCityChange}
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="phone" className="profile-label">
              {t("telephone_number")}:
            </label>
            <PhoneInput
              international
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="profile-input"
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="gender" className="profile-label">
              {t("gender")}:
            </label>
            <select id="gender" name="gender" className="profile-select">
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
            </select>
          </div>
        </form>

        <div className="profile-actions">
          <div className="full-width-btn">
            <Link to="/home">
              <button className="profile-save-settings">
                {t("save_settings")}
              </button>
            </Link>
          </div>
          <div className="profile-actions-row">
            <button className="profile-my-company">{t("my_company")}</button>
            <Link to="/showresumes">
              <button className="profile-my-resumes">{t("my_resumes")}</button>
            </Link>
            <button className="profile-logout-btn" onClick={handleLogout}>
              {t("log_out")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
