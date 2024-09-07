// src/components/Profile.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Profile.css";
import profiledefault from "../../assets/user-default.png";

function Profile() {
  const { t } = useTranslation();
  const [imagePreview, setImagePreview] = useState(profiledefault);
  const [selectedCity, setSelectedCity] = useState("Minsk");
  const cityDistricts = {
    Minsk: [
      "Central",
      "Sovetski",
      "Pervomaysky",
      "Partizansky",
      "Zavodski",
      "Leninsky",
      "Oktyabrsky",
      "Moscow",
      "Frunzenski",
    ],
    Brest: ["Leninski", "Moskovski"],
    Grodno: ["Oktyabrski", "Leninski"],
    Gomel: ["Centralni", "Novobelitski"],
    Mogilev: ["Leninski", "Zadneprovsky"],
    Vitebsk: ["Oktyabrski", "Zheleznodorozhny"],
  };

  const [districts, setDistricts] = useState(cityDistricts["Minsk"]);

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
    const city = e.target.value;
    setSelectedCity(city);
    setDistricts(cityDistricts[city]);
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
              type="text"
              id="date-input"
              name="birthday"
              className="profile-input"
              required
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
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="phone" className="profile-label">
              {t("telephone_number")}:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="profile-input"
              required
              maxLength="20"
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

          <div className="profile-form-row">
            <label htmlFor="select-city" className="profile-label">
              {t("city")}:
            </label>
            <select
              id="select-city"
              name="city"
              className="profile-select"
              value={selectedCity}
              onChange={handleCityChange}
            >
              {Object.keys(cityDistricts).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="profile-form-row">
            <label htmlFor="select-district" className="profile-label">
              {t("district")}:
            </label>
            <select
              id="select-district"
              name="district"
              className="profile-select"
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
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
            <button className="profile-my-resumes">{t("my_resumes")}</button>
            <button className="profile-logout-btn">{t("log_out")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
