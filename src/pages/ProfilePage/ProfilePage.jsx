import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./ProfilePage.css";
import Navbar from "../../components/Navbar/Navbar";
import profiledefault from "../../assets/user-default.png";
import axios from "axios";

// Function to convert data URI to Blob
const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uintArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uintArray[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([uintArray], { type: mimeString });
  return blob;
};

function ProfilePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(profiledefault);
  const [newImage, setNewImage] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("Man");

  // Convert DD.MM.YYYY to YYYY-MM-DD
  const formatDateForInput = (dateStr) => {
    if (!dateStr) return "";
    const [day, month, year] = dateStr.split(".");
    if (!day || !month || !year) return "";
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // Convert YYYY-MM-DD to DD.MM.YYYY
  const formatDateForBackend = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    if (!day || !month || !year) return "";
    return `${day}.${month}.${year}`;
  };

  const fetchProfileData = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      navigate("/login");
      return;
    }

    setEmail(userData.email || "");

    try {
      const user = sessionStorage.getItem("user");

      const response = await axios.get(
        `http://127.0.0.1:8000/profile/?user=${user}`,
        {
          withCredentials: true,
        }
      );
      const profile = response.data;
      setName(profile["auth_user"]["first_name"] || "");
      setSurname(profile["auth_user"]["last_name"] || "");
      setSelectedCity(profile.auth_user?.region?.title || "");
      setSelectedCountry(profile.auth_user?.country?.title || "");
      setPhoneNumber(profile["auth_user"]["phone"] || "");
      setBirthDate(
        profile["auth_user"]["birthday"]
          ? formatDateForInput(profile["auth_user"]["birthday"])
          : ""
      );
      if (profile["auth_user"]["gender"] === "M") {
        setGender("Man");
      } else setGender("Woman");

      const baseURL = "http://127.0.0.1:8000";
      if (profile.auth_user.img) {
        // Add timestamp to prevent caching
        setImagePreview(
          `${baseURL}${profile.auth_user.img}?t=${new Date().getTime()}`
        );
      } else {
        setImagePreview(profiledefault);
      }
    } catch (error) {
      console.error(error);
      alert(t("failed_to_load_profile"));
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [navigate, t]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handleSaveProfile = async (event) => {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      alert(t("user_not_authenticated"));
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", name);
    formData.append("last_name", surname);
    formData.append("city", selectedCity);
    formData.append("country", selectedCountry);
    formData.append("phone", phoneNumber);
    formData.append("birthday", formatDateForBackend(birthDate));
    formData.append("gender", gender === "Man" ? "M" : "W");

    // Handle image upload
    if (newImage) {
      formData.append("img", newImage);
    } else if (
      imagePreview !== profiledefault &&
      imagePreview.startsWith("data:image")
    ) {
      const file = dataURItoBlob(imagePreview);
      if (file) {
        formData.append("img", file, "profile.jpg");
      }
    }

    try {
      const user = sessionStorage.getItem("user");
      await axios.post(
        `http://127.0.0.1:8000/profile/?user=${user}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      alert(t("profile_updated_successfully"));
      setNewImage(null); // Reset the new image state
      await fetchProfileData(); // Refresh the profile data
    } catch (error) {
      console.error("Error while saving profile:", error);
      alert(t("profile_update_error"));
    }
  };

  return (
    <div className="profile-container-wrapper">
      <Navbar />
      <div className="profile-container">
        <h1 className="profile-heading">{t("personal_area")}</h1>
        <form
          id="profile-form"
          className="profile-form"
          onSubmit={handleSaveProfile}
        >
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
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
              onChange={(e) => setBirthDate(e.target.value)}
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
              readOnly
            />
          </div>

          <div className="profile-form-row">
            <label htmlFor="select-country" className="profile-label">
              {t("Сountry")}:
            </label>
            <select
              type="text"
              id="select-country"
              name="country"
              className="profile-input"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="Belarus">Belarus</option>
              <option value="Russia">Russia</option>
            </select>
          </div>

          <div className="profile-form-row">
            <label htmlFor="select-city" className="profile-label">
              {t("city")}:
            </label>
            <select
              type="text"
              id="select-city"
              name="city"
              className="profile-input"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="Minsk">Minsk</option>
              <option value="Brst">Brest</option>
            </select>
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
            <select
              id="gender"
              name="gender"
              className="profile-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
            </select>
          </div>

          <div className="profile-actions">
            <button type="submit" className="profile-save-settings">
              {t("save_settings")}
            </button>
            <div className="profile-actions-row">
              <button className="profile-my-company">{t("my_company")}</button>
              <Link to="/showresumes">
                <button className="profile-my-resumes">
                  {t("my_resumes")}
                </button>
              </Link>
              <button className="profile-logout-btn" onClick={handleLogout}>
                {t("log_out")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
